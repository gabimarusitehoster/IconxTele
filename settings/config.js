const fs = require('fs')
global.prefa = ['','!','.',',','/','#','^','+'] 

/** info id **/
global.owner = "2348161358119@s.whatsapp.net"
global.idch = "120363377644018495@newsletter"

/** jika bernilai "true" berarti aktif, dan sebaliknya kalau "false" **/
global.status = false
global.welcome = false
global.antispam = true
global.autoread = false

/** sticker watermark **/
global.packname = 't.me/baeicon'
global.author = 'Icon-wave'

/** link group atau link channel WhatsApp **/
global.linkch = 'https://whatsapp.com/channel/0029Vb4n7DwAjPXDu1O50A34'

/** limit user premium dan bukan premium **/
global.gcount = {
    prem : 500,
    user: 15
}

/** limit **/
global.limitCount = 10,

/** message **/
global.mess = {
    group: "𝙊𝙣𝙡𝙮 𝙂𝙧𝙤𝙪𝙥",
    admin: "𝙊𝙣𝙡𝙮 𝘼𝙙𝙢𝙞𝙣",
    owner: "𝙊𝙣𝙡𝙮 𝙊𝙬𝙣𝙚𝙧 𝘼𝙘𝙘𝙚𝙨𝙨",
    premium: "𝙊𝙣𝙡𝙮 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝘼𝙘𝙘𝙚𝙨𝙨",
    botadmin: "𝙊𝙣𝙡𝙮 𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣",
    limited: "𝙇𝙞𝙢𝙞𝙩𝙚𝙙, 𝘽𝙖𝙘𝙠 𝙏𝙤𝙙𝙖𝙮",
    private: "𝙊𝙣𝙡𝙮 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝘾𝙝𝙖𝙩",
    s: "𝙎𝙪𝙘𝙘𝙚𝙨𝙨"
}

global.botname2 = "𝑿-𝑪𝒓𝒂𝒔𝒉𝒆𝒓"
global.versi = "𝑳𝒊𝒕𝒆"
global.owner = "𝑰𝒄𝒐𝒏-𝒘𝒂𝒗𝒆"

//========== Setting Panel Server  1==========//
global.egg = "15"
global.nestid = "5" // nest ID
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
global.creatorName = "𝑰𝒄𝒐𝒏𝒘𝒂𝒗𝒆"

global.url1 = 'https://whatsapp.com/channel/0029VayUeHmE50UYxlX4Km2K' //
global.url𝟏 = 'https://whatsapp.com/channel/0029VayUeHmE50UYxlX4Km2K'

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
                        
