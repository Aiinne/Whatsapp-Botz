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
	return`🚫  *USER NOT REGISTER*  🚫\n\n_Untuk mendaftarkan diri dengan mitsuha bot silahkan untuk kamu ketik .login_`
}

exports.wait = () => {
	return`PEROSES...`
}