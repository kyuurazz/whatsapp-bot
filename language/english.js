exports.needReg = (a, b, c) =>{
	return`Hello ${a} ð¥º, looks like you are not registered in the database ${b}. Let's register first in the following wayð\n\n${c}register name|age|gender|hobby\nUsage examples : ${c}register botwa|18|male|Games`
	}
exports.Nolimit = (prefix) =>{
	return`Your limit today has run out â ï¸\n\nPlease buy a limit by typing ${prefix}buy or ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`The serial number (sn) is wrong`
	}
exports.NoseriOk = () =>{
	return`Successfully cancel registration!`
	}
exports.ExReg = ( c) =>{
	return`${c}register name|age|gender|hobby\nUsage examples : \n${c}register botwa|18|male|Games`
	}
exports.DoneReg = () =>{
	return`You are already registered in the database`
	}
exports.UmurReg = () =>{
	return`Age must be a number`
	}
exports.NamaReg = () =>{
	return`Your name is really long, just use your first name`
	}
exports.HobiReg = () =>{
	return`You have a lot of hobbies, just 1 or 2 hobbies`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`â­âã *SUCCESSFUL VERIFICATION* ã
â\`\`\`Verification Success With\`\`\` 
â
â\`\`\`SN: ${a}\`\`\`
â\`\`\`On : ${b}\`\`\`
â\`\`\`Name : ${c}\`\`\`
â\`\`\`Age : ${d}\`\`\`
â\`\`\`Hobby : ${e}\`\`\`
â\`\`\`Number : @${f}\`\`\`
â\`\`\`To use bot Please \`\`\`
â\`\`\`Send command ${g}menu\`\`\`
â\`\`\`or ${h}allmenu\`\`\`
â
â\`\`\`\Total : ${i} Users\`\`\`
â°âââââââââââââââââââââ`
	}
exports.genderReg = (a) =>{
	return`Select one ( male / female)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`You are too old`
	}
exports.firstChat = (a, b, c) =>{
	return`Hi ${a} ${b} ð¤, I am ${c} whatsapp bots. Can i help u?`
	}

exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Success Add ${q} Into Database ${a}\n\nCheck with command ${prefix}${b}`
	}

exports.Addvn = () =>{
	return`Wait a minute, I will try to upload this media to the database`
	}

exports.AddstikOk_ = (a, b) =>{
	return`The duration is ${a} seconds, which is the maximum ${b} duration that bots can save into the database`
	}

exports.ListStik = (a) =>{
	return`_To take ${a} please send a message according to the list of ${a} the one above_`
	}


exports.noAbsen = () =>{
return `â No absences take place in this group!`
}
exports.StartAbsen = () =>{
	return`Start Absence`
	}
exports.DahAbsen = () =>{
	return`You're absent`
	}
exports.DelAbsen = () =>{
	return`â Successfully deleted absences in this group`
	}
exports.adaAbsen = () =>{
	return`There are still absent sessions in this group!`
	}
exports.SAbsen = () =>{
	return`Absence begins`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply sticker!\nExample : ${prefix + command} menu\n\n\n*Note: Cannot be accompanied by Prefix!*`
	}
exports.CmdApa = () =>{
	return`For What Command?`
	}
exports.UCmd = () =>{
	return`You don't have permission to modify this sticker order`
	}
exports.HashCmd = () =>{
	return`No hashes`
	}
exports.DelCmd = () =>{
	return`â The cmd sticker has been removed`
	}
exports.LockCmd = () =>{
	return`Reply message`
	}
exports.NoCmd = () =>{
	return`Hash not found in database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message You Want To Save In Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Example : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' has been registered in the message list`
}
exports.DoneMsg = (prefix, text) => {
    return `Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' not listed in the message list`
}
exports.DelMsg = (text) => {
    return `Delete successfully '${text}' from the message list`
}

exports.OnBef = () => {
    return `It's been activated before`
}
exports.OffYaBef = () => {
    return `It's been deactivated before`
}
exports.OkOn = (command) => {
    return `${command} Successfully Activated !`
}
exports.OffBef = (command) => {
    return `${command} Successfully Deactivated !`
}
exports.OkMute = () => {
    return `Bot has been muted in this group`
}
exports.OkUnMute = () => {
    return `Bot Succeeded In UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Successfully Unban chat`
}
exports.NoMute = () => {
    return `Bot has not been banned in this group`
}

exports.NoMsgBot = () => {
    return `The message was not sent by a bot!`
}
exports.ToimgErr = () => {
    return `Sorry Currently Not Support Gif Sticker`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker With Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Success Change To Public Mode`
}
exports.BotSelf = () => {
    return `Successfully Change To Self Mode\n\nTo change to public mode, please use the bot number`
}
exports.NoToStik = (prefix, command) => {
    return `Send/Reply Image/Video With Caption ${prefix + command}\n\nVideo Sticker Duration 1-9 Seconds`
}
exports.NoPpBot = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `The message you replied to does not contain a reply`
}
exports.SetGcName = (prefix, command) => {
    return `Send command ${prefix + command} *text*`
}
exports.SetPpGc = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Enter the group link!`
}
exports.MauKick = () => {
    return `Send the target number/tag/reply you want to kick!`
}
exports.MauAdd = () => {
    return `Send the target number/tag/reply you want to add!`
}
exports.NakPm= () => {
    return `Send the target number/tag/reply you want to promote!`
}
exports.NakDm = () => {
    return `Send the target number/tag/reply you want to demote!`
}
exports.Family = () => {
    return `There Are Still Unfinished Sessions!`
}
exports.NoWm = (prefix, command) => {
    return `Send command ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Send command ${prefix + command} *teks*\n\nExample : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Send command ${prefix + command} *teks 1|teks 2*\n\nExample : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `The nsfw feature has not been activated`
}
exports.CoverBanLol = (prefix, command) => {
    return `Example : ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered are Wrong*\n\n_Here's the list of true heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Example : ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*The style you entered is wrong*\n\n_Here's a list of the correct styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Example : ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The color you entered is wrong*\n\n_Here's a list of the correct colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Example: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Example: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Example: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Example : ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What you entered is wrong*\n\n_Here's a List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `Example : ${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Example : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Example : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `â Wrong answer`
}

exports.JwbTrue = (tebak) => {
return`ð® ${tebak} ð®\n\nCorrect answer ð\n\nWant to play again? press the button below`
}
exports.TbGam = () => {
    return `Guess the picture`
}
exports.TbKa = () => {
    return `Guess the word`
}
exports.TbBe = () => {
    return `Guess the Flag`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Arrange Words`
}
exports.TbAt = () => {
    return `Guess the Sentence`
}
exports.TbSi = () => {
    return `Guess who`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Guess the District`
}
exports.TbKi = () => {
    return `Guess Chemistry`
}
exports.TbLi = () => {
    return `Guess the Lyrics`
}
exports.TbKan = () => {
    return `Riddles`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer the following questions :*\n${soal}\n\nThere is *${jawaban}* Answer ${find(v => v.includes(' ')) ? '(Some Answers Have Spaces)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Has Afk With Reason ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Please answer the questions above\n\nDescription : ${desk}\nTime : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Time has run out\nAnswer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Time has run out\nAnswer:  ${jawaban}}\nDescription : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Please Answer The Following Questions\n\n${soal}\nTime : ${time}`
}
exports.TbBendera = (time) => {
    return `Please Answer The Question Above\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `The picture above is a picture of the district?\nTime : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `What does the symbol mean? : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `These are the lyrics of the song? : *${soal}*?\nTime : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Answer the following questions :*\nQuestion : ${soal}\nType : ${tipe}\nTime : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nUsage examples: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*What is the result of: ${soal}*?\n\nTime: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Send/Reply Photo/Sticker With Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Send command ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Enter username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply gif sticker with caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Send/Reply Media With Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Send Broadcast To ${anu} ${chat}\nTime's up ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker with caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Send/reply ${video} with caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send command ${prefix + command} *language code* *teks*
	â¢ Example : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	â¢ Example : ${prefix + command} id hi
List of supported languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key cannot be the same as feature/command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List of responses with key : *${arg}* already in this group.`
}
exports.AddlistDone = (arg) => {
    return `Successfully set list message with key : *${arg}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Dellist = () => {
    return `There is no message list in the database`
}
exports.Dellist_  = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List response with key *${key}* not in database!`
}
exports.DellistDone = (key) => {
    return `Successfully delete list message with key *${key}*`
}
exports.ListUp = (key) => {
    return `Sorry, the key *${key}* is not yet registered in this group`
}
exports.UpList = (key) => {
    return `Successfully update list message with key : *${key}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hi ${pushname} Welcome to Anonymous Chat\n\nType ${prefix}start to find your Chat Friend, or you can press the Search button below`
}
exports.Anon = () => {
    return `Find Friends Chat`
}
exports.StopAnon = () => {
    return `You are not in an anonymous session, press the button to find a partner `
}
exports.AnonNew = () => {
    return `Find New Friends`
}
exports.AnonDahStop = () => {
    return `â Successfully stopped chat`
}
exports.StopAnonByFren = () => {
    return `â ï¸ This chat session has been terminated by your chat friend`
}
exports.AnonOn = () => {
    return `ï¸ You are still in a chat session with a partner!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found ð¼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `ð Please wait looking for chat friends`
}
exports.NoAnon = () => {
    return `â ï¸ You've never started a chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Reply to the audio you want to change with caption *${prefix + command}*`
}
exports.NoTagBan = () => {
    return `Usage examples :\n${prefix + command} 62938828728992 \nor\n${prefix + command} @tagmember`
}

