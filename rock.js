let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

//redDiv.onclick = ( )=>{
  //   console.log('red')
    // }


//yellowDiv.onclick = ( )=> console.log('yellow')
//greenDiv.onclick = ( )=> console.log('green')


const square =document.querySelectorAll('.color')
console.log(square)

//console.log(square[0].value)


//FOREACH
const times={
    'red':0, 'yellow':0, 'green':0
}
square.forEach(square =>{ 
   square.onclick= ()=> {
    times[square.value]+= 1
    square.innerText = times[square.value]
   }
   
   //console.log(square.value)
})


function clear(){
    times.red=0
    times.green=0
    times.yellow=0
    square.forEach(square=> square.innerText='0')
}

const CLEARGAMEbtn= document.getElementById('clear-')
CLEARGAMEbtn.onclick=()=>clear()



