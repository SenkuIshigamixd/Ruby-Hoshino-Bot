import db from '../lib/database.js';
import fetch from 'node-fetch';

const shopItems = {
  consumibles: `*CONSUMIBLES* (Usar: .use <item>)
────────────────
🧪 *Poción de Salud* (health_potion)
   › Cura 50 HP.
   › *Costo:* 750 Coins
   
🧪 *Poción de Suerte* (luck_potion)
   › Aumenta la suerte en /crimen y /explorar por 1 hora.
   › *Costo:* 2,500 Coins
   
🗝️ *Ganzúa Maestra* (lockpick)
   › Garantiza 1 éxito en /crimen (no evita cárcel).
   › *Costo:* 7,500 Coins
   
🛡️ *Amuleto de Escape* (escape_amulet)
   › Evita la cárcel 1 vez (se consume al ser atrapado).
   › *Costo:* 15,000 Coins
`,
  equipamiento: `*EQUIPAMIENTO* (Se equipa automáticamente)
────────────────
*Armas:*
🗡️ *Daga Oxidada* (weapon_daga_oxidada)
   › Daño Base: 10
   › *Costo:* 5,000 Coins
   
⚔️ *Espada de Acero* (weapon_espada_acero)
   › Daño Base: 50
   › *Costo:* 25,000 Coins
   
*Armaduras:*
👕 *Ropa de Tela* (armor_ropa_tela)
   › Defensa: 5%
   › *Costo:* 4,000 Coins
   
🧥 *Armadura de Cuero* (armor_armadura_cuero)
   › Defensa: 15%
   › *Costo:* 20,000 Coins
   
*Herramientas:*
⛏️ *Kit de Ladrón* (tool_kit_ladron)
   › Aumenta ganancias de /crimen en 10%.
   › *Costo:* 30,000 Coins
`,
  cofres: `*COFRES Y LOTERÍA* (Usar: .use <item>)
────────────────
🎁 *Cofre Misterioso* (mysterious_chest)
   › ¿Qué habrá dentro? Podría ser cualquier cosa...
   › *Costo:* 50,000 Coins
`,
  mascotas: `*MASCOTAS* (Próximamente...)
────────────────
🥚 *Huevo de Lobo*
   › *Costo:* 100,000 Coins
   
🥚 *Huevo de Grifo*
   › *Costo:* 500,000 Coins
`
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    let user = global.db.data.users[m.sender];
    if (!user) return m.reply('❌ No estás registrado. Usa .reg para registrarte.');
    let moneda = global.moneda || 'Coins';
    let category = (text || '').trim().toLowerCase();
    let categories = ['consumibles', 'equipamiento', 'cofres', 'mascotas'];

    const contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363335626706839@newsletter',
        newsletterName: 'Sifu Bot',
        serverMessageId: -1
      },
      externalAdReply: {
        title: '⸜( •⌄• )⸝ 𝘛𝘐𝘌𝘕𝘋𝘈 𝘙𝘗𝘎 𝘖𝘍𝘐𝘊𝘐𝘈𝘓 🥡',
        body: global.dev || 'Elige una opción',
        thumbnail: global.icons || 'https://urli.info/1el6n',
        sourceUrl: global.redes || '',
        mediaType: 1,
        renderLargerThumbnail: false
      }
    };

    const emojiMap = { consumibles: '🧪', equipamiento: '⚔️', cofres: '🎁', mascotas: '🥚' };
    if (category && categories.includes(category)) {
      if (m.react) try { await m.react(emojiMap[category] || '🛍️'); } catch { }
      let replyText = shopItems[category].replace(/Coins/g, moneda);
      await conn.reply(m.chat, replyText, m, { contextInfo });
      return;
    }

    const imgUrl = 'https://files.catbox.moe/yeojfu.jpg';
    const imgBuffer = await fetch(imgUrl).then(r => r.buffer());

    const buttons = [
      { buttonId: `${usedPrefix + command} consumibles`, buttonText: { displayText: '🧃 𝙘𝙤𝙣𝙨𝙪𝙢𝙞𝙗𝙡𝙚𝙨' }, type: 1 },
      { buttonId: `${usedPrefix + command} equipamiento`, buttonText: { displayText: '⚔️ 𝙚𝙦𝙪𝙞𝙥𝙖𝙢𝙞𝙚𝙣𝙩𝙤' }, type: 1 },
      { buttonId: `${usedPrefix + command} cofres`, buttonText: { displayText: '🎁 𝙘𝙤𝙛𝙧𝙚𝙨' }, type: 1 },
      { buttonId: `${usedPrefix + command} mascotas`, buttonText: { displayText: '🥚 𝙢𝙖𝙨𝙘𝙤𝙩𝙖𝙨' }, type: 1 }
    ];

    const introText = `🏪 *TIENDA RPG* 🏪\n\n¡Bienvenido, ${await conn.getName(m.sender)}!\nSelecciona una categoría para ver los objetos.\n\n🪙 Tienes: *${(user.coin || 0).toLocaleString()} ${moneda}*`;

    await conn.sendMessage(m.chat, {
      image: imgBuffer,
      caption: introText,
      footer: '🐾 ' + (global.packname || 'Tu Bot RPG'),
      buttons,
      headerType: 4,
    }, { quoted: m });

  } catch (err) {
    let errorMsg = `❌ *Error en el comando ${command}:*\n\n> ${err?.message || String(err)}\n\n📜 *Detalles técnicos:*\n${err?.stack || 'No disponible'}`;
    await conn.reply(m.chat, errorMsg, m);
  }
};

handler.help = ['shop', 'tienda'];
handler.tags = ['rpg'];
handler.command = ['shop', 'tienda'];
handler.register = true;
handler.group = true;

export default handler;
