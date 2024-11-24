const apiKey = '853ac98bcc4f4278931004f32452d494';
const country = 'mx';
//Se establece el end point de News API
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

//funcion para obtener noticias

async function obtenerNoticias(){
    try{
        //Realizamos una solicitud, response, al servicio
        //Guardaremos el objeto response en la constante reponse
        const response = await fetch(url);
        if(response.status = 'ok'){
            console.dir(response);
        }else{
            console.log('Hubo un error al cargar las noticias');
        }

    }catch(error){
        console.error('Error en la solicitud', error)
    }
}
obtenerNoticias();
