var mysql=require ('mysql')
//require error use 'tsc --init'in integrated terminal
//http://localhost/phpmyadmin/
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:""
})

con.connect((err:any)=>{if(err)throw err;
console.log('db connected')
con.query("CREATE DATABASE chandan",(err:any,res:any)=>{if(err)throw err
console.log('database created')})
})