exports.getBan = (a) => {
    return `â ï¸ Sorry, your number has been banned by the owner\n\nOwner ð\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} with caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}

exports.AllFitur = () => {
    return `\nAll bot features`
}
exports.InfoMenu = () => {
    return `\n_Looking for the latest information via bot_`
}
exports.KhususOwn = () => {
    return `\n_Owner Bots Special Features_`
}
exports.DataBor = () => {
    return `\n_Storing something in the bot database_`
}
exports.MenuGc = () => {
    return `\n_Show group specific features_`
}
exports.MenuAni = () => {
    return `\n_Looking for random anime pictures_`
}
exports.TagMem = () => {
    return `\n_Tag group member_`
}
exports.StalkOrk = () => {
    return `\n_People's social media stalking_`
}
exports.Hoja = () => {
    return `\n_Looking for something unimportant_`
}
exports.CovertWi = () => {
    return `\n_Convert something with bot_`
}
exports.AnuFoto = () => {
    return `\n_Change the picture to be more interesting_`
}
exports.HajuStik = () => {
    return `\n_Create unique stickers_`
}
exports.EloDown= () => {
    return `\n_Show download feature_`
}
exports.StikerWibu = () => {
    return `\n_Random anime stickers_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_To create a logo using a bot_`
}
exports.oterMenu = () => {
    return `\n_More menu_`
}
exports.GameBot = () => {
    return `\n_Features for playing with bots_`
}
exports.RandRik = () => {
    return `\n_Random tiktok videos_`
}
exports.RandCew = () => {
    return `\n_Random pictures of beautiful girls_`
}
exports.RamalOi = () => {
    return `\n_Today's forecast_`
}
exports.TeleStik= () => {
    return `\n_Random sticker from telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Create cool logos with bots_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Make an attractive logo_`
}
exports.TobatBro = () => {
    return `\n_Islamic features_`
}
exports.MauJualan = () => {
    return `\n_Features for selling_`
}
exports.Maustorage = () => {
    return `\n_Features to save stickers, audio, photos and videos_`
}
exports.MauChanger = () => {
    return `\n_Feature to change audio/vn sound_`
}
exports.GadaChat = () => {
    return `\n_Features for random chat_`
}
exports.SumberBot = () => {
    return `\n_Source of this bot script_`
}
exports.Tqnya = () => {
    return `\n_Who contributed to this bot_`
}
exports.SetAh = () => {
    return `Do you want a set menu?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Detected*\n\nYou will be removed from the group ${gc}`
    }
    exports.GjdKick = () => {
    return `Looks like you sent this group link, you won't be kicked out`
    }
/////////

/////////
exports.private = () =>{
	return`The feature can only be used in private chat`
	}
exports.wait = () => {
    return `â³ Please wait a moment`
}
exports.ok = () => {
    return `â Done.`
}

exports.err = () => {
    return `â ï¸ Error Moderate Features`
}
exports.erorLink = () => {
    return `â ï¸ The link is error`
}
exports.media = () => {
    return `Please select the media you want to download`
}
exports.replyImg = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `â Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `â Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `â This command is for the owner`
}

exports.doneOwner = () => {
    return `â  ï¸It's done, Owner ~`
}

exports.groupOnly = () => {
    return `ð¥  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `ð  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*ââ ã HALL OF SHAME ã ââ*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `â User is not an admin! â`
}

exports.adminAlready = () => {
    return `â Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make bot as admin first! `
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank you for reporting, we will receive your report soon.`
}

exports.videoLimit = () => {
    return `File size is too big!`
}

exports.notNum = (q) => {
    return `"${q}", not numbers!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hi bro ${pushname} ð good ${salam} , 
i'm ${botname}, this bot is Whatsapp Multi-Device Beta.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*âTime Server : ${time}*
*ð List-Menu Alphabot-Md :*

â­ââ ã Bot Info ã 
â ${prefix}owner
â ${prefix}rules
â ${prefix}sc
â ${prefix}ping
â ${prefix}runtime
â ${prefix}botstatus
â°â ${prefix}donate


â­ââ ã Owner ã 
â < evaluate
â > evaluate
â $ exec
â => exec
â ${prefix}setmenu [query]
â ${prefix}setmenu templateLocation
â ${prefix}setmenu templateTenor
â ${prefix}setmenu katalog
â ${prefix}setmenu katalog2
â ${prefix}setmenu list
â ${prefix}setwm packname|author
â ${prefix}sendsesi
â ${prefix}listpc
â ${prefix}listgc
â ${prefix}broadcast [text]
â ${prefix}bc [text]
â ${prefix}bcgc 
â ${prefix}bcimage
â ${prefix}bcaudio
â ${prefix}bcstiker
â ${prefix}bcvn
â ${prefix}bcvideo
â ${prefix}nsfw [on/off]
â ${prefix}mute [on/off]
â ${prefix}banchat
â ${prefix}unbanchat
â ${prefix}autorespond [on/off]
â ${prefix}antiviewonce [on/off]
â ${prefix}autobio [on/off]
â ${prefix}join [link]
â ${prefix}self
â ${prefix}public [only bot]
â ${prefix}del [reply pesan bot]
â°â ${prefix}setppbot [reply image]

â­ââ ã Store Menu ã
â ${prefix}list
â ${prefix}addlist [key|respond]
â ${prefix}dellist [key]
â ${prefix}update [key|respond]
â ${prefix}store
â ${prefix}kali
â ${prefix}bagi
â ${prefix}tambah
â ${prefix}kurang
â ${prefix}kalkulator
â ${prefix}setproses
â ${prefix}updateproses
â ${prefix}cekproses
â ${prefix}delproses
â ${prefix}setdone
â ${prefix}updatedone
â ${prefix}cekdone
â ${prefix}deldone
â ${prefix}pay
â ${prefix}setcaptionpay
â ${prefix}proses
â°â ${prefix}done

â­ââ ã Anonymous ã
â ${prefix}anonymous 
â ${prefix}start
â ${prefix}skip [daerah]
â°â ${prefix}stop [surah|ayat]


â­ââ ã Database ã 
â ${prefix}setcmd [reply stiker]
â ${prefix}delcmd [reply stiker]
â ${prefix}listcmd
â ${prefix}absen
â ${prefix}cekabsen
â ${prefix}deleteabsen
â ${prefix}absenstart
â ${prefix}addmsg [nama file]
â ${prefix}getmsg [nama file]
â ${prefix}listmsg
â°â ${prefix}delmsg [nama file]

â­ââ ã Rpg Games ã
â ${prefix}adventure
â ${prefix}weekly
â ${prefix}use
â ${prefix}transfer
â ${prefix}slot
â ${prefix}shop
â ${prefix}pasar
â ${prefix}ojek
â ${prefix}nguli
â ${prefix}narik
â ${prefix}nabung
â ${prefix}monthly
â ${prefix}mining
â ${prefix}merampok
â ${prefix}mancing
â ${prefix}kolam
â ${prefix}koboy
â ${prefix}kerja
â ${prefix}kandang
â ${prefix}judi
â ${prefix}inventory
â ${prefix}hourly
â ${prefix}fishop
â ${prefix}feed
â ${prefix}duel
â ${prefix}daily
â ${prefix}craft
â ${prefix}cooldown
â ${prefix}cook
â ${prefix}collect
â ${prefix}chop
â ${prefix}casino
â ${prefix}buy
â ${prefix}bank 
â ${prefix}bansos
â ${prefix}berdagang
â ${prefix}berkebon
â°â ${prefix}build


â­ââ ã Group ã 
â ${prefix}register
â ${prefix}unregister
â ${prefix}ceksn
â ${prefix}listonline
â ${prefix}sider
â ${prefix}wm packname|author
â ${prefix}infochat
â ${prefix}setdesk [text]
â ${prefix}setppgrup [reply image]
â ${prefix}revoke
â ${prefix}leave
â ${prefix}add [62***]
â ${prefix}kick @tag
â ${prefix}leave
â ${prefix}linkgc
â ${prefix}welcome [on/off]
â ${prefix}goodbye [on/off]
â ${prefix}demotedetect [on/off]
â ${prefix}promotedetect  [on/off]
â ${prefix}setwelcome
â ${prefix}updatewelcome
â ${prefix}delwelcome
â ${prefix}cekwelcome
â ${prefix}setgoodbye
â ${prefix}updategoodbye
â ${prefix}delgoodbye
â ${prefix}cekgoodbye
â ${prefix}setpromote
â ${prefix}updatepromote
â ${prefix}setdemote
â ${prefix}updatedemote
â ${prefix}cekpromote
â ${prefix}cekdemote
â ${prefix}delpromote
â ${prefix}deldemote
â ${prefix}nsfw [on/off]
â ${prefix}antilink [on/off]
â ${prefix}take packname|author
â ${prefix}group [open/close]
â ${prefix}tagall [text]
â°â ${prefix}hidetag [text]

â­ââ ã Anime ã 
â ${prefix}quotesanime
â ${prefix}anime [query]
â ${prefix}manga [query]
â°â ${prefix}character [query]

â­ââ ã Tag ã 
â ${prefix}stickertag
â ${prefix}videotag [query]
â ${prefix}vntag [query]
â°â ${prefix}imagetag [query]

â­ââ ã Stalking ã 
â ${prefix}igstalk [username]
â ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]


