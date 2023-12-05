let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let incr =  document.getElementById("vol")
let darkScreen = document.getElementById("darkscreen")
let lockscreen = document.getElementById("lockscreen")
let passwordpage = document.getElementById("password")
let homepage = document.getElementById("homepage")
let comb = document.getElementById("comb")
let network = document.getElementById("network")
let passwordcarrier=document.getElementById("passwordcarrier")
let datetime = document.getElementById("datetime");
let digits = document.getElementById("digits");
let search = document.getElementById("search-container")
let videoCam = document.querySelector(".videocam")
let clearBack2 = document.querySelector(".clearback2")
let ok = document.querySelector(".ok")



// ----------DarkScreen Function----------
function toggleMode() {
    if (lockscreen.style.diplay=""){
        lockscreen.style.diplay="block"
        darkScreen.style.display = "none";
        passwordpage.style.display = "none"
        datetime.style.display = "none";
        comb.style.display = "flex";
        incr.style.zIndex = "1";
    } else {
        lockscreen.style.display = "block";
        darkScreen.style.display = "none";
        datetime.style.display = "block";
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
   
    function updateDateTime() {
        let now = new Date();
  
        let date = now.getDate();
        let dayOfWeek = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(now);
        let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(now);
  
        let hours = now.getHours();
        let minutes = now.getMinutes();
  
        document.getElementById('dayOfWeek').innerHTML = `${dayOfWeek}`;
        document.getElementById('month').innerHTML = `${month}`;
        document.getElementById('date').innerHTML = ` ${date}`;
        document.getElementById('time').innerHTML = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      }
  
      setInterval(updateDateTime, 1000);
  
      updateDateTime();


    //   ---------Lock Screen-------------

    function toggleLockscreen() {
        let lockscreen = document.getElementById("lockscreen");
        let passwordpage = document.getElementById("password");
        let datetime = document.getElementById("datetime");

        if (lockscreen.style.display === "block") {
            lockscreen.style.display = "none";
            passwordpage.style.display = "block";
            datetime.style.display = "none";
            digits.style.display = "flex"
        } else {
            lockscreen.style.display = "block";
            passwordpage.style.display = "none";
            datetime.style.display = "block";
        }
    }

    function digitHolder() {
        
        toggleLockscreen(); 
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
        passwordpage.style.display = 'none';
        homepage.style.display = "block";
        datetime.style.display = "block"
        digits.style.display = "none"
        search.style.display = "block"
        passwordCarrier.style.display = "block";
      comb.style.zIndex = "1"
      }
}
 
 // ----------Time Function2----------
//  function displayTime() {
//     let homepage = document.getElementById('homepage');
//     let timeInfo = document.getElementById('timeInfo');

//     // Check if homepage is visible
//     if (homepage.style.display === 'block') {
//         // Display time
//         let currentTime = new Date();
//         let hours = currentTime.getHours();
//         let minutes = currentTime.getMinutes();
//         let seconds = currentTime.getSeconds();

//         // Add leading zero if needed
//         hours = (hours < 10) ? "0" + hours : hours;
//         minutes = (minutes < 10) ? "0" + minutes : minutes;
//         seconds = (seconds < 10) ? "0" + seconds : seconds;

//         let formattedTime = hours + ":" + minutes + ":" + seconds;
//         timeInfo.textContent = formattedTime;

//         // Update time every second
//         setTimeout(displayTime, 1000);
//     } else {
//         // If homepage is not visible, stop updating the time
//         timeInfo.textContent = ""; // Clear the time display
//     }
// }

// // Call the function to start displaying time
// displayTime();


let cam = document.getElementById("cam");
async function displayCam() {
    homePage.style.display = "none";
    darkScreen.style.display = "none";
    cam.style.display = "block ";
  await navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
    cam.srcObject = stream
 


   })
   .catch(error=>{
    alert("Error accessing camera:", error)
   })

 }
