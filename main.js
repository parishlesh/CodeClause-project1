var input= document.getElementById('input')
var output= document.getElementById('output')
var inputType= document.getElementById('inputType')
var outputType= document.getElementById('outputType')



const convert_btn= document.getElementById('convertButton')


convert_btn.addEventListener("click", myOutput)

function myOutput(){
     
    if(inputType.value === 'inch1' && outputType.value === 'feet')
    {
        result=(input.value)/12;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'inch1' && outputType.value === 'km')
    {
        result=(input.value)/39370;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'inch1' && outputType.value === 'meter')
    {
        result=(input.value)/39.37;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'inch1' && outputType.value === 'centimeter')
    {
        result=(input.value)*2.54;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'km1' && outputType.value === 'inch')
    {
        result=(input.value)*39370;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'km1' && outputType.value === 'meter')
    {
        result=(input.value)*1000
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'km1' && outputType.value === 'centimeter')
    {
        result=(input.value)*100000;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'km1' && outputType.value === 'feet')
    {
        result=(input.value)*3281;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'meter1' && outputType.value === 'inch')
    {
        result=(input.value)*39.37;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'meter1' && outputType.value === 'km')
    {
        result=(input.value)/1000;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'meter1' && outputType.value === 'centimeter')
    {
        result=(input.value)*100;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'meter1' && outputType.value === 'feet')
    {
        result=(input.value)*3.281;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'centimeter1' && outputType.value === 'inch')
    {
        result=(input.value)/2.54;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'centimeter1' && outputType.value === 'km')
    {
        result=(input.value)/100000;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'centimeter1' && outputType.value === 'meter')
    {
        result=(input.value)/100;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'centimeter1' && outputType.value === 'feet')
    {
        result=(input.value)/30.48;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'feet1' && outputType.value === 'inch')
    {
        result=(input.value)*12;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'feet1' && outputType.value === 'km')
    {
        result=(input.value)/3281;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'feet1' && outputType.value === 'meter')
    {
        result=(input.value)/3.281;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'feet1' && outputType.value === 'centimeter')
    {
        result=(input.value)*30.48;
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'feet1' && outputType.value === 'feet')
    {
        result=(input.value);
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'meter1' && outputType.value === 'meter')
    {
        result=(input.value);
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'centimeter1' && outputType.value === 'centimeter')
    {
        result=(input.value);
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'km1' && outputType.value === 'km')
    {
        result=(input.value);
        document.getElementById('output').innerHTML=result
    }
    else if(inputType.value === 'inch1' && outputType.value === 'inch')
    {
        result=(input.value);
        document.getElementById('output').innerHTML=result
    }
}