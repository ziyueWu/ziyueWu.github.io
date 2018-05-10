var image = document.querySelector('img');

image.onclick = function() {
    var imgSrc = image.getAttribute('src');
    if(imgSrc === 'images/swing1.jpeg') {
        image.setAttribute ('src','images/swing2.jpeg');
    } 
    else if(imgSrc === 'images/swing2.jpeg'){
        image.setAttribute ('src','images/swing1.jpeg');
    }
    // else if(imgSrc === 'images/code1.jpeg'){
    //     myImage.setAttribute ('src','images/code2.jpg');
    // }
    // else if(imgSrc === 'images/code2.jpeg'){
    //     myImage.setAttribute ('src','images/code1.jpg');
    // }
}