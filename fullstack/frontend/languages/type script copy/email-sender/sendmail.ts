// import nodemailer from 'nodemailer'
let nodremailer1=require('nodemailer')
console.log("im running",nodremailer1)

let transport=nodremailer1.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'ccatvgnhjxsbxyof'
    }
    
},{
    tls:{
        rejectUnauthorized: false
    }
})

let mailoption={
    from:'waseemahmed116@gmail.com',
    to:'chapineelakanth@gmail.com',
    subject:'testing mail',
    text:'hello how r u'

}

transport.sendMail(mailoption,(err:any,res:any)=>{
if(err)throw err;
console.log("mail sent")
})