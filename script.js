function converterForCentimeters(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputMeters').value = (valNum/100).toFixed(5);
    document.getElementById('inputMillimeters').value = (valNum*10).toFixed(5);
    document.getElementById('inputKilometers').value = (valNum/100000).toFixed(5);
    document.getElementById('inputMiles').value = (valNum/160934).toFixed(5);
    document.getElementById('inputInches').value = (valNum/2.54).toFixed(5);
    document.getElementById('inputFeet').value = (valNum/30.48).toFixed(5);

};

function converterForMeters(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputCentimeters').value = (valNum*100).toFixed(5);
    document.getElementById('inputMillimeters').value = (valNum*1000).toFixed(5);
    document.getElementById('inputKilometers').value = (valNum/1000).toFixed(5);
    document.getElementById('inputMiles').value = (valNum/1609).toFixed(5);
    document.getElementById('inputInches').value = (valNum*39.37).toFixed(5);
    document.getElementById('inputFeet').value = (valNum*3.281).toFixed(5);

};

function converterForMillimeters(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputMeters').value = (valNum/1000).toFixed(5);
    document.getElementById('inputCentimeters').value = (valNum/10).toFixed(5);
    document.getElementById('inputKilometers').value = (valNum/1000000).toFixed(5);
    document.getElementById('inputMiles').value = (valNum/1609e+6).toFixed(5);
    document.getElementById('inputInches').value = (valNum/25.4).toFixed(5);
    document.getElementById('inputFeet').value = (valNum/305).toFixed(5);

};

function converterForKilometers(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputMeters').value = (valNum*1000).toFixed(5);
    document.getElementById('inputMillimeters').value = (valNum*1e+6).toFixed(5);
    document.getElementById('inputCentimeters').value = (valNum/100000).toFixed(5);
    document.getElementById('inputMiles').value = (valNum/1.609).toFixed(5);
    document.getElementById('inputInches').value = (valNum*39370).toFixed(5);
    document.getElementById('inputFeet').value = (valNum*3281).toFixed(5);

};

function converterForMiles(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputMeters').value = (valNum*1609).toFixed(5);
    document.getElementById('inputMillimeters').value = (valNum*1609e+6).toFixed(5);
    document.getElementById('inputKilometers').value = (valNum*1.609).toFixed(5);
    document.getElementById('inputCentimeters').value = (valNum*160934).toFixed(5);
    document.getElementById('inputInches').value = (valNum*63360).toFixed(5);
    document.getElementById('inputFeet').value = (valNum*5280).toFixed(5);

};

function converterForInches(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputMeters').value = (valNum/39.37).toFixed(5);
    document.getElementById('inputMillimeters').value = (valNum*25.4).toFixed(5);
    document.getElementById('inputKilometers').value = (valNum/39370).toFixed(5);
    document.getElementById('inputMiles').value = (valNum/63360).toFixed(5);
    document.getElementById('inputCentimeters').value = (valNum*2.54).toFixed(5);
    document.getElementById('inputFeet').value = (valNum/12).toFixed(5);

};

function converterForFeet(valNum){

    valNum = parseFloat(valNum);

    document.getElementById('inputMeters').value = (valNum/3.281).toFixed(5);
    document.getElementById('inputMillimeters').value = (valNum*305).toFixed(5);
    document.getElementById('inputKilometers').value = (valNum/3281).toFixed(5);
    document.getElementById('inputMiles').value = (valNum/5280).toFixed(5);
    document.getElementById('inputInches').value = (valNum*12).toFixed(5);
    document.getElementById('inputCentimeters').value = (valNum*30.48).toFixed(5);

};