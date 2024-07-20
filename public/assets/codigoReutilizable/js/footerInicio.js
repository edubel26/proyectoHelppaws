document.addEventListener('DOMContentLoaded', function(){
    
    fetch('./assets/codigoReutilizable/html/footerInicio.html')
    .then( response => {
        return response.text();
    })
    .then(data =>{
        document.getElementById('footerInicio').innerHTML = data;
    })
    .catch(error => console.log('Error: ', error))
})