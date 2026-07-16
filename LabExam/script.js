const form = document.getElementById("studentForm");

form.onsubmit = function () {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

    let hasFnameError = true;
    let hasLnameError = true;
    let hasSidError = true;
    let hasEmailError = true;
    let hasCreditError = true;
    let hasDepartmentError = true;
    if (fname == "") {
        document.getElementById("fnameError").innerHTML = "First Name is required";
        hasFnameError = true;
    } else {
        document.getElementById("fnameError").innerHTML = "";
        hasFnameError = false;
    }
    if (lname == "") {
        document.getElementById("lnameError").innerHTML = "Last Name is required";
        hasLnameError = true;
    } else {
        document.getElementById("lnameError").innerHTML = "";
        hasLnameError = false;
    }

    if (sid == "") {
        document.getElementById("sidError").innerHTML = "Student ID is required";
        hasSidError = true;
    } else if (!sid.includes("-")) {
        document.getElementById("sidError").innerHTML = "Student ID must contain '-'";
        hasSidError = true;
    } else {
        document.getElementById("sidError").innerHTML = "";
        hasSidError = false;
    }
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        hasEmailError = true;
    } else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        hasEmailError = true;
    } else {
        document.getElementById("emailError").innerHTML = "";
        hasEmailError = false;
    }
    if (credit == "") {
        document.getElementById("creditError").innerHTML = "Credit is required";
        hasCreditError = true;
    } else if (credit < 0 || credit >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be 0 to 147";
        hasCreditError = true;
    } else {
        document.getElementById("creditError").innerHTML = "";
        hasCreditError = false;
    }
    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Select Department";
        hasDepartmentError = true;
    } else {
        document.getElementById("departmentError").innerHTML = "";
        hasDepartmentError = false;
    }
    if (!hasFnameError && !hasLnameError && !hasSidError &&
        !hasEmailError && !hasCreditError && !hasDepartmentError) {

        let table = document.getElementById("studentTable");
        let row = table.insertRow(-1);
        row.insertCell(0).innerHTML = fname;
        row.insertCell(1).innerHTML = lname;
        row.insertCell(2).innerHTML = sid;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = credit;
        row.insertCell(5).innerHTML = department;

        form.reset();
    }

    return false;
}