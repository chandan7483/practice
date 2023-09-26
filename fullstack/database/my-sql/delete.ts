var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'chandan',
    password:''
})

con.connect((err:any)=>{if(err)throw err
console.log('connected')
let query="DELETE FROM `student` WHERE name='manoj'"
con.query(query,(err:any,res:any)=>{if(err)throw err
console.log('deleted')
})
})