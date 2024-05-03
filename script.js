const URL="https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

// const men=document.querySelector("#b1");
// const women=document.querySelector("#b2");
// const kids=document.querySelector("#b3");

const btn=document.querySelector(".tab").children;


const getMen=async()=>{
    let res=await fetch(URL);
    console.log(res.status);
    let data=await res.json();
    console.log(data);
    let category=data.categories;
    console.log(category.length)
    let menProd=category[0].category_products;
    console.log(category[0].category_name);
    let shopSection=document.querySelector(".shop-section");
    shopSection.innerText='';
    console.log(shopSection);
    console.log(menProd);

    for(let i=0;i<menProd.length;i++){
        let box=document.createElement( "div" );
        box.classList.add("box");
        shopSection.appendChild(box);
        
        //Image container
        let imgContainer=document.createElement("div");
        imgContainer.classList.add("img-container");
        box.appendChild(imgContainer);

        if (menProd[i].badge_text!=null){
            let textOverlay=document.createElement("div");
            textOverlay.classList.add("text-overlay");
            imgContainer.appendChild(textOverlay);

            let para=document.createElement("p");
            para.innerText=menProd[i].badge_text;
            textOverlay.appendChild(para);
        }
        
        let image=document.createElement("img");
        image.src=menProd[i].image;
        imgContainer.appendChild(image);

        //product title container
        let prodTitle=document.createElement("div");
        prodTitle.classList.add("prodTitle");
        box.appendChild(prodTitle);

        let p1=document.createElement("p");
        prodTitle.appendChild(p1);
        p1.innerText=menProd[i].title;
        p1.style.fontWeight=600;
        p1.classList.add("titleName");

        let list=document.createElement("ul");
        prodTitle.appendChild(list);
        let item=document.createElement("li");
        list.appendChild(item);
        item.innerText=menProd[i].vendor;

        //price container
        let price=document.createElement("div");
        price.classList.add("price");
        box.appendChild(price);

        let p2=document.createElement("p");
        price.appendChild(p2);
        p2.innerText='Rs. '+menProd[i].price+'.00';

        let p3=document.createElement("p");
        price.appendChild(p3);
        p3.innerText='Rs. '+menProd[i].compare_at_price+'.00';
        p3.style.textDecoration = 'line-through';

        let p4=document.createElement("p");
        price.appendChild(p4);
        let discount= (1-(menProd[i].price/menProd[i].compare_at_price))*100;
        let finalDiscount=Math.trunc(discount);
        p4.innerText=finalDiscount+'% Off';
        p4.id='discount'

        //button
        let add= document.createElement('button'); 
        add.id='AddtoCart';
        box.appendChild(add);
        add.innerText="Add to Cart";
        


    }
    
}

