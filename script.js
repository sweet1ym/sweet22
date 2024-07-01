document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const userTableBody = document.getElementById('userTableBody');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const age = parseInt(document.getElementById('age').value);

        // Validate age
        if (age < 18) {
            alert('You must be 18 years or older to submit.');
            return;
        }

        // Create table row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${age}</td>
        `;

        // Append row to table
        userTableBody.appendChild(row);

        // Store data in local storage (optional)
        const userData = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        saveUserData(userData);

        // Clear form inputs
        userForm.reset();
    });

    // Function to save data in local storage
    function saveUserData(userData) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    }
});

