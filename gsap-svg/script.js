let initialPath='M 10 100 Q 500 100 990 100'
let finalPath='M 10 100 Q 500 100 990 100'
 
let string=document.querySelector("#string")

string.addEventListener("mousemove",(e)=>{
 initialPath=`M 10 100 Q 500 ${e.y} 990 100`
 console.log(initialPath)
    gsap.to("svg path",{
        attr:{
            d:initialPath,
            duration:0.3,
            ease:"power3.out"
        }
    })
})
string.addEventListener("mouseleave",(e)=>{
    console.log(finalPath)
       gsap.to("svg path",{
           attr:{
               d:finalPath
           }
       })
   })