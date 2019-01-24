let quesNo = window.prompt("How many questions would you like to answer? (Enter a number between 0 and 5.)" );

let questions = [`<p>1. What is the output of the following?</p> <br/>
<p><span class="var">var</span> a = ["bob", 5, 3.14, 'c'];</p> 
<p><span class="console">console</span>.log(a[n]);</p>
<input type="radio" name="q1choice"> a) arrays can only contain elements of the same type
<br/>
<input type="radio" name="q1choice"> b) bob
<br/>
<input type="radio" name="q1choice"> c) 5`, 
`<p>2. What is special about javascript arrays?</p>
<input type="radio" name="q2choice"> a) It can contain any variable type
<br/>
<input type="radio" name="q2choice"> b) It can contain functions
<br/>
<input type="radio" name="q2choice"> c) It's the same as arrays of other languages`,
`<p>3. What is the difference between "let" and "var"?</p>
<input type="radio" name="q3choice"> a) "let" has a smaller scope
<br/>
<input type="radio" name="q3choice"> b) no difference
<br/>
<input type="radio" name="q3choice"> c) "let" is type specific`,
`<p>4. Why may you prefer to use bracket notation over dot notation?</p>
<input type="radio" name="q4choice"> a) To convert a property name to a string
<br/>
<input type="radio" name="q4choice"> b) When we have properly named properties
<br/>
<input type="radio" name="q4choice"> c) Dot notation is better; There is less to type`,
`<p>5. What is a closure?</p>
<input type="radio" name="q5choice"> a) It identifies the end of an object
<br/>
<input type="radio" name="q5choice"> b) Something that is placed at the end of javascript code
<br/>
<input type="radio" name="q5choice"> c) A function inside a function, that relies on variables in the outside function to work`];

while(quesNo > 5 || quesNo < 0) {
    quesNo = window.prompt("How many questions would you like to answer? (Enter a number between 0 and 5.)");
}

for(let i = 0; i <= Number(quesNo) - 1; i++) {
    document.body.innerHTML += questions[i];
}  
    
let linebreak = document.createElement("BR");
document.body.appendChild(linebreak);
let linebreak2 = document.createElement("BR");
document.body.appendChild(linebreak2);

let home_btn = document.createElement("BUTTON");
home_btn.innerHTML = "Home";
home_btn.onclick = function(event){
    location.href="../../../../index.html";
}
document.body.appendChild(home_btn);
    

  