const getWomen=async()=>{
    let res=await fetch(URL);
    console.log(res.status);
    let data=await res.json();
    console.log(data);
    let category=data.categories;
    console.log(category.length)
    let womenProd=category[1].category_products;
    console.log(category[0].category_name);
    let shopSection=document.querySelector(".shop-section");
    shopSection.innerText='';
    console.log(shopSection);
    console.log(womenProd);

    for(let i=0;i<womenProd.length;i++){
        let box=document.createElement( "div" );
        box.classList.add("box");
        shopSection.appendChild(box);
        
        //Image container
        let imgContainer=document.createElement("div");
        imgContainer.classList.add("img-container");
        box.appendChild(imgContainer);

        if (womenProd[i].badge_text!=null){
            let textOverlay=document.createElement("div");
            textOverlay.classList.add("text-overlay");
            imgContainer.appendChild(textOverlay);

            let para=document.createElement("p");
            para.innerText=womenProd[i].badge_text;
            textOverlay.appendChild(para);
        }
        
        let image=document.createElement("img");
        image.src=womenProd[i].image;
        imgContainer.appendChild(image);

        //product title container
        let prodTitle=document.createElement("div");
        prodTitle.classList.add("prodTitle");
        box.appendChild(prodTitle);

        let p1=document.createElement("p");
        prodTitle.appendChild(p1);
        p1.innerText=womenProd[i].title;
        p1.style.fontWeight=600;
        p1.classList.add("titleName");

        let list=document.createElement("ul");
        prodTitle.appendChild(list);
        let item=document.createElement("li");
        list.appendChild(item);
        item.innerText=womenProd[i].vendor;

        //price container
        let price=document.createElement("div");
        price.classList.add("price");
        box.appendChild(price);

        let p2=document.createElement("p");
        price.appendChild(p2);
        p2.innerText='Rs. '+womenProd[i].price+'.00';

        let p3=document.createElement("p");
        price.appendChild(p3);
        p3.innerText='Rs. '+womenProd[i].compare_at_price+'.00';
        p3.style.textDecoration = 'line-through';

        let p4=document.createElement("p");
        price.appendChild(p4);
        let discount= (1-(womenProd[i].price/womenProd[i].compare_at_price))*100;
        let finalDiscount=Math.trunc(discount);
        p4.innerText=finalDiscount+'% Off';
        p4.id='discount'

        //button
        let add= document.createElement('button'); 
        add.id='AddtoCart';
        box.appendChild(add);
        add.innerText="Add to Cart";
    } 
}

const getKids=async()=>{
    let res=await fetch(URL);
    console.log(res.status);
    let data=await res.json();
    console.log(data);
    let category=data.categories;
    console.log(category.length)
    let kidProd=category[2].category_products;
    console.log(category[2].category_name);
    let shopSection=document.querySelector(".shop-section");
    shopSection.innerText='';
    console.log(shopSection);
    console.log(kidProd);

    for(let i=0;i<kidProd.length;i++){
        let box=document.createElement( "div" );
        box.classList.add("box");
        shopSection.appendChild(box);
        
        //Image container
        let imgContainer=document.createElement("div");
        imgContainer.classList.add("img-container");
        box.appendChild(imgContainer);

        if (kidProd[i].badge_text!=null){
            let textOverlay=document.createElement("div");
            textOverlay.classList.add("text-overlay");
            imgContainer.appendChild(textOverlay);

            let para=document.createElement("p");
            para.innerText=kidProd[i].badge_text;
            textOverlay.appendChild(para);
        }
        
        let image=document.createElement("img");
        image.src=kidProd[i].image;
        imgContainer.appendChild(image);

        //product title container
        let prodTitle=document.createElement("div");
        prodTitle.classList.add("prodTitle");
        box.appendChild(prodTitle);

        let p1=document.createElement("p");
        prodTitle.appendChild(p1);
        p1.innerText=kidProd[i].title;
        p1.style.fontWeight=600;
        p1.classList.add("titleName");

        let list=document.createElement("ul");
        prodTitle.appendChild(list);
        let item=document.createElement("li");
        list.appendChild(item);
        item.innerText=kidProd[i].vendor;

        //price container
        let price=document.createElement("div");
        price.classList.add("price");
        box.appendChild(price);

        let p2=document.createElement("p");
        price.appendChild(p2);
        p2.innerText='Rs. '+kidProd[i].price+'.00';

        let p3=document.createElement("p");
        price.appendChild(p3);
        p3.innerText='Rs. '+kidProd[i].compare_at_price+'.00';
        p3.style.textDecoration = 'line-through';

        let p4=document.createElement("p");
        price.appendChild(p4);
        let discount= (1-(kidProd[i].price/kidProd[i].compare_at_price))*100;
        let finalDiscount=Math.trunc(discount);
        p4.innerText=finalDiscount+'% Off';
        p4.id='discount'

        //button
        let add= document.createElement('button'); 
        add.id='AddtoCart';
        box.appendChild(add);
        add.innerText="Add to Cart";
    } 
}






btn[0].addEventListener("click", getMen);
btn[1].addEventListener("click", getWomen);
btn[2].addEventListener("click", getKids);


