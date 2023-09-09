let myOriginalObj={a:'apple',b:'boll'}
console.log(myOriginalObj)

//replace bwith banana but in a copy 
data={...myOriginalObj}
data.b='banana'
console.log(data)
console.log(myOriginalObj)
