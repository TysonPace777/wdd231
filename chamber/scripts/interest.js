async function loadItems() {
    try {
        const response = await fetch('data/items.json');

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const items = await response.json();

        displayItems(items.interest);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayItems(items) {
    const container = document.getElementById('discover');
    container.innerHTML = '';

    if (Array.isArray(items)) {
        items.forEach(interest => {
            const card = document.createElement('div');
            card.classList.add('card');

            const name = document.createElement('h2');
            name.classList.add('name');
            name.textContent = interest.name;

            const address = document.createElement('address');
            address.textContent = `Address: ${interest.address}`;

            const image = document.createElement('img');
            image.src = interest.image;
            image.alt = `${interest.name} image`;
            image.width = 300;
            image.loading = 'lazy';

            const description = document.createElement('p');
            description.textContent = interest.description;

            const button = document.createElement('button');
            button.textContent = "Learn More";

            button.addEventListener("click", () => {
                displayItemDetails(interest);
            })

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(description);
            card.appendChild(address);
            card.appendChild(button);

            container.appendChild(card);
        });
    }
}

loadItems();

//Learn more
function displayItemDetails(interest) {
    const courseDetails = document.getElementById("learn-more");
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${interest.name}</h2>
    <h3>${interest.address}</h3>
    <p>${interest.description}</p>
    `;
    courseDetails.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

//visit times
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const lastVisit = localStorage.getItem("lastVisit");

    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const currentDate = new Date();
        const timeDiff = currentDate - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDiff} day${daysDiff > 1 ? 's' : ''} ago.`;
        }
    }

    sidebar.textContent = message;
    localStorage.setItem("lastVisit", new Date().toISOString());
});