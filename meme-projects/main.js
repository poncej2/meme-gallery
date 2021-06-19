var gallery = document.querySelector('main');
var imageUrls = [ 'https://i.imgflip.com/2yhv26.jpg',
                  'https://i.kym-cdn.com/photos/images/newsfeed/001/050/449/011.jpg',
                  'https://i.imgflip.com/1ih6nz.jpg?a450768',
                  'https://pics.me.me/confused-face-meme-imgurl-53443930.png',
                  'https://i.stack.imgur.com/mQP9W.jpg',
                  'https://i.imgflip.com/3m3xj2.png'
                ];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  //console.log(imageUrlInput.value);
  if(imageUrlInput.value !== '') {
  imageUrls.push(imageUrlInput.value);
}
 imageUrlInput.value ='';
 updateGallery();
});

function updateGallery(){
  gallery.innerHTML='';
    for (var i = 0; i < imageUrls.length; i++) {
var imageElement= document.createElement('img');
imageElement.className='gallery-image';
imageElement.src=imageUrls[i];
//console.log(imageElement);
gallery.appendChild(imageElement);
}}
updateGallery();
