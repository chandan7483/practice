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
let query="INSERT INTO student(name, chocolate) VALUES ('manoj','kit kat')"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log("element added")
})
})