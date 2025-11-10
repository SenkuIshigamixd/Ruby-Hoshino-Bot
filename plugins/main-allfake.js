import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m

handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
  try {
    options ? options : {}
    var res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'User-Agent': 'GoogleBot',
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    })
    return res.data
  } catch (e) {
    console.log(`Error : ${e}`)
  }
}

const iconUrls = [
  "https://urli.info/1ekgv", "https://urli.info/1j7GO",
  "https://urli.info/1j7FA", "https://urli.info/1j7GO",
  "https://urli.info/1j7FA", "https://urli.info/1j7GO",
  "https://urli.info/1j7FA", "https://urli.info/1j7GO",
  "https://urli.info/1j7FT",  "https://urli.info/1j7H4",
  "https://urli.info/1j7FT",  "https://urli.info/1j7H4",
  "https://urli.info/1j7FT",  "https://urli.info/1j7H4",
  "https://urli.info/1j7FT",  "https://urli.info/1j7H4",
  "https://urli.info/1ekhm", "https://urli.info/1ekiw",
  "https://urli.info/1ekhm", "https://urli.info/1ekiw",
  "https://urli.info/1ekhm", "https://urli.info/1ekiw",
  "https://urli.info/1ekhm", "https://urli.info/1ekiw",
  "https://urli.info/1ekhw", "https://urli.info/1ekiw",
  "https://urli.info/1ekhw",  "https://urli.info/1j7HG",
  "https://urli.info/1ekhw", "https://urli.info/1ekiY",
  "https://urli.info/1ekhw"
]

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const iconUrl = pickRandom(iconUrls)
global.icono = await getBuffer(iconUrl)

global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.creador = 'Wa.me/18294868853'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/18294868853'
global.namechannel = 'Sifu WhatsApp'
global.namechannel2 = 'Sifu Bot WhatsApp'
global.namegrupo = '⏤͟͞ू⃪ 𝑹𝒖𝒃𝒚-𝑯𝒐𝒔𝒉𝒊𝒏𝒐-𝐵ot ⌬⃝𓆩⚘𓆪 𝐎𝐟𝐟𝐢cial'
global.namecomu = '⏤͟͞ू⃪ 𝑹𝒖𝒃𝒚-𝑯𝒐𝒔𝒉𝒊𝒏𝒐 ✦⃝𖤐 𝑪𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚'
global.listo = '❀ *Aquí tienes ฅ^•ﻌ•^ฅ*'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://urli.info/1ekiY')

global.canalIdM = ["120363335626706839@newsletter", "120363335626706839@newsletter"]
global.canalNombreM = ["𝕊𝕚𝕗𝕦 𝔹𝕠𝕥 𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡"]
global.channelRD = await getRandomChannel()

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'
global.msm = '⚠︎'

global.emoji = '🍨'
global.emoji2 = '🍭'
global.emoji3 = '🌺'
global.emoji4 = '💗'
global.emoji5 = '🍡'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

global.wait = '❝ 𝐴𝑔𝑢𝑎𝑟𝑑𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 ❞';

var canal = 'https://whatsapp.com/channel/0029VbBZVZp0bIdoFnHtP82v'
let canal2 = 'https://whatsapp.com/channel/0029VbBZVZp0bIdoFnHtP82v'
var git = 'https://github.com/Dioneibi-rip'
var github = 'https://github.com/Dioneibi-rip/Ruby-Hoshino-Bot' 
let correo = 'ulcidecono@gmail.com'
global.redes = [canal, canal2, git, github, correo].getRandom()

let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

var ase = new Date(); var hour = ase.getHours();
switch(hour){
  case 0: case 1: case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;
  case 3: case 4: case 5: case 6: case 8: case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break;
  case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break;
  case 10: case 11: case 12: case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break;
  case 14: case 15: case 16: case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break;
  default: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'
}
global.saludo = hour

global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@")[0]
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.packsticker = `╭━━꯭━⵿─꯭─「 ☾ 」─꯭─⵿━꯭━━╮
│ ░ 𝗕𖦹𝘁: ${botname}
│ ░ 𝗨𝘀𝗲𝗿: ${nombre}
╰━━꯭━⵿─꯭─「 ${fecha} 」─꯭─⵿━꯭━━╯`

global.rcanal = {
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: channelRD.id,
      serverMessageId: 100,
      newsletterName: channelRD.name,
    },
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      body: dev,
      mediaUrl: null,
      description: null,
      previewType: "PHOTO",
      thumbnail: global.icono,
      sourceUrl: global.redes,
      mediaType: 1,
      renderLargerThumbnail: false
    },
  }
}

}

export default handler

async function getRandomChannel() {
  let randomIndex = Math.floor(Math.random() * canalIdM.length)
  let id = canalIdM[randomIndex]
  let name = canalNombreM[randomIndex]
  return { id, name }
}

