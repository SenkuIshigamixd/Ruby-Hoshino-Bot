// --- VALORES NECESARIOS PARA LA NUEVA FUNCIONALIDAD ---
const newsletterJid = '120363335626706839@newsletter';
const newsletterName = '✵.｡.✰ 𝕊𝕚𝕗𝕦 𝔹𝕠𝕥 ✰.｡.✵';
const packname = '*Sifu Bot*';

// Array de miniaturas
const iconos = [
'https://urli.info/1ja5U',
'https://urli.info/1ja5U',
'https://urli.info/1ja5U',
'https://urli.info/1ja5U',
'https://urli.info/1ja65',
'https://urli.info/1ja65',
'https://urli.info/1ja65',
'https://urli.info/1ja65',
'https://urli.info/1ja6g',
'https://urli.info/1ja6g',
'https://urli.info/1ja6g',
'https://urli.info/1ja6g',
'https://urli.info/1ja6u',
'https://urli.info/1ja6u',
'https://urli.info/1ja6u',
'https://urli.info/1ja6u',
'https://urli.info/1emDm',
'https://urli.info/1emDm',
'https://urli.info/1emDm',
'https://urli.info/1emDm',
'https://urli.info/1emDs',
'https://urli.info/1emDs',
'https://urli.info/1emDs'
];

// Función para obtener una aleatoria
const getRandomIcono = () => iconos[Math.floor(Math.random() * iconos.length)];

/**
 * Plugin centralizado para manejar todos los mensajes de error de permisos.
 */
const handler = (type, conn, m, comando) => {
  const msg = {
  rowner: '🐶Esta función solo la puede usar mi creador celestial...* 🌌\n\n> *Dioneibi-sama.*',
  owner: '🐶Solo mi creador y programadores pueden usar este comando!* 💾💕',
  mods: '「🌟Esto eso solo lo pueden usar mis desarrolladores mágicos!* 🔮',
  premium: '🐶Esta función es exclusiva para usuarios Premium-desu!* ✨\n\n💫 *¿No eres premium aún? Consíguelo ahora usando:*\n> ✨ *.comprarpremium 2 dias*  (o reemplaza "2 dias" por la cantidad que desees).',
  group: '🐶Este comando solo puede usarse en grupos grupales!* 👥',
  private: '🐶Este comando es solo para ti y para mí, en privado* 💌',
  admin: '🐶Solo los admin-senpai pueden usar esta habilidad!* 🛡️',
  botAdmin: '「🔧」 *¡Espera! Necesito ser admin para que este comando funcione correctamente.*\n\n🔧 *Hazme admin y desataré todo mi poder~*',
  unreg: `🐶 𝑶𝒉 𝒏𝒐! *¡Aún no estás registrado!* 😿\nNecesito conocerte para que uses mis comandos~ ✨\n\n📝 Por favor regístrate con:\n */reg nombre.edad*\n\n🎶 Ejemplo encantado:\n */reg Dioneibi-kun.15*\n\n💖 ¡Así podré reconocerte~! (⁎˃ᴗ˂⁎)`,
  restrict: '「📵」 *¡Ouh~! Esta función está dormida por ahora~* 💤'
  }[type];

  if (msg) {
    const contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid,
        newsletterName,
        serverMessageId: -1
      },
      externalAdReply: {
        title: packname,
        body: '🐶 𝐇𝐨𝐥𝐚𝐚𝐚! (≧∇≦)/',
        thumbnailUrl: getRandomIcono(), // ← aleatoria
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    };

    return conn.reply(m.chat, msg, m, { contextInfo }).then(_ => m.react('✖️'));
  }

  return true;
};

export default handler;
