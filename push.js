var push = require('web-push')

let vapidKeys = {
    publicKey: 'BMsisg8H9hmlTX36zDAbOVgDN0V-4SwZgqV9Nr64qsdeB6vw8S7J3b4qaUXMsntgpALvq_wACg9s08LeiOn8unw',
    privateKey: 'MWPBBBp1WWA8aNwjAsjUG3U_TcjlFEySWq1LPgDXfyY'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub

push.sendNotification(sub, {title: 'this is title', description: 'this is desc'})