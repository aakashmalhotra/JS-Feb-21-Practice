// Array to maintain the list of students
let students = [];

// Add the student to the array
function addStudent() {
    // Get the element
    let textBoxEl = document.getElementById("student-name-id");
    // Get the text value from the element that is in the text box
    let studentName = textBoxEl.value;
    // add the student name to the array
    students.push(studentName);
    // empty the textbox
    textBoxEl.value = "";
}

function logStudents() {
    let studentListEl = document.getElementById("students-list");
    studentListEl.innerHTML = "";
    students.forEach(function (student) {
        let newDivEl = document.createElement("div"); // <div> </div>
        newDivEl.innerText = student; // <div> Student name </div>

        studentListEl.appendChild(newDivEl);
    })
}
