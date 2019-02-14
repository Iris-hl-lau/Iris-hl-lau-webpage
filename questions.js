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

    let insert = "INSERT INTO tblQuiz (question, selection1, choice1, selection2, choice2, selection3, choice3) VALUES ?";
    let quiz = [
        ["What is the output of the following? \n\n"
        + "var a = ['bob', 5, 3.14, 'c']; \n"
        + "console.log(a[1]); \n\n", 
        "0", "a) arrays can only contain elements of the same type \n",
        "0", "b) bob \n",
        "1", "c) 5 \n\n"],
        ["What is special about javascript arrays? \n",
        "1", "a) It can contain any variable type \n",
        "0", "b) It can contain functions \n",
        "0", "c) It's the same as arrays of other languages \n\n"],
        ["What is the difference between 'let' and 'var'? \n",
        "1", "a) 'let' has a smaller scope \n",
        "0", "b) no difference \n",
        "0", "c) 'let' is type specific \n\n"],
        ["Why may you prefer to use bracket notation over dot notation? \n",
        "1", "a) To convert a property name to a string \n",
        "0", "b) When we have properly named properties \n",
        "0", "c) Dot notation is better; There is less to type \n\n"],
        ["What is a closure? \n",
        "0", "a) It identifies the end of an object \n",
        "0", "b) Something that is placed at the end of javascript code \n",
        "1", "c) A function inside a function, that relies on variables in the outside function to work \n\n"]
    ];

    con.query(insert, [quiz], function(err, result) {
        if (err) throw err;
        console.log("Quiz inserted");
    });
});
