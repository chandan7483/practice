interface Icloths{
    [key:string]:any
    }
    
    let cloths:Icloths={name:'t-shairt',color:'red',prise:200}
    console.log(cloths)
    console.log(cloths.prise)
    cloths.size="xl"
    cloths.brand='niki'
    
    interface Ihumans<T>{
    [key:string]:T
    }
    let names:Ihumans<string>={
    money:"yes i have"
    }
    let some:Ihumans<boolean>={
        money:false
        }



        