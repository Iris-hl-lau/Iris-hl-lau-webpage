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
        
        function createLabel(labelName, i) {
            linebreak();
            linebreak();
            let label = document.createElement("LABEL");
            label.innerHTML = labelName;
            label.htmlFor = String(labelName + i);
            document.body.appendChild(label);
            linebreak();
        }
        
        function createTextArea(num) {
            let textbox = document.createElement("TEXTAREA");
            textbox.rows = 2;
            textbox.cols = 50;
            textbox.name = String("Question" + num);
            document.body.appendChild(textbox);
        }

        function linebreak() {
            document.body.appendChild(document.createElement("BR"));
        }

        function createRadioBtn(num) {
            let radioBtn = document.createElement("INPUT");
            radioBtn.type = "radio";
            radioBtn.name = String("multipleChoiceRadio" + num);
            document.body.appendChild(radioBtn);
        }

        function createTextInput(num) {
            let textInput = document.createElement("INPUT");
            textInput.type = "text";
            textInput.name = String("multipleChoice" + num);
            document.body.appendChild(textInput);
        }

        function generateQForm() {
            if(qNo > 0) {
                let form = document.createElement("FORM");
            linebreak();

            for(let i = 0; i < qNo; i++) {
                createLabel("Question Text*");
                createTextArea(i);
                createLabel("Answers*");

                for(let j = 0; j <= 3; j++) {
                    createRadioBtn(i);
                    createTextInput(j);
                    linebreak();
                }
                linebreak();
            }
            btnSubmit();
            document.body.appendChild(form);
            }
        }

        function btnSubmit() {
            let btn_submit = document.createElement("INPUT");
            btn_submit.type = "submit";
            btn_submit.onclick = function(event) {
                storeQuiz();
            };
            document.body.appendChild(btn_submit);
        }

        let quiz = {data : []};

        //serializeObject protoype
        $.fn.serializeObject = function() {
                let formInputs = {};
                let item = this.serializeArray();

                $.each(item, function() {
                    if (formInputs[this.name] !== undefined) {
                        if (!formInputs[this.name].push) {
                            formInputs[this.name] = [formInputs[this.name]];
                        }
                        formInputs[this.name].push(this.value || '');
                    } else {
                        formInputs[this.name] = this.value || '';
                    }
                });
                quiz.data.push(formInputs);
            };


        function storeQuiz() {
            // const quiz = document.getElementsByClassName("Form");
            console.log(JSON.stringify($('form').serializeObject()));
            // $(function() {
            //     $('form').submit(function() {
            //         $('#result').text(JSON.stringify($('form').serializeObject()));
                   
            //         return false;
            //     });
            // });
        }

        // function retrieveQuiz() {

        // }