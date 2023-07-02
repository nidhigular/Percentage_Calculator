var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

//numField2.value = "ddtest";             to check the text is working
//resultField.innerText = "test2";        to check if innertext is working

var form = document.getElementById('xIsWhatPercentOfY')
form.addEventListener('submit', function(event){
    //alert("we clickeyclacked something");         to check is claculate button is working
    
    if(!numField1.value || !numField2.value){
        alert("Please enter values");
    } else{
          var x = parseFloat(numField1.value);
          var y = parseFloat(numField2.value);
        //alert(x + y);         to check if numbers are adding or not      
        
        var result = x/y;
        var percent = result * 100;
        //alert(percent);  to check if operation is working or not
        
        resultField.innerText = "Answer :" + percent + "%";
        event.preventDefault();
    }
    
});