â­ââ ã Search ã 
â ${prefix}ytsearch [query]
â ${prefix}wallpaper [query]
â ${prefix}google [query]
â ${prefix}wikimedia [query]
â ${prefix}hentai
â ${prefix}wattpad [query]
â ${prefix}webtoons [query]
â ${prefix}drakor [query]
â°â ${prefix}pinterest [query]


â­ââ ã Converter ã
â ${prefix}emoji [ð­]
â ${prefix}emojimix [ð­+ð©]
â ${prefix}toaudio [video]
â ${prefix}tomp3 [video]
â ${prefix}tovn [video]
â ${prefix}stiker [reply image]
â ${prefix}tourl [image/video/stiker]
â ${prefix}togif [sticker]
â ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]


â­ââ ã Image Effect ã 
â ${prefix}wanted [reply image/stiker]
â ${prefix}utatoo [reply image/stiker]
â ${prefix}unsharpen [reply image/stiker]
â ${prefix}thanos [reply image/stiker]
â ${prefix}sniper [reply image/stiker]
â ${prefix}sharpen [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}scary [reply image/stiker]
â ${prefix}rip [reply image/stiker]
â ${prefix}redple [reply image/stiker]
â ${prefix}rejected [reply image/stiker]
â ${prefix}posterize [reply image/stiker]
â ${prefix}ps4 [reply image/stiker]
â ${prefix}pixelize [reply image/stiker]
â ${prefix}missionpassed [reply image/stiker]
â ${prefix}moustache [reply image/stiker]
â ${prefix}lookwhatkarenhave [reply image/stiker]
â ${prefix}jail [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}instagram [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}glitch [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}frame [reply image/stiker]
â ${prefix}fire [reply image/stiker]
â ${prefix}distort [reply image/stiker]
â ${prefix}dictator [reply image/stiker]
â ${prefix}deepfry [reply image/stiker]
â ${prefix}ddungeon [reply image/stiker]
â ${prefix}circle [reply image/stiker]
â ${prefix}challenger [reply image/stiker]
â ${prefix}burn [reply image/stiker]
â ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]


â­ââ ã Sticker Effect ã 
â ${prefix}jail [reply image/stiker]
â ${prefix}red [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}bloo [reply image/stiker]
â ${prefix}blue [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}green [reply image/stiker]
â ${prefix}glass [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}blurple [reply image/stiker]
â ${prefix}blurple2 [reply image/stiker]
â ${prefix}wasted [reply image/stiker]
â ${prefix}passed [reply image/stiker]
â ${prefix}triggered [reply image/stiker]
â ${prefix}comrade [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}threshold [reply image/stiker]
â ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]


â­ââ ã Download ã 
â ${prefix}tiktok [link]
â ${prefix}tiktoknowm [link]
â ${prefix}tiktokwm [link]
â ${prefix}tiktokaudio [link]
â ${prefix}ytdl [link]
â ${prefix}play [query]
â ${prefix}ytmp3 [link]
â ${prefix}ytshortmp3 [link]
â ${prefix}ytmp4 [link]
â ${prefix}ytshorts [link]
â ${prefix}facebook [link]
â ${prefix}facebooksd [link]
â ${prefix}facebookhd [link]
â ${prefix}fbaudio [link]
â ${prefix}igstory [username]
â ${prefix}igdl [link]
â ${prefix}igphoto [link]
â ${prefix}igvideo [link]
â ${prefix}igreels [link]
â ${prefix}igtv [link]
â ${prefix}soundcloud [link]
â ${prefix}gitclone [link repo]
â ${prefix}gitrepo [username repo branch]
â ${prefix}mediafire [link]
â°â ${prefix}twitter link

â­ââ ã Primbon ã
â ${prefix}nomorhoki 887435047326
â ${prefix}artimimpi [query]
â ${prefix}artinama [query]
â ${prefix}ramaljodoh
â ${prefix}ramaljodohbali
â ${prefix}suamiistri
â ${prefix}ramalcinta
â ${prefix}cocoknama
â ${prefix}pasangan
â ${prefix}jadiannikah
â ${prefix}sifatusaha
â ${prefix}rezeki
â ${prefix}pekerjaan
â ${prefix}nasib
â ${prefix}penyakit
â ${prefix}tarot
â ${prefix}fengshui
â ${prefix}haribaik
â ${prefix}harisangar
â ${prefix}harisial
â ${prefix}nagahari
â ${prefix}arahrezeki
â ${prefix}peruntungan
â ${prefix}weton
â ${prefix}karakter
â ${prefix}keberuntungan
â ${prefix}memancing
â ${prefix}masasubur
â ${prefix}zodiak 
â°â ${prefix}shio [query]

â­ââ ã Random Anime ã
â ${prefix}loli
â ${prefix}neko
â ${prefix}waifu
â ${prefix}shinobu
â ${prefix}megumin
â ${prefix}bully
â ${prefix}cuddle
â ${prefix}cry
â ${prefix}hug
â ${prefix}awoo
â ${prefix}kiss
â ${prefix}lick
â ${prefix}pat
â ${prefix}smug
â ${prefix}bonk
â ${prefix}yeet
â ${prefix}blush
â ${prefix}smile
â ${prefix}wave
â ${prefix}highfive
â ${prefix}handhold
â ${prefix}nom
â ${prefix}bite
â ${prefix}glomp
â ${prefix}slap
â ${prefix}kill
â ${prefix}happy
â ${prefix}wink
â ${prefix}poke
â ${prefix}dance
â°â ${prefix}cringe

â­ââ ã Voice Change Menu ã
â ${prefix}bass
â ${prefix}blown
â ${prefix}deep
â ${prefix}earrape
â ${prefix}fast
â ${prefix}fat
â ${prefix}nightcore
â ${prefix}reverse
â ${prefix}robot
â ${prefix}slow
â ${prefix}smooth
â°â ${prefix}tupai

â­ââ ã Storage Menu ã
â ${prefix}addvn
â ${prefix}listvn
â ${prefix}addimage
â ${prefix}listimage
â ${prefix}addvideo
â ${prefix}listvideo
â ${prefix}addstik
â°â ${prefix}liststik

â­ââ ã Nsfw & Sfw ã
â ${prefix}cuddle
â ${prefix}foxgirl
â ${prefix}kemonomimi2
â ${prefix}woof
â ${prefix}holo2
â ${prefix}hug
â ${prefix}kiss
â ${prefix}lizard
â ${prefix}meowi
â ${prefix}neko2
â ${prefix}pat
â ${prefix}poke
â ${prefix}slap
â ${prefix}tickle
â ${prefix}baka
â ${prefix}smug
â ${prefix}neko_sfw
â ${prefix}hentai
â ${prefix}hentai_gif
â ${prefix}spank
â ${prefix}blowjob
â ${prefix}cumarts
â ${prefix}eroyuri
â ${prefix}eroneko
â ${prefix}erokemonomimi
â ${prefix}erokitsune
â ${prefix}ero
â ${prefix}feet
â ${prefix}erofeet
â ${prefix}feetgif
â ${prefix}femdom
â ${prefix}futanari
â ${prefix}holoero
â ${prefix}holo
â ${prefix}keta
â ${prefix}kitsune
â ${prefix}kemonomimi
â ${prefix}pussyart
â ${prefix}pussywankgif
â ${prefix}girl_solo
â ${prefix}girl_solo_gif
â ${prefix}tits
â ${prefix}trap
â ${prefix}yuri
â ${prefix}avatar2
â ${prefix}anal
â ${prefix}bj
â ${prefix}boobs
â ${prefix}classic
â ${prefix}cumsluts
â ${prefix}kuni
â ${prefix}lesbian
â ${prefix}neko
â ${prefix}neko_gif
â ${prefix}ahegao
â ${prefix}bdsm
â ${prefix}cuckold
â ${prefix}cum
â ${prefix}foot
â ${prefix}gangbang
â ${prefix}glasses
â ${prefix}jahy
â ${prefix}masturbation
â ${prefix}nsfw_neko
â ${prefix}orgy
â ${prefix}panties
â ${prefix}tentacles
â ${prefix}thighs
â°â ${prefix}zettai

