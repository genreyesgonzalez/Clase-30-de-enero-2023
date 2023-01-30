function cambiar(imagen){
    let img=document.querySelector('img'); //llamar al elemento
    let titulo=document.querySelector('#titulo');  //llama a h1 id titulo  
    img.style.width="auto";
    img.style.height="20vw"


    switch (imagen){
        case 1:  
            img.src="./img/pugcito.jpg"; //abre imagen 
            titulo.style.color="green"; //cambia color del título
            break;
        case 2:
            img.src="./img/corbata.jpg";
            titulo.style.color="red";
            break;
        case 3:
            img.src="./img/perrito.jpg";
            titulo.style.color="blue";
            break;
        default:
            alert (imagen);

    }

}