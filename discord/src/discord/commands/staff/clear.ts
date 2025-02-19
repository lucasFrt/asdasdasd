import { Command } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType, codeBlock, roleMention } from "discord.js";
import { brBuilder } from "functions/utils/format.js";


const moderationRoleId   = "1019682111487234128";

export default new Command ({
    name: "limpar",
    description: "Comando para limpar mensagens de um determinado canal.",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "Quantidade",
            description: "Quantidade de mensagens a serem deletadas.",
            type: ApplicationCommandOptionType.Integer,
        },
        {
            name: "autor",
            description: "Escolhe um usuario para apagar mensagens especificamente dele",
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "mensagem",
            description: "Deleta uma mensagem especifica do canal.",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,

        },

    ],
    async run(interaction) {
        const { member, options, channel } = interaction;


        await interaction.deferReply({ephemeral: true});

        if (!member.roles.cache.has(moderationRoleId)) {
            interaction.editReply ({
                content: `Apenas membros com o cargo ${roleMention(moderationRoleId)} podem utilizar este comando.`
            });

        }

        if (!channel?.isTextBased()) {
            interaction.editReply ({ content: "Nao e possivel utilizar este comando neste canal."});
            return;
        }

        const amount = options.getInteger("quantidade") || 1;
        const mention = options.getMember("autor");
        const messageId = options.getString("mensagem");

        if (messageId) { 
            channel.messages.delete(messageId)
            .then(() => interaction.editReply ({
                content: "A mensagem foi deletada com sucesso!"
            }))
            .catch((err) => interaction.editReply ({
                content: brBuilder("Nao foi possivel apagar a mensagem.", codeBlock("ts", err))
            }));
        }

        if(mention) {
            const messages = await channel.messages.fetch();
            const filtered = messages.filter(m => m.author.id == mention.id);
            channel.bulkDelete(filtered.first(amount))
            .then((cleared) => interaction.editReply({
                content: cleared.size
                ? `${cleared.size} mensagens de ${mention} deletadas com sucesso!`
                : `Nao ha mensagens de ${mention} para serem deletadas. `,

            }));
            


            
            return;
        }
    }
});