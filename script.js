let supers = document.getElementById("super");
let strong = document.getElementById("strong");
let weak = document.getElementById("weak");
let funny = document.getElementById("funny");
let write = document.getElementById("pass");
let clear = document.getElementById("clear");

function super_strong(length) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-`{}|:<>?/.,;'[]";
    let result = "";
    for (let i = 0; i <= length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function strongpas(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i <= length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function weakpas(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i <= length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
    let arr = [
        "password",
        "incorrect",
        "qwerty",
        "abc123",
        "monkey",
        "111111",
        "1234567890",
        "password1",
        "12345678",
        "1234",
        "dragon",
        "pussy",
        "baseball",
        "football",
        "monkey",
        "696969",
        "abcabc",
        "master",
        "666666",
        "123321",
        "mustang",
        "654321",
        "superman",
        "7777777",
        "fuckyou",
        "121212",
        "000000",
        "123123",
        "hunter",
        "buster",
        "soccer",
    ];

function funnypas() {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result;
}

supers.addEventListener("click", () => {
    let num = 15;
    let result = super_strong(num);
    write.innerHTML = result;
});

strong.addEventListener("click", () => {
    let num = 10;
    let result = strongpas(num);
    write.innerHTML = result;
});

weak.addEventListener("click", () => {
    let num = 7;
    let result = weakpas(num);
    write.innerHTML = result;
});

funny.addEventListener("click", () =>{
    let result = funnypas();
    write.innerHTML = result;
});

clear.addEventListener("click", ()=>{
    write.innerHTML = "";
})