â­ââ ã Ephoto360 Menu ã
â ${prefix}youtubegold
â ${prefix}youtubesilver
â ${prefix}facebookgold
â ${prefix}facebooksilver
â ${prefix}instagramgold
â ${prefix}instagramsilver
â ${prefix}twittergold
â ${prefix}twittersilver
â ${prefix}retrotext
â ${prefix}halloweenbats
â ${prefix}texthalloween
â ${prefix}cardhalloween
â ${prefix}birthdaycake
â ${prefix}thundertext
â ${prefix}icetext
â ${prefix}milkcake
â ${prefix}snowontext
â ${prefix}metalstar
â ${prefix}dragonfire
â ${prefix}zombie3d
â ${prefix}merrycard
â ${prefix}generalexam 
â ${prefix}viettel
â ${prefix}embroider
â ${prefix}graffititext
â ${prefix}graffititext2
â ${prefix}graffititext3
â ${prefix}covergraffiti
â ${prefix}moderngold
â ${prefix}capercut
â ${prefix}lovecard
â ${prefix}heartflashlight
â ${prefix}heartcup
â ${prefix}sunglightshadow
â ${prefix}graffiti3d
â ${prefix}moderngoldsilver
â ${prefix}moderngold2
â ${prefix}moderngold3
â ${prefix}fabrictext
â ${prefix}masteryavatar
â ${prefix}messagecoffee
â ${prefix}announofwin
â ${prefix}writeblood
â ${prefix}horrorletter
â ${prefix}writehorror
â ${prefix}shirtclub
â ${prefix}angelwing
â ${prefix}christmasseason
â ${prefix}projectyasuo
â ${prefix}lovelycute
â ${prefix}womansday
â ${prefix}covergamepubg
â ${prefix}nameonheart
â ${prefix}funnyhalloween
â ${prefix}lightningpubg
â ${prefix}greetingcardvideo 
â ${prefix}christmascard 
â ${prefix}galaxybat
â ${prefix}writegalaxy
â ${prefix}starsnight
â ${prefix}noeltext
â ${prefix}textcakes
â ${prefix}pubgbirthday
â ${prefix}galaxywallpaper
â ${prefix}pubgglicthvideo 
â ${prefix}pubgmascotlogo
â ${prefix}realembroidery
â ${prefix}vintagetelevision
â ${prefix}funnyanimations
â ${prefix}glowingtext
â ${prefix}textonglass
â ${prefix}cartoonstyle
â ${prefix}multicolor
â ${prefix}watercolor2
â ${prefix}textsky
â ${prefix}summerbeach
â ${prefix}1917text
â ${prefix}puppycute
â°â ${prefix}rosebirthday


â­ââ ã Textpro Menu ã
â ${prefix}halloween2 text|text2
â ${prefix}horror text|text2
â ${prefix}game8bit text|text2
â ${prefix}layered text|text2
â ${prefix}glitch2 text|text2
â ${prefix}coolg text|text2
â ${prefix}coolwg text|text2
â ${prefix}realistic text|text2
â ${prefix}space3d text|text2
â ${prefix}gtiktok text|text2
â ${prefix}stone text|text2
â ${prefix}marvel text|text2
â ${prefix}marvel2 text|text2
â ${prefix}pornhub text|text2
â ${prefix}avengers text|text2
â ${prefix}metalr text|text2
â ${prefix}metalg text|text2
â ${prefix}metalg2 text|text2
â ${prefix}halloween2 text|text2
â ${prefix}lion text|text2
â ${prefix}wolf_bw text|text2
â ${prefix}wolf_g text|text2
â ${prefix}ninja text|text2
â ${prefix}3dsteel text|text2
â ${prefix}horror2 text|text2
â ${prefix}lava text|text2
â ${prefix}bagel text|text2
â ${prefix}blackpink text
â ${prefix}rainbow2 text
â ${prefix}water_pipe text
â ${prefix}halloween text
â ${prefix}sketch text
â ${prefix}sircuit text
â ${prefix}discovery text
â ${prefix}metallic2 text
â ${prefix}fiction text
â ${prefix}demon text
â ${prefix}transformer text
â ${prefix}berry text
â ${prefix}thunder text
â ${prefix}magma text
â ${prefix}3dstone text
â ${prefix}neon text
â ${prefix}glitch text
â ${prefix}harry_potter text
â ${prefix}embossed text
â ${prefix}broken text
â ${prefix}papercut text
â ${prefix}gradient text
â ${prefix}glossy text
â ${prefix}watercolor text
â ${prefix}multicolor text
â ${prefix}neon_devil text
â ${prefix}underwater text
â ${prefix}bear text
â ${prefix}wonderfulg text
â ${prefix}christmas text
â ${prefix}neon_light text
â ${prefix}snow text
â ${prefix}cloudsky text
â ${prefix}luxury2 text
â ${prefix}gradient2 text
â ${prefix}summer text
â ${prefix}writing text
â ${prefix}engraved text
â ${prefix}summery text
â ${prefix}3dglue text
â ${prefix}metaldark text
â ${prefix}neonlight text
â ${prefix}oscar text
â ${prefix}minion text
â ${prefix}holographic text
â ${prefix}purple text
â ${prefix}glossyb text
â ${prefix}deluxe2 text
â ${prefix}glossyc text
â ${prefix}fabric text
â ${prefix}neonc text
â ${prefix}newyear text
â ${prefix}newyear2 text
â ${prefix}metals text
â ${prefix}xmas text
â ${prefix}blood text
â ${prefix}darkg text
â ${prefix}joker text
â ${prefix}wicker text
â ${prefix}natural text
â ${prefix}firework text
â ${prefix}skeleton text
â ${prefix}balloon text
â ${prefix}balloon2 text
â ${prefix}balloon3 text
â ${prefix}balloon4 text
â ${prefix}balloon5 text
â ${prefix}balloon6 text
â ${prefix}balloon7 text
â ${prefix}steel text
â ${prefix}gloss text
â ${prefix}denim text
â ${prefix}decorate text
â ${prefix}decorate2 text
â ${prefix}peridot text
â ${prefix}rock text
â ${prefix}glass text
â ${prefix}glass2 text
â ${prefix}glass3 text
â ${prefix}glass4 text
â ${prefix}glass5 text
â ${prefix}glass6 text
â ${prefix}glass7 text
â ${prefix}glass8 text
â ${prefix}captain_as2 text
â ${prefix}robot text
â ${prefix}equalizer text
â ${prefix}toxic text
â ${prefix}sparkling text
â ${prefix}sparkling2 text
â ${prefix}sparkling3 text
â ${prefix}sparkling4 text
â ${prefix}sparkling5 text
â ${prefix}sparkling6 text
â ${prefix}sparkling7 text
â ${prefix}decorative text
â ${prefix}chocolate text
â ${prefix}strawberry text
â ${prefix}koifish text
â ${prefix}bread text
â ${prefix}matrix text
â ${prefix}blood2 text
â ${prefix}neonligth2 text
â ${prefix}thunder2 text
â ${prefix}3dbox text
â ${prefix}neon2 text
â ${prefix}roadw text
â ${prefix}bokeh text
â ${prefix}gneon text
â ${prefix}advanced text
â ${prefix}dropwater text
â ${prefix}wall text
â ${prefix}chrismast text
â ${prefix}honey text
â ${prefix}drug text
â ${prefix}marble text
â ${prefix}marble2 text
â ${prefix}ice text
â ${prefix}juice text
â ${prefix}rusty text
â ${prefix}abstra text
â ${prefix}biscuit text
â ${prefix}wood text
â ${prefix}scifi text
â ${prefix}metalr text
â ${prefix}purpleg text
â ${prefix}shiny text 
â ${prefix}jewelry text
â ${prefix}jewelry2 text
â ${prefix}jewelry3 text
â ${prefix}jewelry4 text
â ${prefix}jewelry5 text
â ${prefix}jewelry6 text
â ${prefix}jewelry7 text
â ${prefix}jewelry8 text
â ${prefix}metalh text
â ${prefix}golden text
â ${prefix}glitter text
â ${prefix}glitter2 text
â ${prefix}glitter3 text
â ${prefix}glitter4 text
â ${prefix}glitter5 text
â ${prefix}glitter6 text
â ${prefix}glitter7 text
â ${prefix}metale text
â ${prefix}carbon text
â ${prefix}candy text
â ${prefix}metalb text
â ${prefix}gemb text
â ${prefix}3dchrome text
â ${prefix}metalb2 text
â ${prefix}metalg text
â°â ${prefix}metalg text


â­ââ ã Others ã
â ${prefix}afk [reason]
â ${prefix}translate kode_bahasa text
â ${prefix}kalkulator [query]
â ${prefix}smeme [text]
â ${prefix}smeme2 [text|text]
â ${prefix}memegen [text|text]
â°â

â­ââ ã Game Menu ã
â ${prefix}kuismath
â ${prefix}tebakgambar
â ${prefix}tebakkata
â ${prefix}tebakbendera
â ${prefix}tebakkalimat
â ${prefix}tebaksiapa
â ${prefix}tebakkabupaten
â ${prefix}tebakkimia
â ${prefix}tebaklirik
â ${prefix}tebaktebakan
â ${prefix}tekateki
â ${prefix}susunkata
â°â ${prefix}caklontong


â­ââ ã Asupan Menu ã
â ${prefix}chika
â ${prefix}delvira
â ${prefix}ayu
â ${prefix}bunga
â ${prefix}aura
â ${prefix}nisa
â ${prefix}ziva
â ${prefix}yana
â ${prefix}viona
â ${prefix}syania
â ${prefix}riri
â ${prefix}syifa
â ${prefix}mama_gina
â ${prefix}alcakenya
â ${prefix}mangayutri
â ${prefix}rikagusriani
â ${prefix}asupan
â ${prefix}bocil
â ${prefix}geayubi
â ${prefix}santuy
â ${prefix}ukhty
â°â ${prefix}syifa

â­ââ ã Telegram Sticker ã
â ${prefix}awoawo
â ${prefix}benedict
â ${prefix}chat
â ${prefix}dbfly
â ${prefix}dino_kuning
â ${prefix}doge
â ${prefix}gojosatoru
â ${prefix}hope_boy
â ${prefix}jisoo
â ${prefix}kr_robot
â ${prefix}kucing
â ${prefix}lonte
â ${prefix}manusia_lidi
â ${prefix}menjamet
â ${prefix}meow
â ${prefix}nicholas
â ${prefix}patrick
â ${prefix}popoci
â ${prefix}sponsbob
â ${prefix}kawan_sponsbob
â°â ${prefix}tyni

