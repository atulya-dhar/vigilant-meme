function FRMSUBMIT() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let OBJ = { username, email, phone };

    localStorage.setItem(`${phone}`,JSON.stringify(OBJ));

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
}