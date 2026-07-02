let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        let expression = display.value;
        let result = eval(expression);

        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);

        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

function square(){
    display.value = Math.pow(Number(display.value),2);
}

function sqrtValue(){
    display.value = Math.sqrt(Number(display.value));
}

function sinValue(){
    display.value = Math.sin(Number(display.value));
}

function cosValue(){
    display.value = Math.cos(Number(display.value));
}

function tanValue(){
    display.value = Math.tan(Number(display.value));
}

document.addEventListener("keydown", function(e){

    if(!isNaN(e.key) || "+-*/.%()".includes(e.key)){
        appendValue(e.key);
    }

    if(e.key === "Enter"){
        calculate();
    }

    if(e.key === "Backspace"){
        deleteLast();
    }

    if(e.key === "Escape"){
        clearDisplay();
    }
});
