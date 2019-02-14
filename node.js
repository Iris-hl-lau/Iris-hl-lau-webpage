let http = require('http');
let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

let quiz = [];
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");

    con.query("SELECT * FROM tblQuiz", function(err, result) {
        result.forEach(function(row) {
            let question = {};
            question.question = row.question;
            question.choice1 = row.choice1;
            question.choice2 = row.choice2;
            question.choice3 = row.choice3;
            quiz.push(question);
        });
    });
});

let port = process.env.PORT || 8888
http.createServer((request, response) => {
response.writeHead(200,{'Content-type': 'text/plain'});

for (let i = 0; i < quiz.length; i++) {
    response.write(quiz[i].question);
    response.write(quiz[i].choice1);
    response.write(quiz[i].choice2);
    response.write(quiz[i].choice3);
}

response.end();
}).listen(port,() => {
console.log('listening...');
});
