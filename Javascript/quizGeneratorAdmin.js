let qNo;
let labelQNo = document.createElement("LABEL");
        labelQNo.innerHTML = "Enter the number of questions to create:&nbsp";
        labelQNo.htmlFor = "qNo";
        document.body.appendChild(labelQNo);

        let qNoInput = document.createElement("INPUT");
        qNoInput.id = "qNoInput";
        qNoInput.type = "text";
        document.body.appendChild(qNoInput);

        let qNoBtn = document.createElement("BUTTON");
        qNoBtn.type = "button";
        qNoBtn.id = "btnOK";
        qNoBtn.onclick = function(event) {
            qNo = Number(document.getElementById("qNoInput").value);
            generateQForm();
        };
        qNoBtn.innerHTML = "OK";
        document.body.appendChild(qNoBtn);
        
        function createLabel(labelName, i, loc) {
            linebreak(loc);
            linebreak(loc);
            let label = document.createElement("LABEL");
            label.innerHTML = labelName;
            label.htmlFor = String(labelName + i);
            loc.appendChild(label);
            linebreak(loc);
        }
        
        function createTextArea(num, loc) {
            let textbox = document.createElement("TEXTAREA");
            textbox.rows = 2;
            textbox.cols = 50;
            textbox.name = String("Question" + num);
            loc.appendChild(textbox);
        }

        function linebreak(loc) {
            loc.appendChild(document.createElement("BR"));
        }

        function createRadioBtn(num, loc) {
            let radioBtn = document.createElement("INPUT");
            radioBtn.type = "radio";
            radioBtn.className = "radiobtn";
            radioBtn.name = String("multipleChoiceRadio" + num);
            loc.appendChild(radioBtn);
        }

        function createTextInput(num , loc) {
            let textInput = document.createElement("INPUT");
            textInput.type = "text";
            textInput.name = String("multipleChoice" + num);
            loc.appendChild(textInput);
        }

        function generateQForm() {
            if(qNo > 0) {
                let form = document.createElement("FORM");
                form.id = "quizForm";
                document.body.appendChild(form);
            linebreak(form);

            for(let i = 0; i < qNo; i++) {
                createLabel("Question Text*", i, form);
                createTextArea(i, form);
                createLabel("Answers*", i, form);

                for(let j = 0; j <= 3; j++) {
                    createRadioBtn(i, form);
                    createTextInput(j, form);
                    linebreak(form);
                }
                linebreak(form);
            }
            let radioBtnSelector = document.getElementsByClassName("radiobtn");   
            for(let k = 0; k < radioBtnSelector.length; k++) {
                if(k % 4 == 0) {
                    radioBtnSelector[k].checked = true;
                } else {
                    radioBtnSelector[k].checked = false;
                }

            }

            btnSubmit(form);
            
            }
        }

        function btnSubmit(loc) {
            let btn_submit = document.createElement("INPUT");
            btn_submit.type = "Submit";
            btn_submit.onclick = function(event) {
                event.preventDefault();
                storeQuiz();
                document.location.href = "user.html", true;
            };
            loc.appendChild(btn_submit);
        }
        
        function storeQuiz() {
            let quiz = [];
            quiz = $('#quizForm').serializeArray();
            localStorage.setItem("quiz", JSON.stringify(quiz));

            let answers = [];
            let rdobtn = document.querySelectorAll(".radiobtn");
            for(let i = 0; i < rdobtn.length; i++) {
                if(rdobtn[i].checked) {
                    answers.push(i);
                }
            }

            localStorage.setItem("answers", JSON.stringify(answers));
            console.log(quiz);
        }
