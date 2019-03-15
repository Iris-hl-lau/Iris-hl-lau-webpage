let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS mydb", function(err, result) {
        if(err) throw err;
        console.log("Database created");
    });

    con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
    });

    con.query("DROP TABLE lab7Quiz", function(err, result) {
        if(err) throw err;
        console.log("Table created");
    });

    let tbl = "CREATE TABLE IF NOT EXISTS lab7Quiz ("
               + "question VARCHAR(300) NOT NULL,"
               + "selection1 BOOLEAN NOT NULL, choice1 VARCHAR(100) NOT NULL," 
               + "selection2 BOOLEAN NOT NULL, choice2 VARCHAR(100) NOT NULL," 
               + "selection3 BOOLEAN NOT NULL, choice3 VARCHAR(100) NOT NULL,"
               + "PRIMARY KEY(question))";
    con.query(tbl, function(err, result) {
        if(err) throw err;
        console.log("Table created");
    });
});

