for(let i = 0; i <= 25; i++) {
    let btn = document.createElement("BUTTON");
    let text = String.fromCharCode(65 + i);
    btn.className = "btn_style";
    btn.innerHTML = text;
    btn.onclick = function(event){
        alert(text);
        };
    document.body.appendChild(btn);    
    
    if(i === 12) {
        let linebreak = document.createElement("BR");
        document.body.appendChild(linebreak);
    }
}

let linebreak = document.createElement("BR");
document.body.appendChild(linebreak);
let linebreak2 = document.createElement("BR");
document.body.appendChild(linebreak2);

let home_btn = document.createElement("BUTTON");
home_btn.innerHTML = "Home";
home_btn.onclick = function(event){
    location.href="../../../../index.html";
};

document.body.appendChild(home_btn);
