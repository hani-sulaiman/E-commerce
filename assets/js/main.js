link = 'assets/images/';
viewer = document.querySelector('#viewer-img');
button_right = document.querySelector('.right-show');
button_left = document.querySelector('.left-show');
images = document.querySelectorAll('.tabview img');

info_btn=document.querySelector('.info-btn');
brand_btn=document.querySelector('.brand-btn');
delivery_btn=document.querySelector('.delivery-btn');

images.forEach(img => {
    img.addEventListener('click', () => {
        img_src = img.src;
        viewer.src = img_src;
    });
});
var i = 0;
button_left.addEventListener('click', () => {
    if (i > 0) {
        i--;
        img = images[i];
        img_src = img.src;
        viewer.src = img_src;
    }
});
button_right.addEventListener('click', () => {
    if (i < images.length -1) {
        i++;
        img = images[i];
        img_src = img.src;
        viewer.src = img_src;
    }
});



info_btn.addEventListener('click',()=>{
   active=document.querySelector('button.active');
   active.classList.remove('active');
   info_btn.classList.add('active');

   active=document.querySelector('.content.active');
   active.classList.remove('active');
   document.querySelector('.content-1').classList.add('active');
});
brand_btn.addEventListener('click',()=>{
   active=document.querySelector('button.active');
   active.classList.remove('active');
   brand_btn.classList.add('active');

   active=document.querySelector('.content.active');
   active.classList.remove('active');
   document.querySelector('.content-2').classList.add('active');
});
delivery_btn.addEventListener('click',()=>{
   active=document.querySelector('button.active');
   active.classList.remove('active');
   delivery_btn.classList.add('active');

   active=document.querySelector('.content.active');
   active.classList.remove('active');
   document.querySelector('.content-3').classList.add('active');
});