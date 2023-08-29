let div=document.getElementById('root')

let array=[{image:''},{image:''},{image:''},{image:''}]
function displayProducts(){
   



    array.map((item)=>{
        let image=document.createElement('myvideos')
        image.src=item.image
        image.style.width="150px"
        image.style.height="150px"

        div.appendChild(image)
    })
}