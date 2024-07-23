
const slideLeft = document.querySelector(".slide-left");
const slideRight  = document.querySelector(".slide-right");



const sliderContainer = document.getElementById("slider-images");

sliderImages.forEach(imgSrc =>{
  const img = document.createElement('img');
  img.classList.add('header-img');
  img.src = imgSrc;

  sliderContainer.appendChild(img);

});

const imgs = document.querySelectorAll('.header-img');
 
let n = 0;

function changeSlide(){
  for(let i = 0 ; i<imgs.length;i++){
    imgs[i].style.display = 'none'
  }
  imgs[n].style.display = 'block'
}

changeSlide();

slideLeft.addEventListener('click',(e)=>{
  e.preventDefault();

  if(n > 0){
    n--;
  }else{
    n = imgs.length -1;
  }
  changeSlide();
});


slideRight.addEventListener('click',(e)=>{
  e.preventDefault();
  if(n<imgs.length -1){
    n++;
  }else{
    n = 0;
  }
  changeSlide();
});


/* 2nd row js */





const boxRow = document.querySelector('.box-row');

boxRow.innerHTML = data.map(x => {
  let { title, items, linkText } = x;
  return `
    <div class="box-cols">
      <h3>${title}</h3>
      <div class="colm-div">
        <div>
          <img src="${items[0].src}" width="130px" alt="">
          <p>${items[0].text}</p>
        </div>
        <div>
          <img src="${items[1].src}" width="130px" alt="">
          <p>${items[1].text}</p>
        </div>
      </div>
      <div class="colm-div colmn-2div">
        <div>
          <img src="${items[2].src}" width="130px" alt="">
          <p>${items[2].text}</p>
        </div>
        <div>
          <img src="${items[3].src}" width="130px" alt="">
          <p>${items[3].text}</p>
        </div>
      </div>
      <a href="#" class="a-tag">${linkText}</a>
    </div>
  `;
}).join("");

/* 3rd row js */



/* 4th row javascript */



const imgProductDiv = document.querySelector('.img-product-div');

const h2tag = document.createElement('h2');
h2tag.textContent = fourthImgSrc.title;
imgProductDiv.appendChild(h2tag);


const products = document.createElement('div');
products.classList.add('products');


fourthImgSrc.images.forEach(imgSrc =>{
  const ImgTag = document.createElement('img');
  ImgTag.src = imgSrc;
  products.appendChild(ImgTag);
  imgProductDiv.appendChild(products);
});








const scrollContainer = document.querySelectorAll(".products");

for(const item of scrollContainer){
  item.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}









/* finish the 4th row  */



const sixthContainer =  document.querySelector('.sixth-container');

sixthRowData.forEach((data) => {
  const singleImg = document.createElement('div');
  singleImg.classList.add("single-img");

  const h3Tag = document.createElement('h3');
  h3Tag.textContent = data.title;
  singleImg.appendChild(h3Tag);

  const ImgTag = document.createElement('img');
  ImgTag.src = data.imgSrc;
  singleImg.appendChild(ImgTag);

  const aTag = document.createElement('a')
  aTag.textContent = data.linkText;
  singleImg.appendChild(aTag);

  sixthContainer.appendChild(singleImg)
});








