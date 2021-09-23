exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`
┌───「 *MITSUHA BOTZ* 」───
│
├ *Nama*: ${namaUser}
├ *No*: wa.me/${sender.split("@")[0]}
├ *Umur*: ${umurUser}
├ *Ns*: ${serialUser}
│
└──────────────────`
}

exports.noregis = () => {
	return`\`\`\`You not register, Please typing .verify\`\`\``
}

exports.wait = () => {
	return`PEROSES...`
}
