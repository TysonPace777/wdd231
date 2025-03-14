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
    const container = document.getElementById('cards');
    container.innerHTML = '';

    if (Array.isArray(data)) {
      data.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('card');

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

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
      });
    }
  }

loadData();