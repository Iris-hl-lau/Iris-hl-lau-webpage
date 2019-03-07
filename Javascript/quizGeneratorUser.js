const data = JSON.parse(localStorage.getItem("quiz"));
const answers = JSON.parse(localStorage.getItem("answers"));

let list = document.createElement("OL");
list.id = "ol";
document.body.appendChild(list);

function linebreak(loc) {
    loc.appendChild(document.createElement("BR"));
}

function generateQuestion(name, question, loc) {
    let li = document.createElement("LI");
    li.innerHTML = question;
    li.name = name;
    li.className  = "question";
    loc.appendChild(li);
    linebreak(loc);
}

function generateRadioBtn(num, loc) {
    let radioBtn = document.createElement("INPUT");
    radioBtn.type = "radio";
    radioBtn.className = "radiobtn";
    radioBtn.name = String("multipleChoiceRadio" + num);
    loc.appendChild(radioBtn);
}

function generateUL(loc) {
    linebreak(loc);
    linebreak(loc);
    let choiceList = document.createElement("UL");
    choiceList.className = "choiceList";
    loc.appendChild(choiceList);
}

function generateLI(loc){
    let li = document.createElement("LI");
    li.className = "choices";
    loc.appendChild(li);
}

function generateChoice(name, choice, loc) {
    loc.innerHTML += "\t" + choice;
}

function checkAnswers() {
    let radiobtns = document.querySelectorAll(".radiobtn");
    
    for(let i = 0; i < radiobtns.length; i++) {
        if(answers.includes(i)) {
            radiobtns[i].parentElement.style.background = "#41f4a9";
        }else if(radiobtns[i].checked) {
            radiobtns[i].parentElement.style.background = "#f44242";
        } else {
            radiobtns[i].parentElement.style.background = "none";
        }
    }
}

function btnSubmit(loc) {
    let btn_submit = document.createElement("INPUT");
    btn_submit.type = "Submit";
    btn_submit.onclick = function(event) {
        event.preventDefault();
        checkAnswers();
    };
    loc.appendChild(btn_submit);
}

console.log(data);
console.log(answers);

for(let i = 0; i < data.length; i++) {      
    if(String(data[i].name).includes("Question")) {
        let loc = document.getElementById("ol");
        generateQuestion(data[i].name, data[i].value, loc);

        let question = document.querySelectorAll(".question");
        generateUL(question[question.length - 1]);
    }
    if(String(data[i].name).includes("Choice") && !String(data[i].name).includes("Radio")) {
        let choiceList = document.querySelectorAll(".choiceList");

        generateLI(choiceList[choiceList.length - 1]);

        let choices = document.querySelectorAll(".choices");
        let question = document.querySelectorAll(".question");
        generateRadioBtn(question.length - 1, choices[choices.length - 1]);
        generateChoice(data[i].name, data[i].value, choices[choices.length - 1]);
    }
}

btnSubmit(document.body);
