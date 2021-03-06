const math = require('mathjs');
const Discord = require('discord.js');

module.exports = {
    name:"calculate",
    description: "Get an answer to a math problem",
    
    async run(client, message, args){

    let resp;

    try { 
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.reply('Please provide a **valid** math question.')
        .then(msg => {
            msg.delete({ timeout: 2500});
            
        })
    }

    if(!args[0]) 
    return message.reply('Please provide a **valid** math question.')
            .then(msg => {
                msg.delete({ timeout: 2500});
                
    })
    
    let embed = new Discord.MessageEmbed()
        .setTitle("Calculating...")
        .setColor('#16161d') 
    message.channel.send(embed).then((resultMessage)  => {

    let resultEmbed = new Discord.MessageEmbed()
    .setColor('#16161d')
    .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

    resultMessage.edit(resultEmbed);

  
    })

    }
}