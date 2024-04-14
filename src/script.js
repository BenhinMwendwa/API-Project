function fetchVehicleInfo() { // function to fetch and display vehicle  information 
   //get values from select dropdown
    const vehicleType = document.getElementById('vehicleType').value;
    const brandCode = document.getElementById('brands').value;
    const modelCode = document.getElementById('models').value;
    const yearCode = document.getElementById('years').value;
    const url = `https://parallelum.com.br/fipe/api/v1/${apiVehicleType}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`;
    let apiVehicleType = ''; // initialize to empty string
    //use if else to check the values then assign them to the api values if they meet the condition
    if (vehicleType === 'car') {
        apiVehicleType = 'carros';
    } else if (vehicleType === 'motos') {
        apiVehicleType = 'motos';
    } else if (vehicleType === 'caminhoes') {
        apiVehicleType = 'caminhoes';
    } else {
        console.error('Unknown :', vehicleType);
        return;
    }
    fetch(url)
    .then(response=>{
        if(!response.ok)
        throw new Error('Network error');
    return response.json();
    })
    .then(data=>
        