â­ââ ã Random Cewe ã
â ${prefix}china 
â ${prefix}indonesia 
â ${prefix}malaysia 
â ${prefix}thailand 
â ${prefix}korea 
â ${prefix}japan 
â ${prefix}vietnam 
â ${prefix}jenni 
â ${prefix}jiso 
â ${prefix}lisa  
â°â ${prefix}rose

â­ââ ã Logo Menu ã
â ${prefix}coverbannerlol text|heroes
â ${prefix}pubglogomaker text|style
â ${prefix}colorfulpubg text|color
â ${prefix}astronotspace text|style
â ${prefix}wallpaperaov text|heroes
â ${prefix}maketeamlogo text|style
â ${prefix}circlemarcotteam text|logo
â ${prefix}wallpaperml text|heroes
â ${prefix}dragonballfb text|character
â ${prefix}bannerofaov text|character
â ${prefix}effect3donbeach text|background
â ${prefix}cutegirlgamer text|logo
â ${prefix}footballteam text|logo
â ${prefix}beautifulshimmering text|champion
â ${prefix}pubgcutelogo text|logo
â ${prefix}elegantrotation text|logo
â ${prefix}logogamingassasin text|logo
â ${prefix}introvideomaker text|logo
â ${prefix}gaminglogo4fvs text|logo
â ${prefix}blueneon text|logo
â ${prefix}metalmascot text|logo
â ${prefix}anonymous2 text|style
â ${prefix}lolpentakill text|style
â ${prefix}avatarleagueofking text|style
â ${prefix}avatarff text|character
â ${prefix}overwatchwallpaper text|character
â ${prefix}rovwallpaperhd text|hero
â ${prefix}rovwallpaper text|avatar
â ${prefix}beautifulgalaxylol text|style
â ${prefix}crossfirecover text|character
â ${prefix}lolwallpaper text|wallpaper
â ${prefix}coverdota2 text|heroes
â ${prefix}coverleagueofking text|character
â ${prefix}avatar3q360 text|avatar
â ${prefix}coverofwarface text|character
â ${prefix}newlolavatar text|avatar
â ${prefix}csgocover text|background
â ${prefix}coverloknew text|hero
â ${prefix}coverfblol text|letters
â ${prefix}overwatchcover text|hero
â ${prefix}crossfirestyle text|avatar
â ${prefix}avatarlolbyname text|style
â ${prefix}lolcoverbyname text|avatar
â ${prefix}cyberhunterfb text|character
â ${prefix}coverfreefirefb text|character
â ${prefix}gamingmascot text|style
â ${prefix}coveronepiecefb text|character
â ${prefix}bannerytcsgo text|banner
â ${prefix}fbgamepubgcover text|template
â ${prefix}banneroflol text|text2|banner
â ${prefix}bannerofaov2 text|text2|banner
â ${prefix}teamlogo text|text2|background
â ${prefix}companylogo2 text|text2|background
â ${prefix}companylogo text|text2|background
â ${prefix}gradientlogo text|text2|background
â ${prefix}pencilsketch text|text2|icon
â ${prefix}gunlogogaming text|text2|background
â ${prefix}banneroffreefire text|text2|background
â ${prefix}letterlogos text|text2|thumb
â ${prefix}bannerofoverwatch text|text2|background
â ${prefix}bannerofapex text|text2|background
â ${prefix}bannerofpubg text|text2|background
â ${prefix}mascotstyle text|text2|thumb
â ${prefix}logoaccording text|text2|thumb
â°â ${prefix}avataroverwatch text|text2|thumb


â­ââ ã Islamic Menu ã
â ${prefix}asmaulhusna
â ${prefix}kisahnabi [nabi]
â ${prefix}jadwalshalat [daerah]
â ${prefix}randomquran
â ${prefix}randomquran2
â ${prefix}listsurah
â ${prefix}tafsirsurah [surah]
â°â ${prefix}alquranaudio [surah|ayat]

â­ââ ã Sound Menu ã
â ${prefix}sound1
â ${prefix}sound2
â ${prefix}sound3
â ${prefix}sound4
â ${prefix}sound5
â ${prefix}sound6
â ${prefix}sound7
â ${prefix}sound8
â ${prefix}sound9
â ${prefix}sound10
â ${prefix}sound11
â ${prefix}sound12
â ${prefix}sound13
â ${prefix}sound14
â ${prefix}sound15
â ${prefix}sound16
â ${prefix}sound17
â ${prefix}sound18 
â ${prefix}sound19
â ${prefix}sound20
â ${prefix}sound21
â ${prefix}sound22
â ${prefix}sound23
â ${prefix}sound24
â ${prefix}sound25
â ${prefix}sound26
â ${prefix}sound27
â ${prefix}sound28
â ${prefix}sound29
â ${prefix}sound30
â ${prefix}sound31
â ${prefix}sound32
â ${prefix}sound33
â ${prefix}sound34
â ${prefix}sound35
â ${prefix}sound36
â ${prefix}sound37
â ${prefix}sound38
â ${prefix}sound39
â ${prefix}sound40
â ${prefix}sound41
â ${prefix}sound42
â ${prefix}sound43
â ${prefix}sound44
â ${prefix}sound45
â ${prefix}sound46
â ${prefix}sound47
â ${prefix}sound48
â ${prefix}sound49
â ${prefix}sound50
â ${prefix}sound51
â ${prefix}sound52
â ${prefix}sound53
â ${prefix}sound54
â ${prefix}sound55
â ${prefix}sound56
â ${prefix}sound57
â ${prefix}sound58
â ${prefix}sound59
â ${prefix}sound60
â ${prefix}sound61
â ${prefix}sound62
â ${prefix}sound63
â ${prefix}sound64
â ${prefix}sound65
â ${prefix}sound66
â ${prefix}sound67
â ${prefix}sound68
â ${prefix}sound69
â°â ${prefix}sound70

â­ââ ã TqTo ã 
â My God
â My Parents
â Fatih A.
â Ferdi
â DikaArdnt
â Mhankbarbar
â Nurutomo
â Rashid
â ZeeoneOfc
â Penyedia Module
â°â And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ââ ã RULES AND FAQ ã ââ*

1. Jangan spam bot. ð
2. Jangan telepon bot. âï¸
3. Jangan membandingkan bot ð

ð¯ï¸ Bot tidak atau lambat merespon ?
â¡ï¸ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

ð¯ï¸ Dimana saya bisa mendapatkan Script dari bot ini ?
â¡ï¸ Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

ð¯ï¸ Boleh saya menambah ke grup?
â¡ï¸ Untuk itu tergantung dari owner bot sendiri

ð¯ï¸ Prefixnya apa ya?
â¡ï¸ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

