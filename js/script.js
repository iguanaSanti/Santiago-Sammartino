const imagesEt = [
    'images/et.png',
    'images/et2.png',
    'images/et3.png'
];
const imagesPint = [
    'images/pint.png',
    'images/pint2.png'
];
const imagesTarje = [
    'images/tarje.png',
    'images/tarje2.png'
];
const imagesPlay = [
    'images/playa.png',
    'images/playa2.png'
];

let conta1 = 0;
let conta2 = 0;
let conta3 = 0;
let conta4 = 0;
const elementoEt = document.getElementById('et');
const elementoPint = document.getElementById('pint');
const elementoTarje = document.getElementById('tarje');
const elementoPlaya = document.getElementById('playa');


function changeImage(elemento, fotos, conta) {
    conta = (conta + 1) % fotos.length;
    elemento.style.opacity = 0;
    setTimeout(() => {
        elemento.src = fotos[conta];
        elemento.style.opacity = 1;
    }, 1000);
    return conta;
}

setInterval(() => {
    conta1 = changeImage(elementoEt, imagesEt, conta1);
}, 4000);
setInterval(() => {
    conta2 = changeImage(elementoPint, imagesPint, conta2);
}, 3000);
setInterval(() => {
    conta3 = changeImage(elementoTarje, imagesTarje, conta3);
}, 3500);
setInterval(() => {
    conta4 = changeImage(elementoPlaya, imagesPlay, conta4);
}, 4500);


//////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelectorAll('.overlay');
    const play = document.getElementById("playa");
    const ovPlay = document.getElementById("ov-playa");
    const pint = document.getElementById("pint");
    const ovPint = document.getElementById("ov-pint");
    const tarje = document.getElementById("tarje");
    const ovTarje = document.getElementById("ov-tarje");
    const et = document.getElementById("et");
    const ovEt = document.getElementById("ov-et");


    ///
    play.addEventListener("click", function () {
        ovPlay.style.display = 'flex';
    });

    ovPlay.addEventListener("click", function (event) {
        if (event.target === ovPlay) {
            ovPlay.style.display = 'none';
        }
    });




    //////
    pint.addEventListener("click", function () {
        ovPint.style.display = 'flex';
        ovPint.style.justifyContent = 'space-evenly';
        ovPint.style.flexWrap = 'wrap';
    });

    ovPint.addEventListener("click", function (event) {
        if (event.target === ovPint) {
            ovPint.style.display = 'none';
        }
    });



    /////
    tarje.addEventListener("click", function () {
        ovTarje.style.display = 'flex';
        ovTarje.style.justifyContent = 'space-evenly';
        ovTarje.style.flexWrap = 'wrap';
    });

    ovTarje.addEventListener("click", function (event) {
        if (event.target === ovTarje) {
            ovTarje.style.display = 'none';
        }
    });



    /////
    et.addEventListener("click", function () {
        ovEt.style.display = 'flex';
        ovEt.style.justifyContent = 'space-evenly';
        ovEt.style.flexWrap = 'wrap';
    });

    ovEt.addEventListener("click", function (event) {
        if (event.target === ovEt) {
            ovEt.style.display = 'none';
        }
    });


    /////
    const imaPecPin = document.querySelectorAll(".imaPecPin");
    const imaGranPin = document.getElementById('imaGranPin');
    imaPecPin.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            imaGranPin.src = this.src;
        });
    });

    const imaPecTar = document.querySelectorAll(".imaPecTar");
    const imaGranTar = document.getElementById('imaGranTar');
    imaPecTar.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            imaGranTar.src = this.src;
        });
    });

    const imaPecEt = document.querySelectorAll(".imaPecEt");
    const imaGranEt = document.getElementById('imaGranEt');
    imaPecEt.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            imaGranEt.src = this.src;
        });
    });
});

//////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const thumbnail = document.getElementById("cv");
    const overlay = document.getElementById("overlay");
    const fullImage = document.getElementById("fullImage2");

    thumbnail.addEventListener("click", function () {
        fullImage.src = this.src;
        overlay.style.display = "flex";
    });

    // Cerrar el overlay al hacer clic fuera de la imagen ampliada
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});



/*
function resaltar(nave, tit) {
    const container = document.getElementById(nave);
    const highlightableText = document.getElementById(tit);
    container.addEventListener("mouseover", function () {
        highlightableText.classList.add("resaltar");
    });

    container.addEventListener("mouseout", function () {
        highlightableText.classList.remove("resaltar");
    });

}

document.addEventListener("DOMContentLoaded", function () {
    resaltar('yo-nav', 'yo-tit');
    resaltar('trabajos-nav', 'trabajos-tit');
    resaltar('formacion-nav', 'formacion-tit');
});
/*
var contactoNav = document.getElementById('contacto-nav')
var contactoTit = document.getElementById('contacto-nav')*/

//////////////////////////////////////////*//////////////////////////////////

/*document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const overlay = document.getElementById("overlay");
    const fullImage = document.getElementById("fullImage");

    thumbnails.forEach(function (thumbnail) {
        // Inicializa data-original-src con el src inicial
        thumbnail.dataset.originalSrc = thumbnail.src;

        thumbnail.addEventListener("click", function () {
            // Usa data-original-src en lugar de src directamente
            const originalSrc = thumbnail.dataset.originalSrc;
            if (originalSrc) {
                fullImage.setAttribute('src', originalSrc);
                overlay.style.display = 'flex';
            } else {
                console.error('Error: La fuente de la imagen es undefined.');
            }
        });
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});*/


/*
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 7,
            "random": true,
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            }
        }
    }
});
*/