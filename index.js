const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

const {prefix, baaniId, vitimId, mhId, twId, jeffeId, zauId, madId, kilosId} = require('./config.json')

client.login('ODQxOTk5NjI3NTY5OTg3NTk0.YJu7Qg.DXwPglUL1x5rAei3wAIOhRUsfEk')

client.on('message', message => {
	console.log(message.content);
    if (message.content === "!loopdobaani"){ 
      if(message.member.permissions.has('ADMINISTRATOR')){
        var interval = setInterval (function () {
          message.channel.send("Você conhece a página do fan clube do BAANILOFF? SE NÃO, ENTRE AGORA E DEIXE SEU FOLLOW https://www.instagram.com/baaniloff/")
          // use the message's channel (TextChannel) to send a new message
          .catch(console.error);
      }, 1 * 86400000); 
message.channel.send('Você iniciou o loop do BAANILOFF!')
     } 
     else {
      message.channel.send('Você não tem permissão para usar esse comando!')
     }
}
    else if (message.content === (`${prefix}raid`)) {
      for (let i = 0; i < 5; i++){
    // send back "Pong." to the channel the message was sent in
    message.channel.send("@everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID @everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID @everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID @everyone RAID @everyone RAID @everyone RAID @everyone @everyone RAID")
      }
  }
      else if (message.content.startsWith(`Vitim`)) {
        //send back o chamado de volta 
        message.channel.send('é um mendigo')
      }
      else if (message.content.startsWith(`mendigo`)) {
        message.channel.send('é o Vitim.');
      }
      else if (message.content.startsWith(`zau`)) {
        //send back o chamado de volta 
        message.channel.send('é gay')
    }
    else if (message.content.startsWith(`gay`)) {
      message.channel.send('é zau.');
    }
    else if (message.author.id === zauId) {
        var numeroRandomico = parseInt(((Math.random() * 100 )+ 1))
    console.log(`Numero gerado ${numeroRandomico}`)
    console.log('passou no teste do id')
        if (numeroRandomico < 24) {
          message.channel.send(`${message.author} Man, vocé joga muito`)
        }
        else if (numeroRandomico < 48 ){
          message.channel.send(`${message.author} sou fan`)
        }
        else if (numeroRandomico < 72){
          message.channel.send(`${message.author} q mito`)
        }
        else if (numeroRandomico < 96){
          message.channel.send(`${message.author} CARAI Q FODA`)
        }
        else {
            message.channel.send(
            `Bom dia senhor ${message.author}!
            \nNós da Sociedade Brasileira de Urologia recebemos as suas perguntas enviadas por e-mail, e é um prazer respondê-las:
            \n1) Sim, 9 cm é considerado pequeno. Sugerimos processo cirúrgico;
            \n2) Não, não é comum a camisinha ficar larga. Não existe tamanho PP, o tamanho é único;
            \n3) Ainda que 9 cm seja um tamanho muito pequeno, é possível a parceira chegar ao orgasm0 durante a relação sexual, portanto se isso não ocorre nas suas relações conforme mencionou, pode se tratar de falta de competência de sua parte;
            \n4) Não, o senhor não pode fazer o exame de próstata, é apenas para pessoas acima de 50 anos. Por favor não insista;
            \n5) O forte desejo por pessoas do mesmo sexo ,pode sim ser um forte sinal de tendência ao homossexualismo;`) 
            }
    }
        else if (message.author.id === zauId) {
            var numeroRandomico = parseInt(((Math.random() * 100 )+ 1))
            console.log(`Numero gerado ${numeroRandomico}`)
            console.log('passou no teste do id')
            if (numeroRandomico < 24) {
              message.channel.send(`${message.author} Man, vocé é gay`)
            }
            else if (numeroRandomico < 48 ){
              message.channel.send(`${message.author} cala a boca`)
            }
            else if (numeroRandomico < 72){
              message.channel.send(`${message.author} para de falar merda`)
            }
            else if (numeroRandomico < 96){
              message.channel.send(`${message.author} ateu fudido`)
            }
            else if (numeroRandomico > 96) {
              message.channel.send(
              `Bom dia senhor ${message.author}!
              \nNós da Sociedade Brasileira de Urologia recebemos as suas perguntas enviadas por e-mail, e é um prazer respondê-las:
              \n1) Sim, 9 cm é considerado pequeno. Sugerimos processo cirúrgico;
              \n2) Não, não é comum a camisinha ficar larga. Não existe tamanho PP, o tamanho é único;
              \n3) Ainda que 9 cm seja um tamanho muito pequeno, é possível a parceira chegar ao orgasm0 durante a relação sexual, portanto se isso não ocorre nas suas relações conforme mencionou, pode se tratar de falta de competência de sua parte;
              \n4) Não, o senhor não pode fazer o exame de próstata, é apenas para pessoas acima de 50 anos. Por favor não insista;
              \n5) O forte desejo por pessoas do mesmo sexo ,pode sim ser um forte sinal de tendência ao homossexualismo;`) 
            }
            }
            else if (message.author.id === baaniId) {
                message.channel.send(`${message.author} você é um DEUS`)
            }
            else if (message.author.id === mhId) {
                message.channel.send(`${message.author} JOGA MUITO`)
            }
            else if (message.author.id === twId) {
                message.channel.send(`${message.author} Chefe, você é um grande exemplo de resiliência! Com você, aprendi a manter a calma diante de um problema e a nunca desistir do sucesso. Agradeço por ser um líder tão dedicado e espirituoso!`)
          }
            else if (message.content.startsWith(`${prefix}ip`)) {
              message.channel.send('connect main.vitalrust.com:28015')
            }
            else if (message.content.startsWith(`${prefix}scrim`)){
              if(message.member.permissions.has('ADMINISTRATOR'))
              message.channel.send('@everyone SCRIM AGORA, VEM PRECISO DE MEMBRO PRA AMASSAR GRINGO RUIM ENTRA SÓ NÃO PODE SER RANDOM MAS TUDO BEM SE FOR RANDOM SÓ NÃO DIRIGE A PALAVRA AO SAK')
            else{
              message.channel.send('Você não tem permissão para usar esse comando!')
            }
            }

});
    
    

