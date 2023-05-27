const figures = document.querySelectorAll('section figure');
figures.forEach(figure => figure.addEventListener('click', openPopUp));
const popup = document.querySelector('.popup')
const velo = document.querySelector('.velo')
const figcaption = document.querySelector('.velo figcaption');
const imgPopup = document.querySelector('.velo img');
const close = document.querySelector('.close')

close.addEventListener('click', closePopup);

function closePopup(event) {

    velo.style.opacity = 0;

    setTimeout(() => {
        popup.style.display = 'none';
    }, 1000);

}


function openPopUp(event) {
    //como no es un formulario ni un enlace no hay que hacer el preventDefault

    //para evitar la propagacion de eventos: 
    // event.stopPropagation();              //es una funcion que evita que el evento se propague a los hijos. siempre y cuando estos no usen el 100% del padre                                       

    let title = event.target.parentNode.dataset.title;
    let url = event.target.parentNode.dataset.url;

    popup.style.display = 'block'
    //cuando hay el display block, automaticamente se hace el transition y aunque le ponga 10segundos se esta ejecutando a la vez y no deja transicionarlo, con lo cual hay que poner un setTimeOut que retrase milesimas de segundo la carga de la transicion para que funcione.
    setTimeout(() => {

        velo.style.opacity = 1;


    }, 10); //10 milisegundos

    figcaption.textContent = title;
    imgPopup.src = url;
}


