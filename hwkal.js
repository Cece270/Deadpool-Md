
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39'
global.ig = 'confronter._' // ubah aja
global.email = 'confrontermfisa@gmail.com' //serah
global.region = 'Nigeria' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝓒𝓔𝓛𝓔𝓢𝓣𝓘𝓐𝓛' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['2349051769752'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝛧𝑈𝛧𝑈𝐿𝛪𝛥𝛮' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝛧𝑈𝛧𝑈𝐿𝛪𝛥𝛮' // ubah aja ini nama sticker
global.author = '𝓒𝓔𝓛𝓔𝓢𝓣𝓘𝓐𝓛' // ubah aja ini nama sticker
global.prefa = ['.']
global.sessionName = 'classicsession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.antivv = true
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
