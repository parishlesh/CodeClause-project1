var input= document.getElementById('input')
var output= document.getElementById('output')
var inputType= document.getElementById('inputType')
var outputType= document.getElementById('outputType')
var inputTypeValue, outputTypeValue


const convert_btn= document.getElementById('convertButton')


convert_btn.addEventListener("click", myOutput)
// inputTypeValue = inputType.value
// outputTypeValue = outputType.value

function myOutput(){
     
    if(inputType.value === 'inch' && outputTypeValue === 'feet')
    {alert("ok")
        output.value=(input.value)/12;
        document.getElementById('output')=output.value
        console.log("123")
    }
    else if(inputTypeValue === 'inch' && outputTypeValue === 'meter')
    {
        output.value=(input.value)/39.37;
    }
}

