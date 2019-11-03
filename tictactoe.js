// let box=document.querySelectorAll(".box")
// // let table=document.querySelector("#table")
// let result=document.getElementById('result')
// let boxcount1=0
//
// box.forEach(el =>{
//   el.addEventListener('click',()=>{
//     el.innerHTML=''
//     const boxes=event.target.id
//
//     boxcount1++
//     console.log(boxcount1)
// if(boxcount1 %2===0){
//   el.innerHTML='o'
// }else{
//   el.innerHTML='x'
// }
//
//
// checkIfWinner()
//   })
//
// })
// function checkIfWinner(){
//   if(box[0].innerHTML==="x" && box[1].innerHTML==="x" && box[2].innerHTML==="x"){
//     result.innerHTML='win'
// }else if(box[0].innerHTML==="x" && box[3].innerHTML==="x" && box[6].innerHTML==="x"){
//     result.innerHTML='win'
// }else if(box[1].innerHTML==="x" && box[4].innerHTML==="x" && box[7].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[2].innerHTML==="x" && box[5].innerHTML==="x" && box[8].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[0].innerHTML==="x" && box[4].innerHTML==="x" && box[8].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[2].innerHTML==="x" && box[4].innerHTML==="x" && box[6].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[3].innerHTML==="x" && box[4].innerHTML==="x" && box[5].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[6].innerHTML==="x" && box[7].innerHTML==="x" && box[8].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[0].innerHTML==="o" && box[3].innerHTML==="o" && box[6].innerHTML==="o"){
//     result.innerHTML='win'
// }else if(box[1].innerHTML==="o" && box[4].innerHTML==="o" && box[7].innerHTML==="o"){
//   result.innerHTML='win'
//
// }else if(box[2].innerHTML==="o" && box[5].innerHTML==="o" && box[8].innerHTML==="o"){
//   result.innerHTML='win'
//
// }else if(box[0].innerHTML==="o" && box[4].innerHTML==="o" && box[8].innerHTML==="o"){
//   result.innerHTML='win'
//
// }else if(box[2].innerHTML==="o" && box[4].innerHTML==="o" && box[6].innerHTML==="o"){
//   result.innerHTML='win'
//
// }else if(box[3].innerHTML==="x" && box[4].innerHTML==="x" && box[5].innerHTML==="x"){
//   result.innerHTML='win'
//
// }else if(box[6].innerHTML==="x" && box[7].innerHTML==="x" && box[8].innerHTML==="x"){
//   result.innerHTML='win'
// }
// }

let box=document.querySelectorAll(".box")
const topOne=document.querySelector("#one")
const topTwo=document.querySelector("#two")
const topThree=document.querySelector("#three")
const middleOne=document.querySelector("#four")
const middleTwo=document.querySelector("#five")
const middleThree=document.querySelector("#six")
const bottomOne=document.querySelector("#seven")
const bottomTwo=document.querySelector("#eight")
const bottomThree=document.querySelector("#nine")
let result=document.querySelector('#result')
const game = {
turn: 1,
icon: "x",
counter: 0,
changePlayer: function(){
  if(this.turn %2===0){
    this.icon="o"
  }else{
    this.icon="x"
  }
  this.turn++
},
alertwin: function(){
  let childX = document.createTextNode(`${this.icon} has won`)
  result.appendChild(childX)
  setTimeout("location.reload(true);", 8000);
  box.removeEventListener('click');

// alert(`${this.icon}  Has won`)
},

checkResult: function(){
  if(topOne.textContent === topTwo.textContent && topTwo.textContent=== topThree.textContent && topOne.textContent!==""){
      this.alertwin()
      // location.reload()
  }else if (topOne.textContent === middleOne.textContent && middleOne.textContent=== bottomOne.textContent && topOne.textContent!==""){
  this.alertwin()
  // location.reload()
} else if (topTwo.textContent === middleTwo.textContent && middleTwo.textContent===bottomTwo.textContent && topTwo.textContent !==""){
  this.alertwin()
  // location.reload()
}else if (topThree.textContent === middleThree.textContent && middleThree.textContent===bottomThree.textContent && topThree.textContent !==""){
  this.alertwin()
  // location.reload()
}else if (middleOne.textContent === middleTwo.textContent && middleTwo.textContent===middleThree.textContent && middleOne.textContent !==""){
  this.alertwin()
  // location.reload()
}else if (bottomOne.textContent === bottomTwo.textContent && bottomTwo.textContent===bottomThree.textContent && bottomOne.textContent !==""){
  this.alertwin()
  // location.reload()
}else if (topOne.textContent === middleTwo.textContent && middleTwo.textContent===bottomThree.textContent && topOne.textContent !==""){
  this.alertwin()
  // location.reload()
}else if (topThree.textContent === middleTwo.textContent && middleTwo.textContent===bottomOne.textContent && topThree.textContent !==""){
  this.alertwin()
  // location.reload()
} else if(game.counter==9){
  alert("Draw")
  location.reload()
}
}
}



box.forEach(el =>{
  el.addEventListener('click',function(){
    if (this.textContent==""){
      game.changePlayer()
      let childX = document.createTextNode(game.icon)
      this.appendChild(childX)
      game.counter++
      game.checkResult()

console.log(game.counter)
    }

  })
})
