//  to maintain the objects of students
let students = [];

// returning true refreshes the page and returning false stops the page from reloading
function addStudent() {
    //  get student name
    let sNameEl = document.getElementById("sname");
    let sNameValue = sNameEl.value;

    // Get student age 
    let ageEl = document.getElementById("age");
    let ageValue = ageEl.value;

    // get student hobby
    let hobbyEl = document.getElementById("hobby");
    let hobbyValue = hobbyEl.value;

    //  Check if age is provided
    if (ageValue === "") {
        alert("Hey! You have not provided the value of age");
        return false;
    }

    // It is manadatory to provide the value of hobby if the age is greater than equal to 18
    if (ageValue >= 18 && hobbyValue === "") {
        alert("You have to provide hobby if you are are older than 18");
        return false;
    }

    // create an object of the student with all it's values
    let studentObject = {
        name: sNameValue,
        age: ageValue,
        hobby: hobbyValue
    }

    // Add the student to the array
    students.push(studentObject);

    // Empty the field values
    sNameEl.value = "";
    ageEl.value = "";
    hobbyEl.value = "";

    // Update the list of students
    updateStudentsList();

    // Always returning false, even on success so that the page does not reload.
    return false;
}

// FUnction that updates the list
function updateStudentsList() {

    // get the parent container of students list
    let studentsListContainer = document.getElementById("students-list-container");
    // Remove everything that's already in there
    studentsListContainer.innerHTML = "";


    // Reprint all the students
    students.forEach(function (student) {
        let newDivEl = document.createElement("div");
        newDivEl.innerText = `Student Name: ${student.name}, Age: ${student.age}, Hobby: ${student.hobby}`;

        studentsListContainer.appendChild(newDivEl);
    });

}


