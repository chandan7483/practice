//import {MongoClient}from'mongodb'
//let MyAddress='mongodb://127.0.0.1:27017'
//let client=new MongoClient(MyAddress)

//let dbname='chandan'
//to run code ts-node filename.ts this will run the code without converting the ts file into js file
async function main(){
await client.connect()
console.log('success')
let db=client.db(dbname)
let collection=db.collection('student')
await collection.insertOne({name:'nishchay',character:'laati'})
console.log('laati charge')
}
main()



