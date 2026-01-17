let dbProducts=[
    {id:1,src:'images/1.png',name:'RuniingShoes',price:20,information:'the best shoes for runnig',detail:'Running Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {id:2,src:'images/2.png',name:'HikingShoes',price:25,information:'good for hiking',detail:'hiking Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {id:3,src:'images/3.png',name:'FootballShoes',price:59,information:'exelent shoes for football',detail:'football Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {id:4,src:'images/4.png',name:'walkingShoes',price:48,information:'perfect shoes for walking',detail:'walking Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
]


let btnBack=document.querySelector('button')
btnBack.addEventListener('click',function(){
  history.back()
})

let locationsearch=location.search
let locationSerachParam=new URLSearchParams(locationsearch)
let newlocationParam=locationSerachParam.get('id')

let singleProductDelatil=dbProducts.find(function(produc){
    return produc.id==newlocationParam
})


let nameProductElem=document.querySelector('h1')
let detailProductElem=document.querySelector('p')
let imgProductElem=document.querySelector('img')

nameProductElem.innerHTML=singleProductDelatil.name
detailProductElem.innerHTML=singleProductDelatil.detail
imgProductElem.src=singleProductDelatil.src




