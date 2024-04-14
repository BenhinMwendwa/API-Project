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
    const apiurl = `https://parallelum.com.br/fipe/api/v1/${apiVehicleType}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`;


    // Fetch vehicle information 
    fetch(apiurl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Error');
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
                document.getElementById('VehicleInfo').innerHTML = vehicleInfo;
            })
            .catch(error => {
                console.error('Error fetching vehicle information:', error);
                alert('Failed to fetch vehicle information. Please try again.');
            });
    }
    //function to initiate a dropdown element with options
function populateDropdown(selectElement, options) {
    selectElement.innerHTML = ''; //clear existing options
      // Loop through each option in the 'options' array
      options.forEach(option => {
        const optionElement = document.createElement('option');//create element
        optionElement.value = option.codigo;//set value
        optionElement.textContent = option.nome; //set name
        selectElement.appendChild(optionElement);
      });

    }
    function loadBrands() { //function to load brands
        const vehicleType = document.getElementById('vehicleType').value;

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
    const brandsUrl = `https://parallelum.com.br/fipe/api/v1/${apiVehicleType}/marcas`;
    fetch(brandsUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network error`);
        }
        return response.json();
    })
    .then(data => {
        populateDropdown(document.getElementById('brands'), data);
    })
    .catch(error => {
        console.error('Error fetching brands:', error);
        alert('Failed to fetch brands. Please try again.');
    });
}
// Load brands when page loads

    
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
            populateDropdown(document.getElementById('models'), data.modelos);
        })
        .catch(error => {
            console.error('error : ',error);
            alert('Failed to load models. Please try again.');
        });}

        function loadYears() {
            const vehicleType = document.getElementById('vehicleType').value;
            const brandCode = document.getElementById('brands').value;
            const modelCode = document.getElementById('models').value;
        
            // Define the correct API vehicle type string for the URL
            let apiVehicleType = '';
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
        
            // Fetch years data from the API
            fetch(yearsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network error');
                    }
                    return response.json();
                })
                .then(data => {
                    // Populate the years dropdown with fetched data
                    populateDropdown(document.getElementById('years'), data);
                })
                .catch(error => {
                    console.error('Error fetching years:', error);
                    alert('Failed to fetch years. Please try again.');
                });
        }
        

//load brand when page loads 
document.addEventListener('DOMContentLoaded', () => {
    loadBrands();
});
document.getElementById('vehicleType').addEventListener('change', () => {
    loadBrands(); // Reload brands when vehicle type changes
});

// Event listener for brand selection change
document.getElementById('brands').addEventListener('change', () => {
    loadModels(); // Load models when brand selection changes
});

// Event listener for model selection change
document.getElementById('models').addEventListener('change', () => {
    loadYears(); // Load years when model selection changes
});


