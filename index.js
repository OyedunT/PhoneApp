let Screen = document.getElementById("screen")
let darkScreen = document.getElementById("darkscreen")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let date = new Date();
let time = document.getElementById('time')
let network = document.getElementById("network")
let incr =  document.getElementById("vol")
let comb = document.getElementById("comb")
let paswordDiv = document.getElementById("pasworddiv")
let passwordCarrier= document.getElementById("passwordcarrier")
let clearBack1 = document.querySelector(".clearback1")
let wif = document.querySelector(".wif")
let sig = document.querySelector(".sig")
let bat = document.querySelector(".bat")
let ok = document.querySelector(".ok")
let digits = document.getElementById("digits");
let homePage = document.getElementById("homepage");
let menu = document.getElementById("menu")
let videoCam = document.querySelector(".videocam")
let clearBack2 = document.querySelector(".clearback2")


// ----------Screen Function----------
function toggleMode() {
    if (Screen.style.display === "") {
        Screen.style.display = "block";
        darkScreen.style.display = "none";
        comb.style.display = "flex";
        incr.style.zIndex = "1";
    } else {
        Screen.style.display = "block";
        darkScreen.style.display = "none";
    }
}
// ----------Volume Function----------
let vol = 0
function volume() {  
  vol++     
 let incr =  document.getElementById("vol")
 incr.style.height =`${vol * 10}px`
 incr.style.display = "block"
 setTimeout(() => {        
 incr.style.display = "none"
}, 20000);
incr.innerHTML = "";
} 
 
function volumee( ) {
    vol--
     let incr =  document.getElementById("vol")
     incr.style.height =`${vol * 10}px`
     incr.style.display = "block"
     setTimeout(() => {        
     incr.style.display = "none"
    }, 20000);
    incr.innerHTML = "";
    }

    // ----------Time Function----------
   
     time.innerHTML = `${date.getHours()}:${date.getMinutes()}`

    //  ----------Number Display Function----------
    function digitHolder( ) {
        if (document.getElementById("passwordcarrier").style.display = "block"){
         digits.style.display = "flex" 
         homePage.style.display = "none";
         menu.style.display = "none";
         comb.style.display = "flex";
       } else {
                 digits.style.display = "none";
       
        }         
       }
    //    ----------PasswordPinDisplay Function----------
    let passwordPinDisplay = document.getElementById("passwordpindisplay");
function del1() { 
  passwordPinDisplay.innerHTML =  passwordPinDisplay.innerHTML.slice(0, -1)      
}
// ----------Password Pin Declaration----------
let phonePassword = "555555"
let typePassword = ""

function pinner(password) {
    typePassword += password
    passwordPinDisplay.innerHTML += password
    if ( typePassword.length == 6 && typePassword !== phonePassword) {
      passwordPinDisplay.innerHTML = "Wrongpin"
      typePassword = ""
      return;
    }else if (typePassword.length == 6 && typePassword == phonePassword){
        passwordPinDisplay.innerHTML = ""
        typePassword = ""
        homePage.style.display = "block";
        menu.style.display = "flex";
        digits.style.display = "none"
        passwordCarrier.style.display = "block";
      comb.style.zIndex = "1"
      }
}
// ----------Calling Function---------
let dignumberDisplay = document.getElementById("dignumberdisplay")
let callPage = document.getElementById("callpage")
let numberHolder = document.getElementById("number_holder")
function calling() { 
    callPage.style.display = "block"
     network.style.color = "white"
     date.style.color = "white"
     passwordPinDisplay.style.color = "white"
     numberHolder.style.display = "flex"
     homePage.style.display = "none";
     
  }
  function typedDigit(dialer) {
    dignumberDisplay.innerHTML += dialer
    dignumberDisplay.style.color = "white"
    dignumberDisplay.style.fontSize = "20px"
    dignumberDisplay.style.textAlign = "center"
    dignumberDisplay.style.marginTop = "10px"
    clearBack2.style.display = "block"
    clearBack2.style.color= "white"
    videoCam.style.display = "block"
    videoCam.style.color = "white"
  }