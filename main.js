document.addEventListener('DOMContentLoaded', () => {
    const facultyContainer = document.getElementById('faculty-container');

    if (facultyContainer && typeof facultyData !== 'undefined') {
        displayFacultyProfiles(facultyContainer, facultyData);
    }
});

function displayFacultyProfiles(container, data) {
    data.forEach(faculty => {
        const card = createFacultyCard(faculty);
        container.appendChild(card);
    });
}

function createFacultyCard(faculty) {
    const card = document.createElement('div');
    card.className = 'faculty-card';

    const img = document.createElement('img');
    img.src = faculty.photo || 'https://via.placeholder.com/300x200?text=No+Photo';
    img.alt = `${faculty.name} photo`;

    const content = document.createElement('div');
    content.className = 'faculty-card-content';

    const name = document.createElement('h2');
    name.textContent = faculty.name;

    const qualification = document.createElement('p');
    qualification.textContent = `Qualification: ${faculty.qualification}`;

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${faculty.phone}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${faculty.email}`;

    content.appendChild(name);
    content.appendChild(qualification);
    content.appendChild(phone);
    content.appendChild(email);

    card.appendChild(img);
    card.appendChild(content);

    return card;
}