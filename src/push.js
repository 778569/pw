var push = require('web-push');

let vapidkey = {
    publicKey: 'BKR9PyLA-ERtX13qzRdr8p4bj0RTbBbxdlXwEJ8zrdCiEYNpHwJB0YV0wfd2UDnihTIFmGcSH9dF4JJ8eJZ1uy0',
    privateKey: 'Nv3fm0X5w73TnzpSqi_6rf_SJc5QldYhEt9GO3gb3jQ'
  }

  push.setVapidDetails('mailto: kavindabandara94@gmail.com', vapidkey.publicKey,vapidkey.privateKey)

  let sub ={};

  push.sendNotification(sub,'test message')