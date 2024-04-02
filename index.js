let inputbox = document.getElementById("inputbox");
let button = document.getElementById("btn");
let qrimage = document.getElementById("qrimg");
let imgBox = document.querySelector(".imgBox");

function qrgenerator() {
    if (inputbox.value.trim() !== ''){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  inputbox.value;
        imgBox.classList.add("show-img");
    }
    else {
        inputbox.classList.add('error');
        setTimeout(()=>{
            inputbox.classList.remove('error');

        },1000)
    }

}
