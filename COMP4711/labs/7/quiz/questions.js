let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");

    let insert = "INSERT INTO lab7quiz (question, selection1, choice1, selection2, choice2, selection3, choice3) VALUES ?";
    let quiz = [
        ["What is the output of the following immediately invoked function? \n\n"
        + "var largestNum = (function(a, b) { \n"
        + "\t var result; \n" 
        + "\t a > b ? result = ['a', a] : result = ['b', b]; \n"
        + "\t return result; \n"
        + "})(first, second); \n"
        + "var first = 5; \n"
        + "var second = 8; \n\n", 
        "0", "a) ['a', undefined] \n",
        "1", "b) ['b', undefined] \n",
        "0", "c) ['b', 8] \n\n"],
        ["What is not true about immediately invoked functions? \n",
        "1", "a) It is unaffected by the code before it  \n",
        "0", "b) It is unaffected by the code after it \n",
        "0", "c) It produces immediate output \n\n"],
        ["What are object constructors? \n",
        "1", "a) Templates for creating objects \n",
        "0", "b) They are handlers \n",
        "0", "c) They are remotes to an object \n\n"],
        ["What are closures? \n",
        "1", "a) Function in a function that relies on variables outside the function to work \n",
        "0", "b) The semi-colon after each statement \n",
        "0", "c) An escape tag that tells the compiler that it has reached end of the script file \n\n"],
        ["What is the value of x? \n\n"
        + "function modulusFour(number) { \n"
        + "\t var remainderOf = 4;\n"
        + "\t function calc() { \n"
        + "\t\t return number % remainderOf; \n"
        + "\t } \n"
        + "\t return calc; \n"
        + "} \n"
        + "var x = modulusFour(52); \n",
        "0", "a) 16 \n",
        "0", "b) 13 \n",
        "1", "c) 0 \n\n"],
        ["What is a benefit of closures? \n",
        "0", "Breaks down a function to be more understandable\n",
        "1", "The return value from the inner function is saved to be used later\n",
        "0", "Puts more empahasis on the main functionality of a function \n\n"],
        ["What will be printed? \n\n"
        + "function makeAdder(x) { \n"
        + "\t return function(y) { \n"
        + "\t\t return x + y; \n"
        + "\t }; \n"
        + "} \n"
        + "var add5 = makeAdder(5); \n"
        + "var add10 = makeAdder(10); \n" 
        + "console.log(add5(2)); \n"
        + "console.log(add10(2)); \n\n",
        "1", "a) 7 12 \n",
        "0", "b) 4 18 \n",
        "0", "c) 8 15 \n\n"],
        ["What's the major difference between a regular function and closure? \n",
        "0", "a) One closes the other doesn't \n",
        "1", "b) Variables cease to exist outside of the function \n",
        "0", "c) One only accepts outside variables the other doesn't \n\n"],
        ["What is script linting? \n",
        "0", "a) A technique to style js code \n",
        "1", "b) A useful tool call JSLint \n",
        "0", "c) A documentation to useful techniques \n\n"],
        ["What is minification? \n",
        "0", "a) Compression of files \n",
        "1", "b) The removal of all whitespace and commons to be more readble for browsers \n",
        "0", "c) Encoding \n\n"]
    ];

    con.query(insert, [quiz], function(err, result) {
        if (err) throw err;
        console.log("Quiz inserted");
    });
});
