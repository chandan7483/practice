var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'chandan'
})
con.connect((err:any)=>{
    if(err)throw err;
    console.log('db connected')
let query="UPDATE `student` SET `name`='nishchay',`chocolate`='laati' WHERE 1 "

con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log('updated')
})
})