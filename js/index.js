/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

// Task 1: Fetch Contacts JSON Data
async function getContacts() {
  const response = await fetch('public/data/contacts.json'); // load contacts.json file using fetch API
  const contactsData = await response.json(); 
  console.log("Contact Data\r\n{0}", contactsData); 
  renderContacts(contactsData); 
}

getContacts();

// Task 2: Render the JSON Data
function renderContacts(contactsArray) {
  const contactsDiv = document.getElementById('contacts'); // Get the HTML element to display contacts
  contactsDiv.innerHTML = ''; // Clear existing contents

  // Create HTML content for each contact
  contactsArray.forEach(contact => {
    const contactHTML = `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${contact.name}</h5> <!-- FULLNAME HERE -->
        </div>
        <small>${contact.email}</small> <!-- EMAIL HERE -->
      </div>
    `;
    contactsDiv.innerHTML += contactHTML; // Append content to the page 
  });
}



