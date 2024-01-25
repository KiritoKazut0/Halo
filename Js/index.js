
function cambiarFondo(imagen) {
    var section = document.querySelector('.section');
    if (imagen === '1'){
    
        section.style.backgroundImage = `url('../Assets/image-p.jpg')`;
    }
    else if (imagen === '2') {
        section.style.backgroundImage = `url('../Assets/image1.jpg')`;
    } else if (imagen === '3') {
        section.style.backgroundImage = `url('../Assets/image2.jpg')`;
    } else if (imagen === '4') {
        section.style.backgroundImage = `url('../Assets/image3.jpg')`;
    }
}