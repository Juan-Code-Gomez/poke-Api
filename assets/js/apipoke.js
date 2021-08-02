// URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la API
const getData =(api) =>{
    return fetch(api)
    .then((response) => response.json())
    .then((json) => {
        llenarDatos(json.results),
          console.log(json.results);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
}

//Dibujar CARDS de personajes
const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 18rem;">';
        html += `<img src="" class="card-img-top" alt="">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
}

//Se ejecuta la API
getData(API);