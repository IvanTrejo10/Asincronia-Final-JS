// Se devuelve una promesa que realiza la solicitud a la API 
// (endPoint)URL de la API
function loadCatImage(endPoint) { 
  return new Promise((resolve, reject) => {
// Se realizar la solicitud a la API y devuelve una promes
    fetch(endPoint)
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject({message: "Error when fetching API"});
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
// Se obtiene la imagen aleatoria de la funcion anterior
function getRandomCatImage() {
  const CatImage = document.getElementById("Cat-image");
  const endPoint = "https://cataas.com/cat";
    // Se agrega una marca de tiempo para evitar Guardar datos de la navegación
  const timestamp = new Date().getTime(); 
  // Se construye la URL de la API agregando un parámetro t 
  const randomEndpoint = `${endPoint}?t=${timestamp}`;
  // Se llama a la funcion loadCatImage(randomEndpoint)
  loadCatImage(randomEndpoint).then((response) => {
    // Si la promesa es correcta se muestra una imagen
    CatImage.src = response.url;
    // En caso contrario se registra un error
  }).catch((error) => {
    CatImage.src = "No-Image-Placeholder.jpg";
    console.log(error.message);
  });
}
