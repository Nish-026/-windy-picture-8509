let product_d_h= document.getElementById("product_n");
let category_d_h=document.getElementById("category_n");
let customers_d_h=document.getElementById("customers_n");

let productNo= JSON.parse(localStorage.getItem("products"));
if(productNo==null){
    productNo=0;
}
// let userNo= JSON.parse(localStorage.getItem("users"));
// if(userNo==null){
//     userNo=0;
// }
// let UserNo= JSON.parse(localStorage.getItem("user-details"));
// userNo=UserNo.length
window.addEventListener("load",()=>{
    product_d_h.innerHTML=productNo
    // customers_d_h.innerHTML=userNo

    })
let mainSection= document.getElementById("Products_container")
let buttonSection=document.getElementById("buttons_container")
let Products=document.getElementById("products");

Products.addEventListener("click",()=>{
        fetch("https://63c79a8a075b3f3a91cf3edd.mockapi.io/products/")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            PrimersData=data;
            let N= PrimersData.length;
            localStorage.setItem("products",JSON.stringify(N))
            product_d_h.innerHTML=productNo

            let Primersobj= data.map((primer)=>({
        
                id:primer.id,
                title: primer.description,
                imageURL: primer.image,
                cost: "Rs."+primer.price
        
            }));
            console.log(Primersobj)
            renderCardList(Primersobj)
            let Add_btn=document.getElementById("add");
            Add_btn.addEventListener("click",()=>{
                buttonSection.innerHTML=null;
                mainSection.innerHTML=form;
                let productnameInput= document.getElementById("product-name")
let productimgInput= document.getElementById("product-image")
let productpriceInput= document.getElementById("product-price")
let addproductButton= document.getElementById("add-product")

addproductButton.addEventListener("click",()=>{

  let pName= productnameInput.value;
  let pImg= productimgInput.value;
  let pPrice= productpriceInput.value;

  let productObj= {
    name:pName,
    image: pImg,
    price: pPrice,
  }
  console.log(productObj);
  createProduct(pPrice);

})

function createProduct(userObj){

  fetch("https://63c79a8a075b3f3a91cf3edd.mockapi.io/products",{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(userObj),
  })
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data);
  })
}
            })
        })
    
})


let form=`
<div id="product_form">
          <div>
          <h4>Add a Product</h4>
          </div>
          <div>
          <input
            type="text"
            id="product-name"
            class="u-full-width"
            placeholder="Title"
          />
          </div>
          <div>
          <input
            type="text"
            id="product-image"
            class="u-full-width"
            placeholder="Image Url"
          />
          </div>
          <div>
          <input
            type="number"
            id="product-price"
            class="u-full-width"
            placeholder="Price"
          />
          </div>
        <div>
          <button id="add-product" class="u-full-width button button-primary">
            ADD
          </button>
        </div>
    </div>

`


///////add a product ///////////////////////////





    
    
    function renderCardList(cardData){
        let buttons=`
        <button id="add">Add a Product</button>
        <button id="delete">Delete a product</button>
        `
        let cardList=`
        <div class="card-list">
        ${cardData.map((item) =>
            getCard(
                item.id,
                item.title,
                item.imageURL,
                item.cost
             )
            ).join("")}
            </div>
        `
        buttonSection.innerHTML=buttons
        mainSection.innerHTML=cardList;
    }
    
    function getCard(id,title,imageURL,cost){
        let card=`
        <div class="card" id="Card" data-id=${id}>
        <div class="card-image">
        <img src=${imageURL} alt="food class="product_image" data-id=${id}>
        </div>
        <div class="card-body">
        <h3 class="card-item card-title">${title}</h3>
        <div class="card-item card-additional-info">${cost}</div>
        </div>
        </div>
        `;
        return card
    }
