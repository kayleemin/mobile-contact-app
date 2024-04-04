// script.js

// Sample default contacts
let defaultContacts = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" }
];

// Function to display default contacts
function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    defaultContacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <h3>${contact.name}</h3>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <button onclick="deleteContact('${contact.email}')">Delete</button>
        `;
        contactList.appendChild(contactItem);
    });
}

// Function to create new contact
function createContact() {
    const newName = document.getElementById('newName').value.trim();
    const newEmail = document.getElementById('newEmail').value.trim();
    const newPhone = document.getElementById('newPhone').value.trim();
    if (newName && newEmail && newPhone) {
        defaultContacts.push({ name: newName, email: newEmail, phone: newPhone });
        displayContacts();
        // Clear input fields
        document.getElementById('newName').value = '';
        document.getElementById('newEmail').value = '';
        document.getElementById('newPhone').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to search contacts
function searchContacts() {
    const searchTerm = document.getElementById('search').value.toLowerCase().trim();
    if (searchTerm) {
        const filteredContacts = defaultContacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm) ||
            contact.email.toLowerCase().includes(searchTerm) ||
            contact.phone.includes(searchTerm)
        );
        displaySearchResults(filteredContacts);
    } else {
        displayContacts();
    }
}

// Function to display search results
function displaySearchResults(contacts) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
            <h3>${contact.name}</h3>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <button onclick="deleteContact('${contact.email}')">Delete</button>
        `;
        contactList.appendChild(contactItem);
    });
}

// Function to delete contact
function deleteContact(email) {
    const index = defaultContacts.findIndex(contact => contact.email === email);
    if (index !== -1) {
        defaultContacts.splice(index, 1);
        displayContacts();
    }
}

// Display default contacts on page load
window.onload = function () {
    displayContacts();
};
