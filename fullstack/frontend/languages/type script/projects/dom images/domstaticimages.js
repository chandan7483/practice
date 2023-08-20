let div=document.getElementById('root')

let array=[{image:'./1.jpg'},{image:'./2.jpg'},{image:'./3.jpg'},{image:'./4.jpg'},{image:'./5.jpg'},{image:'./6.jpg'},{image:'./7.jpg'},{image:'./8.jpg'},{image:'./9.jpg'},{image:'./10.jpg'}]
function displayProducts(){
   



    array.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="150px"
        image.style.height="150px"

        div.appendChild(image)
    })
}