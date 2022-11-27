const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const num = [1,2,3,4,5,6,7,8,9]
const sym = []

for(let x = 0; x < characters.length; x++){
    if (characters[x] in num){

    }
    else{
        sym.push(characters[x])
    }
}

let first = document.getElementById("first")
let second = document.getElementById("second")
let length = document.getElementById("input")

let result = document.getElementById("target")
console.log(result)
let test = []

function generate(value){

    value = length.value
    size = Number(value)

    first.textContent = ""
    second.textContent = ""
    if(result.value =="Both"){

        test = characters

    }
    else if (result.value=="Symbol"){
        test = sym

    }
    else{

        test = num
    }
    for(let i = 0; i<size;i++){
        let value = Math.floor(Math.random()*test.length)
        first.textContent += test[value]
        
        
    }
    
    for(let i = 0; i< size;i++){
        let value = Math.floor(Math.random()*test.length)
        second.textContent += test[value]
        
        
    }
    
    
}

function cp(){

  navigator.clipboard.writeText(first.textContent);

  
 
    
}
function cp2()
{
    navigator.clipboard.writeText(second.textContent);

}
