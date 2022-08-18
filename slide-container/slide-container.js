let arrowToRight = document.getElementsByClassName('slide-container__arrow-right');
let arrowToLeft = document.getElementsByClassName('slide-container__arrow-left');
let photo = document.getElementsByClassName('slide-container__photo');

const photosArr = ["slide-container/__photo-container/1-retro-photo.jpg",
                   "slide-container/__photo-container/2-retro-photo.jpg",
                   "slide-container/__photo-container/3-retro-photo.jpg",
                   "slide-container/__photo-container/4-retro-photo.jpg",
                   "slide-container/__photo-container/5-retro-photo.jpg"
];
             
let currentPhotoId = 0;
photo[0].setAttribute("src", photosArr[currentPhotoId]);

arrowToLeft[0].addEventListener("click", function () {
    currentPhotoId++;
    if (currentPhotoId === photosArr.length) {
        currentPhotoId = 0;
    }
    photo[0].setAttribute("src", photosArr[currentPhotoId]);  
});


arrowToRight[0].addEventListener("click", function () {
    
    if (currentPhotoId === 0) {
        currentPhotoId = photosArr.length-1;
        photo[0].setAttribute("src", photosArr[currentPhotoId]);
    } else {
        currentPhotoId--;
        photo[0].setAttribute("src", photosArr[currentPhotoId]);
    }
});