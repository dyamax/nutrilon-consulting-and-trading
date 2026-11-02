window.addEventListener('scroll', function(){
    var navbar = this.document.querySelector('.navbar');
    var slogan = this.document.querySelector('.hs-slogan');
    var heroCards = this.document.querySelector('.hero-cards');
    navbar.classList.toggle('fixed', this.window.scrollY > 0);
    if(this.window.scrollY > 100){
        slogan.classList.remove('slogan-on-start');
        slogan.classList.add('slogan-on-scroll');
        heroCards.classList.remove('hc-on-start');
        heroCards.classList.add('hc-on-scroll');
    }else{
        slogan.classList.remove('slogan-on-scroll');
        slogan.classList.add('slogan-on-start');
        heroCards.classList.remove('hc-on-scroll');
        heroCards.classList.add('hc-on-start');
    }
})
function scrollToDiv(quality) {
    var div = document.querySelector('.ttc-1');
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToDiv1(exp) {
    var div = document.querySelector('.ttc-2');
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToDiv2(sustainability) {
    var div = document.querySelector('.ttc-3');
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToDiv3(us) {
    var div = document.querySelector('.ttc-4');
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToDiv4(innovations) {
    var div = document.querySelector('.ttc-5');
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
    }
}


// section appearing when comes into view
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const elementsToAnimate = document.querySelectorAll('.ts-trait-content');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

var centerHeroCard = document.querySelector('.hc-center');
var rightHeroCard = document.querySelector('.hc-right');
centerHeroCard.addEventListener('mouseover', function(){
    centerHeroCard.style.width = '53vh';

    rightHeroCard.style.opacity = '0';
});
centerHeroCard.addEventListener('mouseout', function(){
    centerHeroCard.style.width = '24vh';
    centerHeroCard.style.transform = 'translate(-29.3vh)';

    rightHeroCard.style.opacity = '1';
});
rightHeroCard.addEventListener('mouseover', function(){
    rightHeroCard.style.width = '53vh';

    centerHeroCard.style.opacity = '0';
});
rightHeroCard.addEventListener('mouseout', function(){
    rightHeroCard.style.width = '24vh';

    centerHeroCard.style.opacity = '1';
});