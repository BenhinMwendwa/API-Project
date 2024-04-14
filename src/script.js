function fetchVehicleInfo() { // function to fetch and display vehicle  information 
   //get values from select dropdown
    const vehicleType = document.getElementById('vehicleType').value;
    const brandCode = document.getElementById('brands').value;
    const modelCode = document.getElementById('models').value;
    const yearCode = document.getElementById('years').value;
    
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
    const url = `https://parallelum.com.br/fipe/api/v1/${apiVehicleType}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`;


    // Fetch vehicle information 
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
     
        .then(data => {
                // create  content in html to display vehicle information when its clicked
                const vehicleInfo = `
                    <p><strong>Brand:</strong> ${data.Marca}</p>
                    <p><strong>Model:</strong> ${data.Modelo}</p>
                    <p><strong>Model year:</strong> ${data.AnoModelo}</p>
                    <p><strong>Fuel Type:</strong> ${data.Combustivel}</p>
                    <p><strong>Value:</strong> ${data.Valor}</p>
                `;
    
                // put the string information into VehicleInfo
                document.getElementById('vehicleInfo').innerHTML = vehicleInfo;
            })
            .catch(error => {
                console.error('Error fetching vehicle information:', error);
                alert('Failed to fetch vehicle information. Please try again.');
            });
    }
    //function to initiate a dropdown element with options
function initiateDropdown(selectElement, options) {
    selectElement.innerHTML = ''; //clear existing options
      // Loop through each option in the 'options' array
      options.forEach(option => {
        const optionElement = document.createElement('option');//create element
        optionElement.value = option.codigo;//set value
        optionElement.textContent = option.nome; //set name
        selectElement.appendChild(optionElement);
      });

    }
    function loadModels() { //function to load models
        const vehicleType = document.getElementById('vehicleType').value;
        const brandCode = document.getElementById('brands').value;
       //use if  else to define correct API for vehicles
        let apiVehicleType = ''; // Initialize empty string
        if (vehicleType === 'car') {
            apiVehicleType = 'carros';
        } else if (vehicleType === 'motos') {
            apiVehicleType = 'motos';
        } else if (vehicleType === 'caminhoes') {
            apiVehicleType = 'caminhoes';
        } else {
            console.error('Unknown vehicle type:', vehicleType);
            return;
        }

        const modelsUrl = `https://parallelum.com.br/fipe/api/v1/${apiVehicleType}/marcas/${brandCode}/modelos`;
        fetch(modelsUrl)//fetch models data from  API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }

            return response.json();
        })
        .then(data => {
            //initiate the models dropdown 
            initiateDropdown(document.getElementById('models'), data.modelos);
        })
        .catch(error => {
            console.error('error : ',error);
            alert('Failed to load models. Please try again.');
        });}
        function loadYears() {//function to load years
            const vehicleType = document.getElementById('vehicleType').value;
            const brandCode = document.getElementById('brands').value;
            const modelCode = document.getElementById('models').value;

            // Define the correct API vehicle for URL
    let apiVehicleType = ''; // initialize empty string
    if (vehicleType === 'car') {
        apiVehicleType = 'carros';
    } else if (vehicleType === 'motos') {
        apiVehicleType = 'motos';
    } else if (vehicleType === 'caminhoes') {
        apiVehicleType = 'caminhoes';
    } else {
        console.error('Unknown vehicle type:', vehicleType);
        return;
    }
    // Construct the years URL based on the vehicle type, brand code, and model code
   const yearsUrl = `https://parallelum.com.br/fipe/api/v1/${apiVehicleType}/marcas/${brandCode}/modelos/${modelCode}/anos`;

