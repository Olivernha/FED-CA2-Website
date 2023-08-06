// document.getElementById("submit").addEventListener("click", function(event){

//     event.preventDefault();
//     const survey = document.getElementById("survey");
//     const name = survey.elements['name'].value;
//     const email = survey.elements['email'].value;
//     const message = survey.elements['message'].value; 
//     // var email = document.getElementById("email").value;
//     // var message = document.getElementById("message").value;
//     console.log(name);
//   });

const data = [];
function isObjectInArray(array, property, value) {
    return array.some(item => item[property] === value);
}
const forms = document.querySelectorAll('.requires-validation')
const myButton = document.getElementById("submit");
const showButton = document.getElementById("showBtn");
// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          
            // data-bs-toggle="modal" data-bs-target="#dataModal"
            event.preventDefault();

            event.stopPropagation();
            console.log("invalid");
            form.classList.add('was-validated');
        }


        else {
        
            event.preventDefault();
            
            const survey = document.getElementById("survey");
            const name = survey.elements['name'].value;
            const email = survey.elements['email'].value;
            const foodcourt = survey.elements['foodcourt'].value;

            const roleRadioBtns = document.getElementsByName("roleRadio");
            const genderRadioBtns = document.getElementsByName("gender");
            const departmentSwitch = document.getElementsByName("department");

            const rank = document.getElementById("rank").value;
            const comments = document.getElementById("comments").value;

            // Find the selected radio button
            let selectedRole, selectedGender, selectedDepartment;
            for (const roleRadioBtn of roleRadioBtns) {
                if (roleRadioBtn.checked) {
                    selectedRole = roleRadioBtn.value;
                    break; // Exit the loop once we find the selected radio button
                }
            }
            for (const genderRadioBtn of genderRadioBtns) {
                if (genderRadioBtn.checked) {
                    selectedGender = genderRadioBtn.value;
                    break; // Exit the loop once we find the selected radio button
                }
            }
            for (const department of departmentSwitch) {
                if (department.checked) {
                    selectedDepartment = department.value;
                    break; // Exit the loop once we find the selected radio button
                }
            }
            if (!isObjectInArray(data, "email", email)) {
                // Add the object to the array if it doesn't exist
                data.push({
                    name,
                    email,
                    foodcourt,
                    selectedRole,
                    selectedGender,
                    selectedDepartment,
                    rank,
                    comments
                })


                console.log(data);
            }   
            else{
               // Update the object to the array if it does exist

                for (let i = 0; i < data.length; i++) {
                    if (data[i].email === email) {
                        data[i].name = name;
                        data[i].foodcourt = foodcourt;
                        data[i].selectedRole = selectedRole;
                        data[i].selectedGender = selectedGender;
                        data[i].selectedDepartment = selectedDepartment;
                        data[i].rank = rank;
                        data[i].comments = comments;
                        break;
                    }
                }

            }
            // clear the form values;
            survey.elements['name'].value = "";
            survey.elements['email'].value = "";
            survey.elements['foodcourt'].value = "";
            for (const roleRadioBtn of roleRadioBtns) {
                roleRadioBtn.checked = false;
            }
            for(const genderRadioBtn of genderRadioBtns){
                genderRadioBtn.checked = false;
            }
            for(const department of departmentSwitch){
                department.checked = false;
            }
            document.getElementById("rank").value = "";
            document.getElementById("comments").value = "";
            form.reset();
            form.classList.remove('was-validated');

        }
    }, false)
})
showButton.addEventListener("click", function (event) {
    event.preventDefault();
    // clear the table
    const oldTable= document.getElementById("tableBody");
    oldTable.innerHTML = "";
    // Get the table container
      const tableContainer = document.getElementById("tableContainer");

                // Create the table element
                const table = document.getElementById("tableBody");

            
                data.forEach((rowData) => {
                    const dataRow = document.createElement("tr");

                    const dataCell1 = document.createElement("td");
                    dataCell1.textContent = rowData.name;

                    const dataCell2 = document.createElement("td");
                    dataCell2.textContent = rowData.email;

                    const dataCell3 = document.createElement("td");
                    dataCell3.textContent = rowData.foodcourt;

                    const dataCell4 = document.createElement("td");
                    dataCell4.textContent = rowData.selectedRole;

                    const dataCell5 = document.createElement("td");
                    dataCell5.textContent = rowData.selectedGender;

                    const dataCell6 = document.createElement("td");
                    dataCell6.textContent = rowData.selectedDepartment;

                    const dataCell7 = document.createElement("td");
                    dataCell7.textContent = rowData.rank;

                    const dataCell8 = document.createElement("td");
                    dataCell8.textContent = rowData.comments;


                    // Append data cells to the data row
                    for(let i = 0; i < data.length; i++){
                        dataRow.appendChild(dataCell1);
                        dataRow.appendChild(dataCell2);
                        dataRow.appendChild(dataCell3);
                        dataRow.appendChild(dataCell4);
                        dataRow.appendChild(dataCell5);
                        dataRow.appendChild(dataCell6);
                        dataRow.appendChild(dataCell7);
                        dataRow.appendChild(dataCell8);
                    }
                    // Append the data row to the table
                    table.appendChild(dataRow);
                });

});

