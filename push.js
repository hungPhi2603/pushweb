var push = require('web-push')

let vapidKeys = {
    publicKey: 'BMsisg8H9hmlTX36zDAbOVgDN0V-4SwZgqV9Nr64qsdeB6vw8S7J3b4qaUXMsntgpALvq_wACg9s08LeiOn8unw',
    privateKey: 'MWPBBBp1WWA8aNwjAsjUG3U_TcjlFEySWq1LPgDXfyY'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cAZf5IVnaec:APA91bGekZEVERkf3xd0K5ZikGxCKAejyRvSiz1Gwayt5sY-6BSMeBEdAUM66nDH6ZstMkmygnBpYyIC1xqOGPdpkN8macSxVExW-bDRfanD9U6I0P_y1_1tWWZj59X_aIWhZAmoOljS","expirationTime":null,"keys":{"p256dh":"BC1jgjIpbDdDTbtE5Q9tA6eyb99_P5Y6gesVWyKi9yTDJd2ssbJ9O2TcOwiVp0hPYp012TRxJoQFvoFvUdVKOnk","auth":"Yv2m3_-j0ROKWu7cihr8uw"}}

push.sendNotification(sub, 'this is title')