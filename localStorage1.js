

//  Understanding local storage (first)

document.getElementById('userForm').addEventListener('submit', myFunc);

    function myFunc(event) {
      event.preventDefault(); // Prevent the default form submission

      // Collect input values
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      // Store in local storage
      localStorage.setItem('Username', username);
      localStorage.setItem('Email', email);
      localStorage.setItem('Phone', phone);

      // Optional: Show a success message
      alert('User details saved successfully!');

      // Optionally reset the form fields
      event.target.reset();
    }