â ï¸ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`ð©ðºðððºð ððððº ððððð ððºð ð¤
	
â­ ð­ðºððº :
â ð´ððð :
â ð¦ð¾ðð½ð¾ð :
â ð ðððð :
â°â ð¯ðºðððð ðððð¾ð ðððð ððº ððºk ~`
}
exports.leave = () =>{
	return`Yah kok out ð£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------ã SOURCE CODE ã ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------ã DONATE ã -------*

Hai kak âºï¸ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti ð

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`â­ââ ã Bot Info ã 
â ${prefix}owner
â ${prefix}rules
â ${prefix}sc
â ${prefix}ping
â ${prefix}runtime
â ${prefix}botstatus
â°â ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`â­ââ ã Owner ã 
â < evaluate
â > evaluate
â $ exec
â => exec
â ${prefix}setmenu [query]
â ${prefix}setmenu templateLocation
â ${prefix}setmenu templateTenor
â ${prefix}setmenu katalog
â ${prefix}setmenu katalog2
â ${prefix}setmenu list
â ${prefix}setwm packname|author
â ${prefix}sendsesi
â ${prefix}listpc
â ${prefix}listgc
â ${prefix}broadcast [text]
â ${prefix}bc [text]
â ${prefix}bcgc 
â ${prefix}bcimage
â ${prefix}bcaudio
â ${prefix}bcstiker
â ${prefix}bcvn
â ${prefix}bcvideo
â ${prefix}nsfw [on/off]
â ${prefix}mute [on/off]
â ${prefix}banchat
â ${prefix}unbanchat
â ${prefix}autorespond [on/off]
â ${prefix}antiviewonce [on/off]
â ${prefix}autobio [on/off]
â ${prefix}join [link]
â ${prefix}self
â ${prefix}public [only bot]
â ${prefix}del [pesan bot]
â°â ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`â­ââ ã Database ã 
â ${prefix}setcmd [reply stiker]
â ${prefix}delcmd [reply stiker]
â ${prefix}listcmd
â ${prefix}absen
â ${prefix}cekabsen
â ${prefix}deleteabsen
â ${prefix}absenstart
â ${prefix}addmsg [nama file]
â ${prefix}getmsg [nama file]
â ${prefix}listmsg
â°â ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`â­ââ ã Group ã 
â ${prefix}register
â ${prefix}unregister
â ${prefix}ceksn
â ${prefix}listonline
â ${prefix}sider
â ${prefix}wm packname|author
â ${prefix}infochat
â ${prefix}setdesk [text]
â ${prefix}setppgrup [reply image]
â ${prefix}revoke
â ${prefix}leave
â ${prefix}add [62***]
â ${prefix}kick @tag
â ${prefix}leave
â ${prefix}linkgc
â ${prefix}welcome [on/off]
â ${prefix}goodbye [on/off]
â ${prefix}demotedetect [on/off]
â ${prefix}promotedetect  [on/off]
â ${prefix}setwelcome
â ${prefix}updatewelcome
â ${prefix}delwelcome
â ${prefix}cekwelcome
â ${prefix}setgoodbye
â ${prefix}updategoodbye
â ${prefix}delgoodbye
â ${prefix}cekgoodbye
â ${prefix}setpromote
â ${prefix}updatepromote
â ${prefix}setdemote
â ${prefix}updatedemote
â ${prefix}cekpromote
â ${prefix}cekdemote
â ${prefix}delpromote
â ${prefix}deldemote
â ${prefix}nsfw [on/off]
â ${prefix}antilink [on/off]
â ${prefix}take packname|author
â ${prefix}group [open/close]
â ${prefix}tagall [text]
â°â ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`â­ââ ã Anime ã 
â ${prefix}quotesanime
â ${prefix}anime [query]
â ${prefix}manga [query]
â°â ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`â­ââ ã Tag ã 
â ${prefix}stickertag
â ${prefix}videotag [query]
â ${prefix}vntag [query]
â°â ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`â­ââ ã Stalking ã 
â ${prefix}igstalk [username]
â ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`â­ââ ã Search ã 
â ${prefix}ytsearch [query]
â ${prefix}wallpaper [query]
â ${prefix}google [query]
â ${prefix}wikimedia [query]
â ${prefix}hentai
â ${prefix}wattpad [query]
â ${prefix}webtoons [query]
â ${prefix}drakor [query]
â°â ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`â­ââ ã Converter ã 
â ${prefix}emoji [ð­]
â ${prefix}emojimix [ð­+ð©]
â ${prefix}toaudio [video]
â ${prefix}tomp3 [video]
â ${prefix}tovn [video]
â ${prefix}stiker [reply image]
â ${prefix}tourl [image/video]
â ${prefix}togif [sticker]
â ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`â­ââ ã Image Effect ã 
â ${prefix}wanted [reply image/stiker]
â ${prefix}utatoo [reply image/stiker]
â ${prefix}unsharpen [reply image/stiker]
â ${prefix}thanos [reply image/stiker]
â ${prefix}sniper [reply image/stiker]
â ${prefix}sharpen [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}scary [reply image/stiker]
â ${prefix}rip [reply image/stiker]
â ${prefix}redple [reply image/stiker]
â ${prefix}rejected [reply image/stiker]
â ${prefix}posterize [reply image/stiker]
â ${prefix}ps4 [reply image/stiker]
â ${prefix}pixelize [reply image/stiker]
â ${prefix}missionpassed [reply image/stiker]
â ${prefix}moustache [reply image/stiker]
â ${prefix}lookwhatkarenhave [reply image/stiker]
â ${prefix}jail [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}instagram [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}glitch [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}frame [reply image/stiker]
â ${prefix}fire [reply image/stiker]
â ${prefix}distort [reply image/stiker]
â ${prefix}dictator [reply image/stiker]
â ${prefix}deepfry [reply image/stiker]
â ${prefix}ddungeon [reply image/stiker]
â ${prefix}circle [reply image/stiker]
â ${prefix}challenger [reply image/stiker]
â ${prefix}burn [reply image/stiker]
â ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`â­ââ ã Sticker Effect ã 
â ${prefix}jail [reply image/stiker]
â ${prefix}red [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}bloo [reply image/stiker]
â ${prefix}blue [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}green [reply image/stiker]
â ${prefix}glass [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}blurple [reply image/stiker]
â ${prefix}blurple2 [reply image/stiker]
â ${prefix}wasted [reply image/stiker]
â ${prefix}passed [reply image/stiker]
â ${prefix}triggered [reply image/stiker]
â ${prefix}comrade [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}threshold [reply image/stiker]
â ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`â­ââ ã Download ã 
â ${prefix}tiktok [link]
â ${prefix}tiktoknowm [link]
â ${prefix}tiktokwm [link]
â ${prefix}tiktokaudio [link]
â ${prefix}ytdl [link]
â ${prefix}play [query]
â ${prefix}ytmp3 [link]
â ${prefix}ytshortmp3 [link]
â ${prefix}ytmp4 [link]
â ${prefix}ytshorts [link]
â ${prefix}facebook [link]
â ${prefix}facebooksd [link]
â ${prefix}facebookhd [link]
â ${prefix}fbaudio [link]
â ${prefix}igstory [username]
â ${prefix}igdl [link]
â ${prefix}igphoto [link]
â ${prefix}igvideo [link]
â ${prefix}igreels [link]
â ${prefix}igtv [link]
â ${prefix}soundcloud [link]
â ${prefix}gitclone [link repo]
â ${prefix}gitrepo [username repo branch]
â ${prefix}mediafire [link]
â°â ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`â­ââ ã Random Anime ã
â ${prefix}loli
â ${prefix}neko
â ${prefix}waifu
â ${prefix}shinobu
â ${prefix}megumin
â ${prefix}bully
â ${prefix}cuddle
â ${prefix}cry
â ${prefix}hug
â ${prefix}awoo
â ${prefix}kiss
â ${prefix}lick
â ${prefix}pat
â ${prefix}smug
â ${prefix}bonk
â ${prefix}yeet
â ${prefix}blush
â ${prefix}smile
â ${prefix}wave
â ${prefix}highfive
â ${prefix}handhold
â ${prefix}nom
â ${prefix}bite
â ${prefix}glomp
â ${prefix}slap
â ${prefix}kill
â ${prefix}happy
â ${prefix}wink
â ${prefix}poke
â ${prefix}dance
â°â ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`â­ââ ã Nsfw & Sfw ã
â ${prefix}cuddle
â ${prefix}feed
â ${prefix}foxgirl
â ${prefix}kemonomimi2
â ${prefix}woof
â ${prefix}holo2
â ${prefix}hug
â ${prefix}kiss
â ${prefix}lizard
â ${prefix}meowi
â ${prefix}neko2
â ${prefix}pat
â ${prefix}poke
â ${prefix}slap
â ${prefix}tickle
â ${prefix}baka
â ${prefix}smug
â ${prefix}neko_sfw
â ${prefix}hentai
â ${prefix}hentai_gif
â ${prefix}spank
â ${prefix}blowjob
â ${prefix}cumarts
â ${prefix}eroyuri
â ${prefix}eroneko
â ${prefix}erokemonomimi
â ${prefix}erokitsune
â ${prefix}ero
â ${prefix}feet
â ${prefix}erofeet
â ${prefix}feetgif
â ${prefix}femdom
â ${prefix}futanari
â ${prefix}hentai
â ${prefix}holoero
â ${prefix}holo
â ${prefix}keta
â ${prefix}kitsune
â ${prefix}kemonomimi
â ${prefix}pussyart
â ${prefix}pussywankgif
â ${prefix}girl_solo
â ${prefix}girl_solo_gif
â ${prefix}tits
â ${prefix}trap
â ${prefix}yuri
â ${prefix}avatar2
â ${prefix}anal
â ${prefix}bj
â ${prefix}boobs
â ${prefix}classic
â ${prefix}cumsluts
â ${prefix}kuni
â ${prefix}lesbian
â ${prefix}neko
â ${prefix}neko_gif
â ${prefix}ahegao
â ${prefix}bdsm
â ${prefix}cuckold
â ${prefix}cum
â ${prefix}foot
â ${prefix}gangbang
â ${prefix}glasses
â ${prefix}jahy
â ${prefix}masturbation
â ${prefix}nsfw_neko
â ${prefix}orgy
â ${prefix}panties
â ${prefix}tentacles
â ${prefix}thighs
â°â ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`â­ââ ã Textpro Menu ã
â ${prefix}halloween2 text|text2
â ${prefix}horror text|text2
â ${prefix}game8bit text|text2
â ${prefix}layered text|text2
â ${prefix}glitch2 text|text2
â ${prefix}coolg text|text2
â ${prefix}coolwg text|text2
â ${prefix}realistic text|text2
â ${prefix}space3d text|text2
â ${prefix}gtiktok text|text2
â ${prefix}stone text|text2
â ${prefix}marvel text|text2
â ${prefix}marvel2 text|text2
â ${prefix}pornhub text|text2
â ${prefix}avengers text|text2
â ${prefix}metalr text|text2
â ${prefix}metalg text|text2
â ${prefix}metalg2 text|text2
â ${prefix}halloween2 text|text2
â ${prefix}lion text|text2
â ${prefix}wolf_bw text|text2
â ${prefix}wolf_g text|text2
â ${prefix}ninja text|text2
â ${prefix}3dsteel text|text2
â ${prefix}horror2 text|text2
â ${prefix}lava text|text2
â ${prefix}bagel text|text2
â ${prefix}blackpink text
â ${prefix}rainbow2 text
â ${prefix}water_pipe text
â ${prefix}halloween text
â ${prefix}sketch text
â ${prefix}sircuit text
â ${prefix}discovery text
â ${prefix}metallic2 text
â ${prefix}fiction text
â ${prefix}demon text
â ${prefix}transformer text
â ${prefix}berry text
â ${prefix}thunder text
â ${prefix}magma text
â ${prefix}3dstone text
â ${prefix}neon text
â ${prefix}glitch text
â ${prefix}harry_potter text
â ${prefix}embossed text
â ${prefix}broken text
â ${prefix}papercut text
â ${prefix}gradient text
â ${prefix}glossy text
â ${prefix}watercolor text
â ${prefix}multicolor text
â ${prefix}neon_devil text
â ${prefix}underwater text
â ${prefix}bear text
â ${prefix}wonderfulg text
â ${prefix}christmas text
â ${prefix}neon_light text
â ${prefix}snow text
â ${prefix}cloudsky text
â ${prefix}luxury2 text
â ${prefix}gradient2 text
â ${prefix}summer text
â ${prefix}writing text
â ${prefix}engraved text
â ${prefix}summery text
â ${prefix}3dglue text
â ${prefix}metaldark text
â ${prefix}neonlight text
â ${prefix}oscar text
â ${prefix}minion text
â ${prefix}holographic text
â ${prefix}purple text
â ${prefix}glossyb text
â ${prefix}deluxe2 text
â ${prefix}glossyc text
â ${prefix}fabric text
â ${prefix}neonc text
â ${prefix}newyear text
â ${prefix}newyear2 text
â ${prefix}metals text
â ${prefix}xmas text
â ${prefix}blood text
â ${prefix}darkg text
â ${prefix}joker text
â ${prefix}wicker text
â ${prefix}natural text
â ${prefix}firework text
â ${prefix}skeleton text
â ${prefix}balloon text
â ${prefix}balloon2 text
â ${prefix}balloon3 text
â ${prefix}balloon4 text
â ${prefix}balloon5 text
â ${prefix}balloon6 text
â ${prefix}balloon7 text
â ${prefix}steel text
â ${prefix}gloss text
â ${prefix}denim text
â ${prefix}decorate text
â ${prefix}decorate2 text
â ${prefix}peridot text
â ${prefix}rock text
â ${prefix}glass text
â ${prefix}glass2 text
â ${prefix}glass3 text
â ${prefix}glass4 text
â ${prefix}glass5 text
â ${prefix}glass6 text
â ${prefix}glass7 text
â ${prefix}glass8 text
â ${prefix}captain_as2 text
â ${prefix}robot text
â ${prefix}equalizer text
â ${prefix}toxic text
â ${prefix}sparkling text
â ${prefix}sparkling2 text
â ${prefix}sparkling3 text
â ${prefix}sparkling4 text
â ${prefix}sparkling5 text
â ${prefix}sparkling6 text
â ${prefix}sparkling7 text
â ${prefix}decorative text
â ${prefix}chocolate text
â ${prefix}strawberry text
â ${prefix}koifish text
â ${prefix}bread text
â ${prefix}matrix text
â ${prefix}blood2 text
â ${prefix}neonligth2 text
â ${prefix}thunder2 text
â ${prefix}3dbox text
â ${prefix}neon2 text
â ${prefix}roadw text
â ${prefix}bokeh text
â ${prefix}gneon text
â ${prefix}advanced text
â ${prefix}dropwater text
â ${prefix}wall text
â ${prefix}chrismast text
â ${prefix}honey text
â ${prefix}drug text
â ${prefix}marble text
â ${prefix}marble2 text
â ${prefix}ice text
â ${prefix}juice text
â ${prefix}rusty text
â ${prefix}abstra text
â ${prefix}biscuit text
â ${prefix}wood text
â ${prefix}scifi text
â ${prefix}metalr text
â ${prefix}purpleg text
â ${prefix}shiny text 
â ${prefix}jewelry text
â ${prefix}jewelry2 text
â ${prefix}jewelry3 text
â ${prefix}jewelry4 text
â ${prefix}jewelry5 text
â ${prefix}jewelry6 text
â ${prefix}jewelry7 text
â ${prefix}jewelry8 text
â ${prefix}metalh text
â ${prefix}golden text
â ${prefix}glitter text
â ${prefix}glitter2 text
â ${prefix}glitter3 text
â ${prefix}glitter4 text
â ${prefix}glitter5 text
â ${prefix}glitter6 text
â ${prefix}glitter7 text
â ${prefix}metale text
â ${prefix}carbon text
â ${prefix}candy text
â ${prefix}metalb text
â ${prefix}gemb text
â ${prefix}3dchrome text
â ${prefix}metalb2 text
â ${prefix}metalg text
â°â ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`â­ââ ã Others ã
â ${prefix}ttp [text]
â ${prefix}attp [text]
â ${prefix}afk [reason]
â ${prefix}translate kode_bahasa text
â ${prefix}kalkulator [query]
â ${prefix}smeme [text]
â ${prefix}smeme2 [text|text]
â°â ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`â­ââ ã Game Menu ã
â ${prefix}kuismath
â ${prefix}tebakgambar
â ${prefix}tebakkata
â ${prefix}tebakbendera
â ${prefix}tebakkalimat
â ${prefix}tebaksiapa
â ${prefix}tebakkabupaten
â ${prefix}tebakkimia
â ${prefix}tebaklirik
â ${prefix}tebaktebakan
â ${prefix}tekateki
â ${prefix}susunkata
â°â ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`â­ââ ã Asupan Menu ã
â ${prefix}chika
â ${prefix}delvira
â ${prefix}ayu
â ${prefix}bunga
â ${prefix}aura
â ${prefix}nisa
â ${prefix}ziva
â ${prefix}yana
â ${prefix}viona
â ${prefix}syania
â ${prefix}riri
â ${prefix}syifa
â ${prefix}mama_gina
â ${prefix}alcakenya
â ${prefix}mangayutri
â ${prefix}rikagusriani
â ${prefix}asupan
â ${prefix}bocil
â ${prefix}geayubi
â ${prefix}santuy
â ${prefix}ukhty
â°â ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`â­ââ ã Random Cewe ã
â ${prefix}china 
â ${prefix}indonesia 
â ${prefix}malaysia 
â ${prefix}thailand 
â ${prefix}korea 
â ${prefix}japan 
â ${prefix}vietnam 
â ${prefix}jenni 
â ${prefix}jiso 
â ${prefix}lisa  
â°â ${prefix}rose
`
}

exports.tqto = () =>{
	return`â­ââ ã TqTo ã 
â My God
â My Parents
â Fatih A.
â Ferdi
â DikaArdnt
â Mhankbarbar
â Nurutomo
â Rashid
â ZeeoneOfc
â Penyedia Module
â°â And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`â­ââ ã Primbon ã
â ${prefix}nomorhoki 887435047326
â ${prefix}artimimpi [query]
â ${prefix}artinama [query]
â ${prefix}ramaljodoh
â ${prefix}ramaljodohbali
â ${prefix}suamiistri
â ${prefix}ramalcinta
â ${prefix}cocoknama
â ${prefix}pasangan
â ${prefix}jadiannikah
â ${prefix}sifatusaha
â ${prefix}rezeki
â ${prefix}pekerjaan
â ${prefix}nasib
â ${prefix}penyakit
â ${prefix}tarot
â ${prefix}fengshui
â ${prefix}haribaik
â ${prefix}harisangar
â ${prefix}harisial
â ${prefix}nagahari
â ${prefix}arahrezeki
â ${prefix}peruntungan
â ${prefix}weton
â ${prefix}karakter
â ${prefix}keberuntungan
â ${prefix}memancing
â ${prefix}masasubur
â ${prefix}zodiak 
â°â ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`â­ââ ã Telegram Sticker ã
â ${prefix}awoawo
â ${prefix}benedict
â ${prefix}chat
â ${prefix}dbfly
â ${prefix}dino_kuning
â ${prefix}doge
â ${prefix}gojosatoru
â ${prefix}hope_boy
â ${prefix}jisoo
â ${prefix}kr_robot
â ${prefix}kucing
â ${prefix}lonte
â ${prefix}manusia_lidi
â ${prefix}menjamet
â ${prefix}meow
â ${prefix}nicholas
â ${prefix}patrick
â ${prefix}popoci
â ${prefix}sponsbob
â ${prefix}kawan_sponsbob
â°â ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`â­ââ ã Ephoto360 Menu ã
â ${prefix}youtubegold text
â ${prefix}youtubesilver text
â ${prefix}facebookgold text
â ${prefix}facebooksilver text
â ${prefix}instagramgold text
â ${prefix}instagramsilver text
â ${prefix}twittergold text
â ${prefix}twittersilver text
â ${prefix}retrotext text
â ${prefix}halloweenbats text
â ${prefix}texthalloween text
â ${prefix}cardhalloween text
â ${prefix}birthdaycake text
â ${prefix}thundertext text
â ${prefix}icetext text
â ${prefix}milkcake text
â ${prefix}snowontext text
â ${prefix}metalstar text
â ${prefix}dragonfire text
â ${prefix}zombie3d text
â ${prefix}merrycard text
â ${prefix}generalexam text 
â ${prefix}viettel text
â ${prefix}embroider text
â ${prefix}graffititext text
â ${prefix}graffititext2 text
â ${prefix}graffititext3 text
â ${prefix}covergraffiti text
â ${prefix}moderngold text
â ${prefix}capercut text
â ${prefix}lovecard text
â ${prefix}heartflashlight text
â ${prefix}heartcup text
â ${prefix}sunglightshadow text
â ${prefix}graffiti3d text
â ${prefix}moderngoldsilver text
â ${prefix}moderngold2 text
â ${prefix}moderngold3 text
â ${prefix}fabrictext text
â ${prefix}masteryavatar text
â ${prefix}messagecoffee text
â ${prefix}announofwin text
â ${prefix}writeblood text
â ${prefix}horrorletter text
â ${prefix}writehorror text
â ${prefix}shirtclub text
â ${prefix}angelwing text
â ${prefix}christmasseason text
â ${prefix}projectyasuo text
â ${prefix}lovelycute text
â ${prefix}womansday text
â ${prefix}covergamepubg text
â ${prefix}nameonheart text
â ${prefix}funnyhalloween text
â ${prefix}lightningpubg text
â ${prefix}greetingcardvideo text 
â ${prefix}christmascard text 
â ${prefix}galaxybat text
â ${prefix}writegalaxy text
â ${prefix}starsnight text
â ${prefix}noeltext text
â ${prefix}textcakes text
â ${prefix}pubgbirthday text
â ${prefix}galaxywallpaper text
â ${prefix}pubgglicthvideo text 
â ${prefix}pubgmascotlogo text
â ${prefix}realembroidery text
â ${prefix}vintagetelevision text
â ${prefix}funnyanimations text
â ${prefix}glowingtext text
â ${prefix}textonglass text
â ${prefix}cartoonstyle text
â ${prefix}multicolor text
â ${prefix}watercolor2 text
â ${prefix}textsky text
â ${prefix}summerbeach text
â ${prefix}1917text text
â ${prefix}puppycute text
â ${prefix}rosebirthday text
â ${prefix}steellettering text|text2
â ${prefix}letterstext text|text2
â ${prefix}barcashirt text|text2
â ${prefix}premiercup text|text2
â ${prefix}stylepoligon text|text2
â ${prefix}lifebuoys text|text2
â°â ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`â­ââ ã Logo Menu ã
â ${prefix}coverbannerlol text|heroes
â ${prefix}pubglogomaker text|style
â ${prefix}colorfulpubg text|color
â ${prefix}astronotspace text|style
â ${prefix}wallpaperaov text|heroes
â ${prefix}maketeamlogo text|style
â ${prefix}circlemarcotteam text|logo
â ${prefix}wallpaperml text|heroes
â ${prefix}dragonballfb text|character
â ${prefix}bannerofaov text|character
â ${prefix}effect3donbeach text|background
â ${prefix}cutegirlgamer text|logo
â ${prefix}footballteam text|logo
â ${prefix}beautifulshimmering text|champion
â ${prefix}pubgcutelogo text|logo
â ${prefix}elegantrotation text|logo
â ${prefix}logogamingassasin text|logo
â ${prefix}introvideomaker text|logo
â ${prefix}gaminglogo4fvs text|logo
â ${prefix}blueneon text|logo
â ${prefix}metalmascot text|logo
â ${prefix}anonymous2 text|style
â ${prefix}lolpentakill text|style
â ${prefix}avatarleagueofking text|style
â ${prefix}avatarff text|character
â ${prefix}overwatchwallpaper text|character
â ${prefix}rovwallpaperhd text|hero
â ${prefix}rovwallpaper text|avatar
â ${prefix}beautifulgalaxylol text|style
â ${prefix}crossfirecover text|character
â ${prefix}lolwallpaper text|wallpaper
â ${prefix}coverdota2 text|heroes
â ${prefix}coverleagueofking text|character
â ${prefix}avatar3q360 text|avatar
â ${prefix}coverofwarface text|character
â ${prefix}newlolavatar text|avatar
â ${prefix}csgocover text|background
â ${prefix}coverloknew text|hero
â ${prefix}coverfblol text|letters
â ${prefix}overwatchcover text|hero
â ${prefix}crossfirestyle text|avatar
â ${prefix}avatarlolbyname text|style
â ${prefix}lolcoverbyname text|avatar
â ${prefix}cyberhunterfb text|character
â ${prefix}coverfreefirefb text|character
â ${prefix}gamingmascot text|style
â ${prefix}coveronepiecefb text|character
â ${prefix}bannerytcsgo text|banner
â ${prefix}fbgamepubgcover text|template
â ${prefix}banneroflol text|text2|banner
â ${prefix}bannerofaov2 text|text2|banner
â ${prefix}teamlogo text|text2|background
â ${prefix}companylogo2 text|text2|background
â ${prefix}companylogo text|text2|background
â ${prefix}gradientlogo text|text2|background
â ${prefix}pencilsketch text|text2|icon
â ${prefix}gunlogogaming text|text2|background
â ${prefix}banneroffreefire text|text2|background
â ${prefix}letterlogos text|text2|thumb
â ${prefix}bannerofoverwatch text|text2|background
â ${prefix}bannerofapex text|text2|background
â ${prefix}bannerofpubg text|text2|background
â ${prefix}mascotstyle text|text2|thumb
â ${prefix}logoaccording text|text2|thumb
â°â ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`â­ââ ã Islamic Menu ã
â ${prefix}asmaulhusna
â ${prefix}kisahnabi [nabi]
â ${prefix}jadwalshalat [daerah]
â ${prefix}randomquran
â ${prefix}randomquran2
â ${prefix}listsurah
â ${prefix}tafsirsurah [surah]
â°â ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`â­ââ ã Anonymous ã
â ${prefix}anonymous 
â ${prefix}start
â ${prefix}skip [daerah]
â°â ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`â­ââ ã Store Menu ã
â ${prefix}list
â ${prefix}addlist [key|respond]
â ${prefix}dellist [key]
â ${prefix}update [key|respond]
â ${prefix}store
â ${prefix}kali
â ${prefix}bagi
â ${prefix}tambah
â ${prefix}kurang
â ${prefix}kalkulator
â ${prefix}setproses
â ${prefix}updateproses
â ${prefix}cekproses
â ${prefix}delproses
â ${prefix}setdone
â ${prefix}updatedone
â ${prefix}cekdone
â ${prefix}deldone
â ${prefix}pay
â ${prefix}setcaptionpay
â ${prefix}proses
â°â ${prefix}done
`
}

