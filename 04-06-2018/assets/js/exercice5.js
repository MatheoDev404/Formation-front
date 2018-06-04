var inputText = document.createElement('input');
    inputText.type = "text";
    inputText.id = "monInputText";

var inputSubmit = document.createElement('input');
    inputSubmit.type = "submit";
    inputSubmit.value = "soumettre";
    inputSubmit.id = "monInputSubmit";

var value = inputSubmit.value;

document.body.appendChild(inputText);
document.body.appendChild(inputSubmit);

alertInput = () => alert(inputText.value);

inputSubmit.addEventListener('click',alertInput);