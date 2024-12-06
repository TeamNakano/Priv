let handler = async (m, { conn, isRowner}) => {
let _muptime
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length
let pp = imagen1
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const used = process.memoryUsage()
let yaemori = `╭─⬣「 *Estado De ${botname}* 」⬣\n`
yaemori += `│  *Propietario ∙* Team Nakano\n`
yaemori += `│  *Grupos Unidos ∙* ${groupsIn.length}\n`
yaemori += `│  *Chats Privados ∙* ${chats.length - groupsIn.length}\n`
yaemori += `│  *Total De Chats ∙* ${chats.length}\n`
yaemori += `│  *Usuarios Registrados ∙* ${totalreg}\n`
yaemori += `│  *Grupos Registrados ∙* ${totalchats}\n`
yaemori += `│  *Actividad ∙* ${muptime}\n`
yaemori += `╰─⬣`
await conn.sendFile(m.chat, pp, 'yaemori.jpg', yaemori, fkontak, null, rcanal)
}
handler.help = ['status']
handler.tags = ['info']
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats']
handler.register = false
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
