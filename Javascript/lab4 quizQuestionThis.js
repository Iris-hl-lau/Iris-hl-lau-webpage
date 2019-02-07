
let questions = [`<p>1. What is "this"?</p>
<input type="radio" name="q1choice"> a) this refers to a class
<br/>
<input type="radio" name="q1choice"> b) this refers to itself so you don't have to keep typing the variable name
<br/>
<input type="radio" name="q1choice"> c) this is a keyword that refers to the object it belongs to`, 
`<br/><p>2. What is returned in the following code?</p>
<pre>
    "use strict";
    document.getElementById("Something").innerHTML = aFunction();
    function aFunction() {
        return this;
    }
</pre>
<input type="radio" name="q2choice"> a) the object that "owns" aFunction
<br/>
<input type="radio" name="q2choice"> b) undefined
<br/>
<input type="radio" name="q2choice"> c) false`,
`<br/><p>3. What is "use strict"?</p>
<input type="radio" name="q3choice"> a) strict mode
<br/>
<input type="radio" name="q3choice"> b) allow "strict" to replace "this"
<br/>
<input type="radio" name="q3choice"> c) a string that let's you choose what "this" does`,
`<br/><p>4. What does "this" in a event do?</p>
<input type="radio" name="q4choice"> a) refers to the nearest variable
<br/>
<input type="radio" name="q4choice"> b) refers to the element that receives the event
<br/>
<input type="radio" name="q4choice"> c) refers to the global object`,
`<br/><p>5. What is "this referring to"?</p>
<pre>
    var sam = {
        fullName: function() {
        return this.firstName + " " + this.lastName;
        }
    }
    var george = {
        firstName:"George",
        lastName: "Curious",
    }
    var x = sam.fullName.call(george); 
    document.getElementById("demo").innerHTML = x; 
</pre>
<input type="radio" name="q5choice"> a) sam
<br/>
<input type="radio" name="q5choice"> b) george
<br/>
<input type="radio" name="q5choice"> c) not defined`,
`<br/><p>6. What is the difference between .querySelector() and .querySelectorAll()?</p>
<input type="radio" name="q6choice"> a) .querySelector() selects the first matching element and .querySelectorAll() is a list of matching elements
<br/>
<input type="radio" name="q6choice"> b) .querySelector() selects an id and .querySelectorAll() selects classes
<br/>
<input type="radio" name="q6choice"> c) .querySelector() selects a condition and .querySelectorAll() selects condtions`];

for(let i = 0; i < questions.length; i++) {
    document.body.innerHTML += questions[i];
    document.body.innerHTML += "<HR>";
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
    

  