var root = document.querySelector(':root');

// sidebar
const menuItems = document.querySelectorAll(".menu-item");

// messages
const notoficationsMessage = document.querySelector("#massages-notifications");
const messages = document.querySelector(".messages");

const message = messages.querySelectorAll(".message");
const searchBox = document.querySelector("#massege-search");

// theme
const theme = document.querySelector('#theme')
const themeModale = document.querySelector('.customize-theme')
const fontsize = document.querySelectorAll('.choose-size span');

const chooseColor = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

menuItems.forEach((items) => {
  items.addEventListener("click", () => {
    for (let a = 0; a < menuItems.length; a++) {
      menuItems[a].classList.remove("active");
    }
    items.classList.add("active");
    if (items.id != "notofications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";

      document.querySelector(
        "#notofications .notifications-count"
      ).style.display = "none";
    }
  });
});

// messages

notoficationsMessage.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  notoficationsMessage.querySelector(".notifications-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// search bar

searchBox.addEventListener("keyup", () => {
  const valueBox = searchBox.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    console.log(name);
    if (name.indexOf(valueBox) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
});


// theme changer

theme.addEventListener('click' , ()=>{
    themeModale.style.display = 'grid';
})

themeModale.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModale.style.display = 'none';
    }
})

// font

fontsize.forEach(font=>{
    let valueFontSize;
    font.addEventListener('click',()=>{
        for (let b = 0; b < fontsize.length; b++) {
            fontsize[b].classList.remove('active')
        }
        font.classList.add('active')

        if(font.classList.contains('font-size-1')){
            valueFontSize = '10px';
            root.style.setProperty('--sticky-top-left' , '5.4rem')
            root.style.setProperty('--sticky-top-right' , '5.4rem')
        }
        else if(font.classList.contains('font-size-2')){
            valueFontSize = '13px';
            root.style.setProperty('--sticky-top-left' , '5.4rem')
            root.style.setProperty('--sticky-top-right' , '-7rem')
        }
        else if(font.classList.contains('font-size-3')){
            valueFontSize = '16px';
            root.style.setProperty('--sticky-top-left' , '-2rem')
            root.style.setProperty('--sticky-top-right' , '-17rem')
        }
        else if(font.classList.contains('font-size-4')){
            valueFontSize = '19px';
            root.style.setProperty('--sticky-top-left' , '-5rem')
            root.style.setProperty('--sticky-top-right' , '-25rem')
        }
        else if(font.classList.contains('font-size-5')){
            valueFontSize = '22px';
            root.style.setProperty('--sticky-top-left' , '-12rem')
            root.style.setProperty('--sticky-top-right' , '-35rem')
        }

        document.querySelector('html').style.fontSize = valueFontSize;
    })

})



// color

chooseColor.forEach(color =>{
    color.addEventListener('click',()=>{
        for (let c = 0; c < chooseColor.length; c++) {
            chooseColor[c].classList.remove('active');
        }
        color.classList.add('active');

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--color-primary-hue' , primaryHue)
    })
})

// background

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = ()=>{
    root.style.setProperty('--light-color-lightness' , lightColorLightness)
    root.style.setProperty('--white-color-lightness' , whiteColorLightness)
    root.style.setProperty('--dark-color-lightness' , darkColorLightness)
}

bg1.addEventListener('click',()=>{
    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    
    window.location.reload();
})


bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    lightColorLightness = '20%';
    whiteColorLightness = '15%';

    bg2.classList.add('active')
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBg();
})

bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '5%';

    bg3.classList.add('active')
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBg();
})