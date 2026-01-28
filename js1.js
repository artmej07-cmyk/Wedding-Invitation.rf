const ADMIN_PASSWORD = "admin123";
let guests = JSON.parse(localStorage.getItem("guests")) || [];
const total = document.getElementById("total");
const guestList = document.getElementById("guestList");

function render() {
    total.textContent = guests.reduce((s,g)=>s+g.count,0);
    localStorage.setItem("guests", JSON.stringify(guests));
}

guestForm.onsubmit = e => {
    e.preventDefault();
    guests.push({ name:name.value, count:+count.value, message:message.value });
    e.target.reset();
    render();
};

function login(){
    if(adminPass.value === ADMIN_PASSWORD){
