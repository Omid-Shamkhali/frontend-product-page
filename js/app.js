
let dbProducts=[
    {id:1,src:'images/1.png',name:'RuniingShoes',price:20,information:'the best shoes for runnig',detail:'Running Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {id:2,src:'images/2.png',name:'HikingShoes',price:25,information:'good for hiking',detail:'hiking Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {id:3,src:'images/3.png',name:'FootballShoes',price:59,information:'exelent shoes for football',detail:'football Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {id:4,src:'images/4.png',name:'walkingShoes',price:48,information:'perfect shoes for walking',detail:'walking Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
]
var containerElement=document.querySelector('.container')



dbProducts.forEach(function(product){

    let productDetails=containerElement.insertAdjacentHTML('afterbegin',
    `<div class="product-card">
    <h1>`+product.name+`</h1>
     <p>`+product.information+`</p>
     <div class="product-pic" style="background-image: url(`+product.src+`);"></div>
     <div class="product-info">
       <div class="product-price"> `+'$ '+ product.price +`</div>
       <a href="product.html?id=`+product.id+`" class="product-button">See More</a>
     </div>
    </div>`)

})



