// Zoom out effect on page load
window.onload = function(){
    var imgList = document.querySelectorAll("img");
    imgList.forEach(img => {
        img.style.transform = 'scale(1)';
    });
};


// Parallax Effect on Scroll
(function(){
    document.getElementById('parallax').addEventListener('wheel', parallax);
    var scale = 1;

    function parallax(e) {
        if(e.deltaY > 0 && scale <= 1.8){
            e.preventDefault();
            scale += 0.04;
        }
        else if(e.deltaY < 0 && scale >= 1.02){
            e.preventDefault();
            scale -= 0.02;
        }
        
        $effectSelector = document.querySelectorAll(".effect");
        $effectSelector.forEach(el => {
            el.style.transform = `scale(${scale})`;
        });
    }
})();