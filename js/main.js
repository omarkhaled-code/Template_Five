//check if there 's local storage color option 
let mainColors = localStorage.getItem("color_option")
if (mainColors !== null) {
    document.documentElement.style.setProperty('--min-color', mainColors)

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active")
        if (element.dataset.color === mainColors) {
            element.classList.add("active")
        }
    })
}
let backgourndOption = true;

//Variable to Cotrol The Interval
let backIntervalVal;

const colorLi = document.querySelectorAll(".colors-list li")

colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--min-color', e.target.dataset.color)

        localStorage.setItem("color_option", e.target.dataset.color)
        //remove active from  ALl li 
        handleAddActive(e)
    })
})
//////////////////// change backgournd image 
let landingpage = document.querySelector(".landing-page")
imgAr = [
    "../img/night.jpg",
    "../img/moon.jpg",
    "../img/night\ between\ mountains.jpg",
    "../img/sahra.jpg",
    "../img/magic-world.jpg",
    "img/imgs/1.jpg",
    "img/imgs/2.jpg",
    "img/imgs/3.jpg",
    "img/imgs/4.jpg",
    "img/imgs/5.jpg"]


function randomImg() {
    if (backgourndOption === true) {

        backIntervalVal = setInterval(() => {
            let myimg = document.getElementById("img")

            my_random = Math.floor(Math.random() * imgAr.length)
            myimg.src = imgAr[my_random]

        }, 10000)

    }
}

randomImg()
///////////////////////
let localbg = localStorage.getItem("option_Bg_Ra");

if (localbg !== null) {
    document.querySelectorAll(".bgchange span").forEach(element => {
        element.classList.remove("active")
    })
    if (localbg === "true") {
        backgourndOption = true;
        document.querySelector(".bgchange .yes").classList.add("active")
    } else {
        backgourndOption = false;
        clearInterval(backIntervalVal)
        document.querySelector(".bgchange .no").classList.add("active")
    }


}
///////////////////////

const bgswitch = document.querySelectorAll(".bgchange span")
bgswitch.forEach(span => {

    span.addEventListener("click", (e) => {
        //remove active from  ALl li And Add active  
        handleAddActive(e)

        if (e.target.dataset.background === "yes") {
            backgourndOption = true;
            randomImg()

            localStorage.setItem("option_Bg_Ra", true)
        } else {
            backgourndOption = false;
            clearInterval(backIntervalVal)
            localStorage.setItem("option_Bg_Ra", false)

        }
    })
})
//////////////////// change backgournd image 

document.querySelector(".setting-icon").onclick = () => {
    document.querySelector(".icon-gear").classList.toggle("rotate")
    document.querySelector(".settings-box").classList.toggle("open")
}
// Data Progress

let ourSkills = document.querySelector(".skills")

window.onscroll = () => {
    let skillsOfsetTop = ourSkills.offsetTop; // 999
    //Outer Height
    let skillsOutrHeight = ourSkills.offsetHeight; //380

    let windowHeight = this.innerHeight;// 657
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOfsetTop + skillsOutrHeight - windowHeight)) {
        let allskills = document.querySelectorAll(".skill-box .skill-progress span")
        allskills.forEach(skill => {
            skill.classList.remove("hidden")
        })
    } else {
        let allskills = document.querySelectorAll(".skill-box .skill-progress span")
        allskills.forEach(skill => {
            skill.classList.add("hidden")
        })
    }
}


//Creat Poup With The Image
let ourGallery = document.querySelectorAll(".gallery img")
ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {
        //Create Overlay Elemnt
        let overlay = document.createElement("div")
        overlay.className = 'popup-overlay'
        document.body.appendChild(overlay)
        //creat popup
        let popupBox = document.createElement("div")
        popupBox.className = 'popup-box';
        //if condition
        if (img.alt !== null) {
            let imageHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt)
            imageHeading.appendChild(imgText);
            popupBox.appendChild(imageHeading);

        }
        ///creat the image
        let popupImage = document.createElement("img");
        // Set image src
        popupImage.src = img.src;
        //add imgae to popup box
        popupBox.appendChild(popupImage);
        //apend to the body 
        document.body.appendChild(popupBox)
        //create the close span
        let closeButton = document.createElement("span")

        let closeButtonText = document.createTextNode("X")

        closeButton.appendChild(closeButtonText)

        closeButton.className = 'close-button'

        popupBox.appendChild(closeButton)

    })
})
document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
        //remove the current popup
        e.target.parentNode.remove()
        document.querySelector(".popup-overlay").remove()
    }

})


///handle active function 
function handleAddActive(e) {
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")
    })
    e.target.classList.add("active")
}

////
// select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet")
const allLinks = document.querySelectorAll(" .links a")


function scrollToElement(element) {
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
scrollToElement(allBullets)
scrollToElement(allLinks)

let bulletsSapn = document.querySelectorAll(".set-bullets span")
let bulletsContainer = document.querySelector(".nav-bullets")
let bulletLocalItem = localStorage.getItem("bullets_option")

if (bulletLocalItem !== null) {
    bulletsSapn.forEach(span => {

        span.classList.remove("active")

    })
    if (bulletLocalItem === 'block') {
        bulletsContainer.style.display = "block"
        document.querySelector(".set-bullets .yes").classList.add("active")
    } else {
        bulletsContainer.style.display = "none"
        document.querySelector(".set-bullets .no").classList.add("active")
    }
}


bulletsSapn.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'show') {
            bulletsContainer.style.display = "block"
            localStorage.setItem("bullets_option", 'block')
        } else {
            bulletsContainer.style.display = "none"
            localStorage.setItem("bullets_option", 'none')
        }
        handleAddActive(e)
    });
});

document.querySelector(".reset-btn").onclick = function () {
    localStorage.removeItem("color_option");
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("option_Bg_Ra");
    window.location.reload();
};
////////////////////////// TOOGLE MENU  
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    e.stopPropagation()

    this.classList.toggle("menu-active")

    tLinks.classList.toggle("open")
}

document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== tLinks) {
        toggleBtn.classList.remove("menu-active")
        tLinks.classList.remove("open")
    }
})

/// classList.contains  يحتوي 
///stop prop
tLinks.onclick = function (e) {
    e.stopPropagation()
}