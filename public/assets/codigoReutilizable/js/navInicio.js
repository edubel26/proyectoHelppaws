document.addEventListener('DOMContentLoaded', function(){

    console
    fetch('./assets/codigoReutilizable/html/navInicio.html')
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById('navInicio').innerHTML = data;
    })
    .catch(error => console.log('Error: ', error))
})