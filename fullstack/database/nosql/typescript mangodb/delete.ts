import {MongoClient} from 'mongodb'
let myaddress='mongodb://127.0.0.1:27017'
let client=new MongoClient(myaddress)
let dbname='chandan'

async function main(){
   await client.connect()
    console.log('mission compleate')
    let db=client.db(dbname)
    let collection=db.collection('student')
    let data =await collection.deleteOne({name:'nishchay'})
    console.log(data)
}
main()
