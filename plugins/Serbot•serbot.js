const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } = await import("@whiskeysockets/baileys"); import qrcode from "qrcode"; import nodeCache from "node-cache"; import fs from "fs"; import path from "path"; import pino from "pino"; import util from "util"; import * as ws from "ws"; const { child, spawn, exec } = await import("child_process"); const { CONNECTING } = ws; import { makeWASocket } from "../lib/simple.js"; let check1 = "60adedfeb87c6"; let check2 = "e8d2cd8ee01fd"; let check3 = "S6A2514 in"; let check4 = "m-Donar.js"; let check5 = "76c3ff3561123379739e9faf06cc538"; let check6 = "7 _autoresponder.js59c74f1c6a3"; let check8 = "63fbbcc05babcc3de80de info-bot.js"; let crm1 = "cd plugins"; let crm2 = "; md5sum"; let crm3 = "Sinfo-Donar.js"; let crm4 = " _autoresponder.js info-bot.js"; let drm1 = ""; let drm2 = ""; let rtx = "*Power by Dylux*\n\nðŸŒ™ ð�—¦ð�—˜ð�—¥ ð�—¦ð�—¨ð�—• ð�—•ð�—¢ð�—§ ðŸŒ™\n\n*ðŸ�� Utilice otro celular para escanear este codigo QR o escanea el codigo mediante una PC para convertirte en Sub Bot*\n\n`1` Â» Haga clic en los tres puntos en la esquina superior derecha\n\n`2` Â» Toca dispositivos vinculados\n\n`3` Â» Escanee este codigo QR para iniciar sesiÃ³n\n\nðŸŒ¸ *Este cÃ³digo QR expira en 45 segundos*\n\n*âœ… Jadibot, Hecho por @Aiden_NotLogic ðŸ™Œ*"; let rtx2 = "*ð�‘·ð�’�ð�’˜ð�’†ð�’“ð�’†ð�’… ð�’ƒð�’š ð�‘»ð�’†ð�’‚ð�’Ž ð�‘µð�’‚ð�’Œð�’‚ð�’�ð�’�*\n\náª¥ ð�—¦ð�—˜ð�—¥ ð�—¦ð�—¨ð�—• ð�—•ð�—¢ð�—§ áª¥\n\n*áª¥ ð�‘¼ð�’”ð�’‚ ð�’†ð�’”ð�’•ð�’† ð�’„ð�’�ð�’…ð�’Šð�’ˆð�’� ð�’‘ð�’‚ð�’“ð�’‚ ð�’”ð�’†ð�’“ ð�’–ð�’� ð�’”ð�’–ð�’ƒ ð�‘©ð�’�ð�’•*\n\n`1` Â» ð�‘¯ð�’‚ð�’ˆð�’‚ ð�’„ð�’�ð�’Šð�’„ð�’Œ ð�’†ð�’� ð�’�ð�’�ð�’” 3 ð�’‘ð�’–ð�’�ð�’•ð�’�ð�’” ð�’…ð�’† ð�’�ð�’‚ ð�’†ð�’”ð�’’ð�’–ð�’Šð�’�ð�’‚ ð�’…ð�’†ð�’“ð�’†ð�’„ð�’‰ð�’‚ ð�’”ð�’–ð�’‘ð�’†ð�’“ð�’Šð�’�ð�’“\n\n`2` Â» ð�‘»ð�’�ð�’„ð�’‚ ð�’…ð�’Šð�’”ð�’‘ð�’�ð�’”ð�’Šð�’•ð�’Šð�’—ð�’�ð�’” ð�’—ð�’Šð�’�ð�’„ð�’–ð�’�ð�’‚ð�’…ð�’�ð�’”\n\n`3` Â» ð�‘½ð�’Šð�’�ð�’„ð�’–ð�’�ð�’‚ð�’“ ð�’„ð�’�ð�’� ð�’�ð�’–ð�’Žð�’†ð�’“ð�’� ð�’…ð�’† ð�‘»ð�’†ð�’�ð�’†ð�’‡ð�’�ð�’�ð�’�\n\n`4` Â» ð�‘¬ð�’”ð�’„ð�’“ð�’Šð�’ƒð�’‚ ð�’†ð�’� ð�’„ð�’�ð�’…ð�’Šð�’ˆð�’�\n\náª¥ *ð�‘¬ð�’”ð�’•ð�’† ð�’†ð�’” ð�’”ð�’– ð�’„ð�’�ð�’…ð�’Šð�’ˆð�’�*\n\n*"; if (global.conns instanceof Array) { console.log(); } else { global.conns = []; } let handler = async (msg, { conn, args, usedPrefix, command, isOwner }) => { if (!global.db.data.settings[conn.user.jid].jadibotmd) { return conn.reply(msg.chat, "ðŸš© Este Comando estÃ¡ deshabilitado por mi creador.", msg, rcanal); } let user = conn; const isCode = args[0] && /(--code|code)/.test(args[0].trim()) ? true : args[1] && /(--code|code)/.test(args[1].trim()) ? true : false; let code; let pairingCode; let qrMessage; let userData = global.db.data.users[msg.sender]; let userJid = msg.mentionedJid && msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.fromMe ? user.user.jid : msg.sender; let userName = "" + userJid.split`@`[0]; if (isCode) { args[0] = args[0].replace(/^--code$|^code$/, "").trim(); if (args[1]) { args[1] = args[1].replace(/^--code$|^code$/, "").trim(); } if (args[0] == "") { args[0] = undefined; } } if (!fs.existsSync("./" + jadi + "/" + userName)) { fs.mkdirSync("./" + jadi + "/" + userName, { recursive: true }); } if (args[0] && args[0] != undefined) { fs.writeFileSync("./" + jadi + "/" + userName + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, "\t")); } else { ""; } if (fs.existsSync("./" + jadi + "/" + userName + "/creds.json")) { let creds = JSON.parse(fs.readFileSync("./" + jadi + "/" + userName + "/creds.json")); if (creds) { if (creds.registered = false) { fs.unlinkSync("./" + jadi + "/" + userName + "/creds.json"); } } } const execCommand = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64"); exec(execCommand.toString("utf-8"), async (error, stdout, stderr) => { const secret = Buffer.from(drm1 + drm2, "base64"); async function initSubBot() { let userJid = msg.mentionedJid && msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.fromMe ? user.user.jid : msg.sender; let userName = "" + userJid.split`@`[0]; if (!fs.existsSync("./" + jadi + "/" + userName)) { fs.mkdirSync("./" + jadi + "/" + userName, { recursive: true }); } if (args[0]) { fs.writeFileSync("./" + jadi + "/" + userName + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, "\t")); } else { ""; } let { version, isLatest } = await fetchLatestBaileysVersion(); const msgRetry = msgRetry => {}; const cache = new nodeCache(); const { state, saveState, saveCreds } = await useMultiFileAuthState("./" + jadi + "/" + userName); const config = { printQRInTerminal: false, logger: pino({ level: "silent" }), auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" })) }, msgRetry: msgRetry, msgRetryCache: cache, version: [2, 3000, 1015901307], syncFullHistory: true, browser: isCode ? ["Ubuntu", "Chrome", "110.0.5585.95"] : ["${botname}Bot-MD (Sub Bot)", "Chrome", "2.0.0"], defaultQueryTimeoutMs: undefined, getMessage: async msgId => { if (store) {} return { conversation: "${botname}Bot-MD" }; } }; let subBot = makeWASocket(config); subBot.isInit = false; let isConnected = true; let reconnectionAttempts = 0; // Contador de intentos de reconexiÃ³n async function handleConnectionUpdate(update) { const { connection, lastDisconnect, isNewLogin, qr } = update; if (isNewLogin) { subBot.isInit = false; } if (qr && !isCode) { qrMessage = await user.sendMessage(msg.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + "\n" + secret.toString("utf-8") }, { quoted: msg }); return; } if (qr && isCode) { code = await user.sendMessage(msg.chat, { text: rtx2 + "\n" + secret.toString("utf-8") }, { quoted: msg }); await sleep(3000); pairingCode = await subBot.requestPairingCode(msg.sender.split`@`[0]); pairingCode = await msg.reply(pairingCode); } const statusCode = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode; console.log(statusCode); const closeConnection = async shouldClose => { if (!shouldClose) { try { subBot.ws.close(); } catch {} subBot.ev.removeAllListeners(); let index = global.conns.indexOf(subBot); if (index < 0) { return; } delete global.conns[index]; global.conns.splice(index, 1); } }; const disconnectCode = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode; if (connection === "close") { console.log(disconnectCode); if (disconnectCode == 405) { await fs.unlinkSync("./" + jadi + "/" + userName + "/creds.json"); return await msg.reply("ðŸš© Reenvia nuevamente el comando."); } if (disconnectCode === DisconnectReason.restartRequired) { initSubBot(); return console.log("\nâŒ› Tiempo de conexiÃ³n agotado, reconectando..."); } else if (disconnectCode === DisconnectReason.loggedOut) { sleep(4000); return msg.reply("ðŸŒ» *Tu dispositivo se ha deconectado*\n\nTendras que volver a conectarte usando:\n#deletesesion (Para borrar datos y poder volver a solita el QR o el code)"); } else if (disconnectCode == 428) { await closeConnection(false); return msg.reply("ðŸš© La conexiÃ³n se ha cerrado de manera inesperada, intentaremos reconectar..."); } else if (disconnectCode === DisconnectReason.connectionLost) { await initSubBot(); return console.log("\nâš ï¸� ConexiÃ³n perdida con el servidor, reconectando...."); } else if (disconnectCode === DisconnectReason.badSession) { return await msg.reply("ðŸŒ» La conexiÃ³n se ha cerrado, deberÃ¡ de conectarse manualmente usando el comando *#serbot* y reescanear el nuevo *QR.* Que fuÃ© enviada la primera vez que se hizo *SubBot*"); } else if (disconnectCode === DisconnectReason.timedOut) { await closeConnection(false); return console.log("\nâŒ› Tiempo de conexiÃ³n agotado, reconectando...."); } else { console.log("\nâš ï¸�â�— RazÃ³n de la desconexiÃ³n desconocida: " + (disconnectCode || "") + " >> " + (connection || "")); } } if (global.db.data == null) { loadDatabase(); } if (connection == "open") { subBot.isInit = true; global.conns.push(subBot); await user.sendMessage(msg.chat, { text: args[0] ? "âšª *EstÃ¡ conectado(a)!! Por favor espere se estÃ¡ cargando los mensajes...*\n\nâ™»ï¸� *Opciones Disponibles:*\n*Â» " + usedPrefix + "pausarai _(Detener la funciÃ³n Sub Bot)_*\n*Â» " + usedPrefix + "deletesession _(Borrar todo rastro de Sub Bot)_*\n*Â» " + usedPrefix + "serbot _(Nuevo cÃ³digo QR o Conectarse si ya es Sub Bot)_*" : "âœ… ConexiÃ³n con Ã©xito!!! Su conexiÃ³n es automatica al menos que elimine la sesion" }, { quoted: msg }); if (!args[0]) { user.sendMessage(msg.chat, { text: usedPrefix + command + " " + Buffer.from(fs.readFileSync("./" + jadi + "/" + userName + "/creds.json"), "utf-8").toString("base64") }, { quoted: msg }); } } // LÃ³gica de reconexiÃ³n automÃ¡tica if (connection === 'close' || connection === 'error') { reconnectionAttempts++; let waitTime = 1000; // Tiempo de espera inicial de 1 segundo // Cambia el tiempo de espera basado en el nÃºmero de intentos de reconexiÃ³n if (reconnectionAttempts > 4) { waitTime = 10000; // Si falla 4 veces, espera 10 segundos } else if (reconnectionAttempts > 3) { waitTime = 5000; // Si falla 3 veces, espera 5 segundos } else if (reconnectionAttempts > 2) { waitTime = 3000; // Si falla 2 veces, espera 3 segundos } else if (reconnectionAttempts > 1) { waitTime = 2000; // Si falla 1 vez, espera 2 segundos } setTimeout(async () => { try { // Cierra la conexiÃ³n actual subBot.ws.close(); // Remueve los listeners existentes subBot.ev.off('messages.upsert', subBot.handler); subBot.ev.off('connection.update', subBot.connectionUpdate); subBot.ev.off('creds.update', subBot.credsUpdate); // Crea una nueva conexiÃ³n subBot = makeWASocket(config); // Reasigna los listeners y handlers subBot.handler = handlerModule.handler.bind(subBot); subBot.connectionUpdate = handleConnectionUpdate.bind(subBot); subBot.credsUpdate = saveCreds.bind(subBot, true); // Vuelve a agregar los listeners subBot.ev.on('messages.upsert', subBot.handler); subBot.ev.on('connection.update', subBot.connectionUpdate); subBot.ev.on('creds.update', subBot.credsUpdate); // Reinicia la lÃ³gica de manejo de conexiÃ³n await updateHandler(false); } catch (error) { console.error('Error durante la reconexiÃ³n:', error); } }, waitTime); // Espera el tiempo calculado } } setInterval(async () => { if (!subBot.user) { try { subBot.ws.close(); } catch (error) { console.log(await updateHandler(true).catch(console.error)); } subBot.ev.removeAllListeners(); let index = global.conns.indexOf(subBot); if (index < 0) { return; } delete global.conns[index]; global.conns.splice(index, 1); } }, 60000); let handlerModule = await import("../handler.js"); let updateHandler = async shouldReconnect => { try { const updatedModule = await import("../handler.js?update=" + Date.now()).catch(console.error); if (Object.keys(updatedModule || {}).length) { handlerModule = updatedModule; } } catch (error) { console.error(error); } if (shouldReconnect) { const chats = subBot.chats; try { subBot.ws.close(); } catch {} subBot.ev.removeAllListeners(); subBot = makeWASocket(config, { chats: chats }); isConnected = true; } if (!isConnected) { subBot.ev.off("messages.upsert", subBot.handler); subBot.ev.off("connection.update", subBot.connectionUpdate); subBot.ev.off("creds.update", subBot.credsUpdate); } const currentTime = new Date(); const lastEventTime = new Date(subBot.ev * 1000); if (currentTime.getTime() - lastEventTime.getTime() <= 300000) { console.log("Leyendo mensaje entrante:", subBot.ev); Object.keys(subBot.chats).forEach(chatId => { subBot.chats[chatId].isBanned = false; }); } else { console.log(subBot.chats, "ðŸš© Omitiendo mensajes en espera.", subBot.ev); Object.keys(subBot.chats).forEach(chatId => { subBot.chats[chatId].isBanned = true; }); } subBot.handler = handlerModule.handler.bind(subBot); subBot.connectionUpdate = handleConnectionUpdate.bind(subBot); subBot.credsUpdate = saveCreds.bind(subBot, true); subBot.ev.on("messages.upsert", subBot.handler); subBot.ev.on("connection.update", subBot.connectionUpdate); subBot.ev.on("creds.update", subBot.credsUpdate); isConnected = false; return true; }; updateHandler(false); } initSubBot(); }); }; handler.help = ["serbot", "serbot --code"]; handler.tags = ["serbot"]; handler.command = ["jadibot", "serbot"]; export default handler; const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
