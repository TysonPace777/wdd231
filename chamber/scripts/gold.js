async function loadData() {
    try {
        const response = await fetch('data/members.json');

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        displayData(data.businesses);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayData(data) {
    const container = document.getElementById('gold');
    container.innerHTML = '';

    const goldMembers = data.filter(business => business.membership === 3);

    if (goldMembers.length > 1) {
        const randomIndex1 = Math.floor(Math.random() * goldMembers.length);
        let randomIndex2 = Math.floor(Math.random() * goldMembers.length);

        while (randomIndex1 === randomIndex2) {
            randomIndex2 = Math.floor(Math.random() * goldMembers.length);
        }

        const randomGoldMembers = [goldMembers[randomIndex1], goldMembers[randomIndex2]];

        randomGoldMembers.forEach(business => {
            const gold = document.createElement('div');
            gold.classList.add('gold');

            const spotlight = document.createElement('h3');
            spotlight.textContent = "Spotlight";

            const name = document.createElement('h3');
            name.textContent = business.name;

            const address = document.createElement('p');
            address.textContent = `Address: ${business.address}`;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${business.phone}`;

            const website = document.createElement('a');
            website.href = `http://${business.website}`;
            website.textContent = `Visit Website`;
            website.target = '_blank';

            const image = document.createElement('img');
            image.src = business.image;
            image.alt = `${business.name} image`;
            image.width = 150;
            image.loading = 'lazy';

            const level = document.createElement('p');
                level.textContent = 'Membership: Gold'
        
            gold.appendChild(spotlight)
            gold.appendChild(image);
            gold.appendChild(name);
            gold.appendChild(address);
            gold.appendChild(phone);
            gold.appendChild(level);
            gold.appendChild(website);

            container.appendChild(gold);
        });
    }
}

loadData();