exports.voiceChange = (prefix) =>{
	return`â­ââ ã Voice Change Menu ã
â ${prefix}bass
â ${prefix}blown
â ${prefix}deep
â ${prefix}earrape
â ${prefix}fast
â ${prefix}fat
â ${prefix}nightcore
â ${prefix}reverse
â ${prefix}robot
â ${prefix}slow
â ${prefix}smooth
â°â ${prefix}tupai
`
}

exports.storagemenu = (prefix) =>{
	return`â­ââ ã Storage Menu ã
â ${prefix}addvn
â ${prefix}listvn
â ${prefix}addimage
â ${prefix}listimage
â ${prefix}addvideo
â ${prefix}listvideo
â ${prefix}addstik
â°â ${prefix}liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`â­ââ ã Rpg Games ã
â ${prefix}adventure
â ${prefix}weekly
â ${prefix}use
â ${prefix}transfer
â ${prefix}slot
â ${prefix}shop
â ${prefix}pasar
â ${prefix}ojek
â ${prefix}nguli
â ${prefix}narik
â ${prefix}nabung
â ${prefix}monthly
â ${prefix}mining
â ${prefix}merampok
â ${prefix}mancing
â ${prefix}kolam
â ${prefix}koboy
â ${prefix}kerja
â ${prefix}kandang
â ${prefix}judi
â ${prefix}inventory
â ${prefix}hourly
â ${prefix}fishop
â ${prefix}feed
â ${prefix}duel
â ${prefix}daily
â ${prefix}craft
â ${prefix}cooldown
â ${prefix}cook
â ${prefix}collect
â ${prefix}chop
â ${prefix}casino
â ${prefix}buy
â ${prefix}bank 
â ${prefix}bansos
â ${prefix}berdagang
â ${prefix}berkebon
â°â ${prefix}build
`
}

exports.soundmenu = (prefix) =>{
return`â­ââ ã Sound Menu ã
â ${prefix}sound1
â ${prefix}sound2
â ${prefix}sound3
â ${prefix}sound4
â ${prefix}sound5
â ${prefix}sound6
â ${prefix}sound7
â ${prefix}sound8
â ${prefix}sound9
â ${prefix}sound10
â ${prefix}sound11
â ${prefix}sound12
â ${prefix}sound13
â ${prefix}sound14
â ${prefix}sound15
â ${prefix}sound16
â ${prefix}sound17
â ${prefix}sound18 
â ${prefix}sound19
â ${prefix}sound20
â ${prefix}sound21
â ${prefix}sound22
â ${prefix}sound23
â ${prefix}sound24
â ${prefix}sound25
â ${prefix}sound26
â ${prefix}sound27
â ${prefix}sound28
â ${prefix}sound29
â ${prefix}sound30
â ${prefix}sound31
â ${prefix}sound32
â ${prefix}sound33
â ${prefix}sound34
â ${prefix}sound35
â ${prefix}sound36
â ${prefix}sound37
â ${prefix}sound38
â ${prefix}sound39
â ${prefix}sound40
â ${prefix}sound41
â ${prefix}sound42
â ${prefix}sound43
â ${prefix}sound44
â ${prefix}sound45
â ${prefix}sound46
â ${prefix}sound47
â ${prefix}sound48
â ${prefix}sound49
â ${prefix}sound50
â ${prefix}sound51
â ${prefix}sound52
â ${prefix}sound53
â ${prefix}sound54
â ${prefix}sound55
â ${prefix}sound56
â ${prefix}sound57
â ${prefix}sound58
â ${prefix}sound59
â ${prefix}sound60
â ${prefix}sound61
â ${prefix}sound62
â ${prefix}sound63
â ${prefix}sound64
â ${prefix}sound65
â ${prefix}sound66
â ${prefix}sound67
â ${prefix}sound68
â ${prefix}sound69
â°â ${prefix}sound70
`
}