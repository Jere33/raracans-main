
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
┌──「 *INFO KAMU* 」
│
│• *nama* : ${pushname}
│• *nomer* : wa.me/${sender.split("@")[0]}
│• *XP* : ${getLevelingXp(sender)}/${reqXp}
│• *level* : ${getLevelingLevel(sender)}
│• *user register : ${_registered.length}
│
└─────────────────
Hai,${pushname}
Berikut Beberapa Fitur Yg Ada
Pada Bot Ini:

「 *SIMPLE MENU* 」

• *${prefix}sticker*
• *${prefix}tts*
• *${prefix}toimg*

「 *FUN MENU* 」

• *${prefix}ocr*
• *${prefix}quotemaker*
• *${prefix}tiktokstalk*
• *${prefix}fototiktok*
• *${prefix}truth*
• *${prefix}dare*

「 *FUN MENU2* 」

• *${prefix}text3d*
• *${prefix}bucin*
• *${prefix}hilih*
• *${prefix}persengay*
• *${prefix}ssweb*

「 *FUN MENU3* 」

• *${prefix}artinama*
• *${prefix}spamcall*
• *${prefix}quotes*
• *${prefix}kbbi*
• *${prefix}map*
• *${prefix}cerpen*

「 *FUN MENU4* 」

• *${prefix}chord*
• *${prefix}lirik*
• *${prefix}phlogo*

「 *KERANG MENU* 」

• *${prefix}bisakah*
• *${prefix}apakah*
• *${prefix}kapankah*
• *${prefix}rate*
• *${prefix}owner*


「 *NSFW MENU* 」

• *${prefix}waifu*
• *${prefix}anime*
• *${prefix}neko*
• *${prefix}dewabatch*
• *${prefix}pokemon*
• *${prefix}anjing*
• *${prefix}indohot*

「 *GROUP MENU* 」

• *${prefix}hidetag*
• *${prefix}linkgc*
• *${prefix}tagall*
• *${prefix}setpp*
• *${prefix}add*
• *${prefix}kick*
• *${prefix}setname*
• *${prefix}setdesc*
• *${prefix}demote*
• *${prefix}promote*
• *${prefix}listadmin*
• *${prefix}group* [buka/tutup]
• *${prefix}leveling* [enable/disable]
• *${prefix}nsfw* [1/0]
• *${prefix}simih* [1/0]
• *${prefix}welcome* [1/0]

「 *OWNER ONLY MENU* 」

• *${prefix}bc*
• *${prefix}setprefix*
• *${prefix}getses*
• *${prefix}clearall*
• *${prefix}block*
• *${prefix}unblock*
• *${prefix}leave*
• *${prefix}clone*

Follow @dutavector Juga Yah,Dan Jika Mau
Donasi Ketik #donasi Juga,Agar Bot Aktif Terus
`
}
exports.help = help



  
