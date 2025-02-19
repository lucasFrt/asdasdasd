import { log } from "#settings";
import ck from "chalk";
import { ApplicationCommandType, Collection } from "discord.js";
export class Command {
    static Handlers = new Collection();
    static Commands = new Collection();
    constructor(data) {
        data.dmPermission ??= false;
        data.type ??= ApplicationCommandType.ChatInput;
        Command.Commands.set(data.name, data);
        Command.Handlers.set(data.name, {
            run: data.run, autocomplete: "autocomplete" in data ? data.autocomplete : undefined
        });
    }
    static async register(addMessage, client, guilds) {
        const plural = (value) => value > 1 ? "s" : "";
        if (guilds?.size) {
            const [globalCommands, guildCommads] = Command.Commands.partition(c => c.global === true);
            await client.application.commands.set(Array.from(globalCommands.values()))
                .then(({ size }) => Boolean(size) &&
                addMessage(`⤿ ${size} command${plural(size)} successfully registered globally!`));
            for (const guild of guilds.values()) {
                await guild.commands.set(Array.from(guildCommads.values()))
                    .then(({ size }) => addMessage(`⤿ ${size} command${plural(size)} registered in ${ck.underline(guild.name)} guild successfully!`));
            }
            Command.Commands.clear();
            return;
        }
        for (const guild of client.guilds.cache.values()) {
            guild.commands.set([]);
        }
        await client.application.commands.set(Array.from(Command.Commands.values()))
            .then(({ size }) => addMessage(`⤿ ${size} command${plural(size)} successfully registered globally!`));
        Command.Commands.clear();
    }
    static onCommand(interaction) {
        const command = Command.Handlers.get(interaction.commandName);
        if (!command)
            return;
        command.run(interaction);
    }
    static onAutocomplete(interaction) {
        const command = Command.Handlers.get(interaction.commandName);
        if (!command || !command.autocomplete)
            return;
        command.autocomplete(interaction);
    }
    static loadLogs() {
        for (const [name] of Command.Commands) {
            log.success(ck.green(`{/} ${ck.blue.underline(name)} command loaded!`));
        }
    }
}
