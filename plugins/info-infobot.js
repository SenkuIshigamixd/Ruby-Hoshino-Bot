import db from '../lib/database.js';
import { cpus as _cpus, totalmem, freemem, platform, hostname } from 'os';
import { sizeFormatter } from 'human-readable';

let format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
});

function formatUptime(seconds) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    
    let uptimeString = '';
    if (d > 0) uptimeString += `${d}d `;
    if (h > 0) uptimeString += `${h}h `;
    if (m > 0) uptimeString += `${m}m `;
    if (s > 0) uptimeString += `${s}s`;
    
    return uptimeString.trim() || '0s';
}


let handler = async (m, { conn, usedPrefix }) => {
    
    let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0);
    let totalPlugins = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    let uptime = process.uptime();
    let ownerName = global.owner[0]?.[0] || 'Desconocido';

    const cpus = _cpus() || [];
    const cpuModel = cpus[0]?.model || 'N/A';
    const cpuCores = cpus.length;
    const osPlatform = platform();
    const osHostname = hostname();

    const ramTotal = totalmem();
    const ramFree = freemem();
    const ramUsed = ramTotal - ramFree;

    const nodeMemory = process.memoryUsage();

    let info = `
*━━━「 ℹ️ INFO DEL BOT 」━━━*

🤖 *Bot:* ${global.botname}
👤 *Owner:* ${ownerName}
#️⃣ *Prefijo:* ${usedPrefix}

---
*📊 ESTADÍSTICAS*
*▸ Plugins:* ${totalPlugins}
*▸ Comandos Usados:* ${totalStats.toLocaleString('es-ES')}
*▸ Actividad:* ${formatUptime(uptime)}

---
*🖥️ SERVIDOR (HOST)*
*▸ Plataforma:* ${osPlatform}
*▸ Host:* ${osHostname}
*▸ CPU:* ${cpuModel} (${cpuCores} núcleos)
*▸ RAM (Usada):* ${format(ramUsed)}
*▸ RAM (Total):* ${format(ramTotal)}

---
*⚙️ USO DE MEMORIA (Node.js)*
\`\`\`
${Object.keys(nodeMemory).map(key => `${key.padEnd(10)}: ${format(nodeMemory[key])}`).join('\n')}
\`\`\`
`.trim();



    const imageUrl = 'https://acortar.link/CpaVor';

    await conn.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: info,
        contextInfo: {
            mentionedJid: [global.owner[0]?.[0] ? global.owner[0][0] + '@s.whatsapp.net' : '']
        }
    }, { quoted: m });
};

handler.help = ['botinfo'];
handler.tags = ['info'];
handler.command = ['info', 'botinfo', 'infobot'];

export default handler;
