let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
const Cfonts = require('cfonts')

function start(file) {
let args [path.join(file), ...process.argv.slice(2)]
let p = spawn(process.argv[0]
           stdio: ['inherit', 'inherit', 'inherit', 'ipc']
           })
           conn.on('message', data => {
           	console.log('[REKRUT]', data)
           switch (command) {
           	case 'haloo':
             reply('tes')
             break
             }
             })