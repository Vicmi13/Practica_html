
var navbarItems = document.getElementsByClassName('navbar-url');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function (event) {
        var sectionRedirect = this.getElementsByTagName('a')[0].href.split("#");
        console.log(sectionRedirect[0]);
        console.log(sectionRedirect[1]);
        deleteActiveClass();
        this.classList.add('active');
        
        if (sectionRedirect.length === 2) {
            event.preventDefault();
            var goTo = sectionRedirect[sectionRedirect.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function deleteActiveClass(){
   for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}


function getElementByIdAndScroll (id) {
    var elem;
    if (id === '') {
        elem = document.getElementsByClassName('header')[0];
        console.log('elemen Index' + elem);
    } else {
        console.log('elemen Header' + elem);
        elem = document.getElementById(id);
    }

    scrollToElement(elem);
}


function scrollToElement (element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);

    document.body.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, 40);
    } 
}


var acumulativeOffset = function (element) {
    var top = 0;

    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);

    return top;
}

var offsetQuienSoy = acumulativeOffset(document.getElementById('quien-soy')) - 50;
var offsetExperiencia = acumulativeOffset(document.getElementById('experiencia')) - 50;
var offsetContacto = acumulativeOffset(document.getElementById('contacto')) - 50;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);



var previous;
function changeMenuStyle(event) {
    var pageOffset = window.pageYOffset;

    if (pageOffset >= 0 && pageOffset < offsetQuienSoy) {
        if (!previous || previous !== 1) {
            previous = 1;
        } else if (previous === 1){
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href='#']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetQuienSoy && pageOffset < offsetExperiencia) {
        if (!previous || previous !== 2) {
            previous = 2;
        } else if (previous === 2){
            return false;
        }
        
        deleteActiveClass();
        document.querySelector("a[href$='quien-soy']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetExperiencia &&  offsetQuienSoy < offsetContacto) {
        if (!previous || previous !== 3) {
            previous = 3;
        } else if (previous === 3){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='experiencia']").parentNode.classList.add("active");
    }   
}