let handler = async (m, { conn }) => {


  const texto = `
💰🎮⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐞𝐜𝐨𝐧𝐨𝐦𝐢́𝐚 𝐲 𝐑𝐏𝐆 𝐩𝐚𝐫𝐚 𝐠𝐚𝐧𝐚𝐫 𝐝𝐢𝐧𝐞𝐫𝐨 𝐲 𝐨𝐭𝐫𝐨𝐬 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬 🏆💎⊹

ൃ⵿꤬ᩚ̸̷͠ᩘ🍒̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#w • #work • #trabajar*  
> ✦ Trabaja para ganar ${moneda}.

ൃ⵿꤬ᩚ̸̷͠ᩘ🎀̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#slut • #protituirse*  
> ✦ Trabaja como prostituta y gana ${moneda}.

ൃശ⵿꤬ᩚ̸̷͠ᩘ🍨̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#cf • #suerte*  
> ✦ Apuesta tus ${moneda} a cara o cruz.

ൃശ⵿꤬ᩚ̸̷͠ᩘ🌸̷̸ᩚ⃨⢾ ֺ ֢ ᮫ ⵿ ─ *#crime • #crimen*  
> ✦ Trabaja como ladrón para ganar ${moneda}.

ൃശ⵿꤬ᩚ̸̷͠ᩘ🪷̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#ruleta • #roulette • #rt*  
> ✦ Apuesta ${moneda} al color rojo o negro.

Ự⵿꤬ᩚ̸̷͠ᩘ🥡̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#casino • #apostar*  
> ✦ Apuesta tus ${moneda} en el casino.

ൃശ⵿꤬ᩚ̸̷͠ᩘ🍒̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#slot*  
> ✦ Apuesta tus ${moneda} en la ruleta.

ൃശ⵿꤬ᩚ̸̷͠ᩘ🎀̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#cartera • #wallet*  
> ✦ Ver tus ${moneda} en cartera.

 Вс⵿꤬ᩚ̸̷͠ᩘ🍨̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#banco • #bank*  
> ✦ Ver tus ${moneda} en banco.

 रु⵿꤬ᩚ̸̷͠ᩘ🌸̷̸ᩚ⃨⢾ ֺ ֢ ᮫ ⵿ ─ *#deposit • #depositar • #d*  
> ✦ Deposita tus ${moneda} al banco.

ેડ⵿꤬ᩚ̸̷͠ᩘ🪷̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#with • #retirar • #withdraw*  
> ✦ Retira tus ${moneda} del banco.

ércoles⵿꤬ᩚ̸̷͠ᩘ🥡̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#transfer • #pay*  
> ✦ Transfiere ${moneda} o XP a otros usuarios.

_poetry⵿꤬ᩚ̸̷͠ᩘ🍒̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#miming • #minar • #mine*  
> ✦ Trabaja como minero y recolecta recursos.

_poetry⵿꤬ᩚ̸̷͠ᩘ🎀̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#buyall • #buy*  
> ✦ Compra ${moneda} con tu XP.

_poetry⵿꤬ᩚ̸̷͠ᩘ🍨̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#daily • #diario*  
> ✦ Reclama tu recompensa diaria.

_poetry⵿꤬ᩚ̸̷͠ᩘ🌸̷̸ᩚ⃨⢾ ֺ ֢ ᮫ ⵿ ─ *#cofre*  
> ✦ Reclama un cofre diario.

_poetry⵿꤬ᩚ̸̷͠ᩘ🪷̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#weekly • #semanal*  
> ✦ Regalo semanal.

_poetry⵿꤬ᩚ̸̷͠ᩘ🥡̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#monthly • #mensual*  
> ✦ Recompensa mensual.

_poetry⵿꤬ᩚ̸̷͠ᩘ🍒̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#steal • #robar • #rob*  
> ✦ Intenta robar ${moneda} a alguien.

_poetry⵿꤬ᩚ̸̷͠ᩘ🎀̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#robarxp • #robxp*  
> ✦ Intenta robar XP a un usuario.

_poetry⵿꤬ᩚ̸̷͠ᩘ🍨̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#eboard • #baltop*  
> ✦ Ver ranking de usuarios con más ${moneda}.

_poetry⵿꤬ᩚ̸̷͠ᩘ🌸̷̸ᩚ⃨⢾ ֺ ֢ ᮫ ⵿ ─ *#aventura • #adventure*  
> ✦ Explora y gana ${moneda}.

_poetry⵿꤬ᩚ̸̷͠ᩘ🪷̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#curar • #heal*  
> ✦ Cura tu salud.

_poetry⵿꤬ᩚ̸̷͠ᩘ🥡̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#cazar • #hunt • #berburu*  
> ✦ Caza animales.

_poetry⵿꤬ᩚ̸̷͠ᩘ🍒̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#inv • #inventario*  
> ✦ Ver tu inventario.

_poetry⵿꤬ᩚ̸̷͠ᩘ🎀̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#mazmorra • #explorar*  
> ✦ Explorar mazmorras.

_poetry⵿꤬ᩚ̸̷͠ᩘ🍨̷̸ᩚ⃨⢾ ֺ ֢ ᮫  ─ *#halloween*  
> ✦ Truco o trato (Halloween).

_poetry⵿꤬ᩚ̸̷͠ᩘ🌸̷̸ᩚ⃨⢾ ֺ ֢ ᮫ ⵿ ─ *#christmas • #navidad*  
> ✦ Regalo navideño.
  `.trim();

  conn.sendFile(m.chat, 'https://urli.info/1el3V', 'descargas.jpg', texto, m, false, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '🌵 ¡chambea, gana y diviertete con estos grandiosos comandos!',
        body: '🤖 comandos de economía y rpg 🌟',
        thumbnailUrl: 'https://urli.info/1j8vp',
        mediaType: 1,
        renderLargerThumbnail: false,
        showAdAttribution: true,
        mediaUrl: 'https://whatsapp.com/channel/0029VbBZVZp0bIdoFnHtP82v',
        sourceUrl: 'https://whatsapp.com/channel/0029VbBZVZp0bIdoFnHtP82v',
        newsletterJid: '120363335626706839@newsletter',
        newsletterName: '*Sifu Bot*'
      }
    }
  });
};

handler.command = ['menueconomia', 'rpgmenu', 'menurpg'];
export default handler;
