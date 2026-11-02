window.addEventListener('scroll', function(){
    var heroPict = this.document.querySelector('.hpp');
    var hcfa = this.document.querySelector('.filler-about');
    var hcfst = this.document.querySelector('.filler-send-to');
    var hcf1 = this.document.querySelector('#hcf1');
    var hcf2 = this.document.querySelector('#hcf2');
    var hcf3 = this.document.querySelector('#hcf3');
    var scrolledTitle = document.querySelector('.main');

    if(this.window.scrollY > 0){
        hcfa.classList.remove('fill-top-start');
        hcfa.classList.add('fill-top-scroll');
        hcfst.classList.remove('fill-top-start');
        hcfst.classList.add('fill-top-scroll');
        
        hcf1.classList.remove('hfd-start');
        hcf1.classList.add('hfd-scroll');
        hcf2.classList.remove('hfd-start');
        hcf2.classList.add('hfd-scroll2');
        hcf3.classList.remove('hfd-start');
        hcf3.classList.add('hfd-scroll3');
    }else{
        hcfa.classList.remove('fill-top-scroll');
        hcfa.classList.add('fill-top-start');
        hcfst.classList.remove('fill-top-scroll');
        hcfst.classList.add('fill-top-start');
        
        hcf1.classList.remove('hfd-scroll');
        hcf1.classList.add('hfd-start');
        hcf2.classList.remove('hfd-scroll2');
        hcf2.classList.add('hfd-start');
        hcf3.classList.remove('hfd-scroll3');
        hcf3.classList.add('hfd-start');
    };

    if(this.window.scrollY > 1000){
        heroPict.classList.remove('hp-started');
        heroPict.classList.add('hp-scrolled');

        scrolledTitle.classList.remove('st-hsp-start');
        scrolledTitle.classList.add('st-hsp-end');
    }else{
        heroPict.classList.remove('hp-scrolled');
        heroPict.classList.add('hp-started');
        
        scrolledTitle.classList.remove('st-hsp-end');
        scrolledTitle.classList.add('st-hsp-start');
    }
});

window.addEventListener('scroll', function() {
    const image = document.getElementById('growingImage');

    // Get the scroll position
    const scrollY = window.scrollY;

    // Calculate the new width based on the scroll position
    const newWidth = 300 + scrollY * 0.5;

    // Calculate the new position based on the scroll position
    const newYPosition = scrollY * -0.2; // Moves the image slightly up

    // Set the new width and position
    image.style.width = newWidth + 'px';
    image.style.transform = `translate(-50%, ${newYPosition}px)`;
});