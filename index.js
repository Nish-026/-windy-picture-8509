 //   <!-- Image slider single image1-->

let lh_img_slider_img1=[

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673808301_lotus-herbal_radiance-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673874505_m-a-c_mini-sizes-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673707443_the-derma-co_night-serum-gel-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673762989_pilgrim_toners-2596x836.jpeg"
]

window.addEventListener("load", function(){
    start();
})

let i=0;

function start(){

    let images= lh_img_slider_img1;
    let main= document.getElementById("lh_img_slider1")


    let img = document.createElement("img")
     if(i==images.length){
        i=0;
     }
     img.src=images[i]
     main.append(img)
     i++;

     setInterval(function(){
        if(i>=images.length){
            i=0;
        }
        main.innerText=null;
        let img =document.createElement("img")
        img.src=images[i]
        main.append(img)
        i++;
     }, 3000)
    
}

//   <!-- Image slider single image2-->


let lh_img_slider_img2=[

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673858749_nature-essence_facewashes-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673859140_livon-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673682395_ikonic-professional_perfect-straighteners-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673682395_ikonic-professional_perfect-straighteners-2596x836.jpeg"
]

window.addEventListener("load", function(){
    big();
})

let j=0;

function big(){

    let images = lh_img_slider_img2;
    let main = document.getElementById("lh_img_slider2")


    let img = document.createElement("img")
     if(j==images.length){
        j=0;
     }
     img.src=images[j]
     main.append(img)
     j++;

     setInterval(function(){
        if(j>=images.length){
            j=0;
        }
        main.innerText=null;
        let img =document.createElement("img")
        img.src=images[j]
        main.append(img)
        j++;
     }, 3000)
    
}



// //   <!-- Image slider single image3-->


let lh_img_slider_img3=[

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673639869_web_hp.jpg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673761948_i-dew-care_web_hp.gif?tr=f-gif",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673862853_rire_web_hp.gif?tr=f-gif",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673862759_round-lab_web_hp.gif?tr=f-gif"
]

window.addEventListener("load", function(){
    fun();
})

let k=0;

function fun(){

    let images = lh_img_slider_img3;
    let main = document.getElementById("lh_img_slider3")


    let img = document.createElement("img")
     if(k==images.length){
        k=0;
     }
     img.src=images[k]
     main.append(img)
     k++;

     setInterval(function(){
        if(k>=images.length){
            k=0;
        }
        main.innerText=null;
        let img =document.createElement("img")
        img.src=images[k]
        main.append(img)
        k++;
     }, 3000)
    
}


// //   <!-- Image slider single image4-->




let lh_img_slider_img4=[

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673874833_vaseline-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673874049_streax-streax-professional-combined-2596x836.jpeg",

    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673863199_colorbar_webhp.gif?tr=f-gif",
    
    "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673725786_bajaj_cocnut-oil-2596x836.jpeg"

]

window.addEventListener("load", function(){
    hello();
})

let x=0;

function hello(){

    let images = lh_img_slider_img4;
    let main = document.getElementById("lh_img_slider4")


    let img = document.createElement("img")
     if(x==images.length){
        x=0;
     }
     img.src=images[x]
     main.append(img)
     x++;

     setInterval(function(){
        if(x>=images.length){
            x=0;
        }
        main.innerText=null;
        let img =document.createElement("img")
        img.src=images[x]
        main.append(img)
        x++;
     }, 3000)
    
}


// //   <!-- Image slider single image5-->


let lh_img_slider_img5=[

    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673610417_paisa-vasool.png",

    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673610409_birthday.png",

    "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673610403_rewards.png",

]

window.addEventListener("load", function(){
    hii();
})

let m=0;

function hii(){

    let images = lh_img_slider_img5;
    let main = document.getElementById("lh_img_slider5")


    let img = document.createElement("img")
     if(m==images.length){
        m=0;
     }
     img.src=images[m]
     main.append(img)
     m++;

     setInterval(function(){
        if(m>=images.length){
            m=0;
        }
        main.innerText=null;
        let img =document.createElement("img")
        img.src=images[m]
        main.append(img)
        m++;
     }, 3000)
    
}




