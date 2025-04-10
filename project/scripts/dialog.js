const button = document.querySelector(".details");
const modal = document.getElementById("wind-details");

button.addEventListener("click", () => {
    displayWindDetails();
});

function displayWindDetails() {
    modal.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Color Code</h2>
    <p class="green">Green: Below 5mph</p>
    <p class="yellow">Yellow: 5-10mph</p>
    <p class="red">Red: 10+ mph</p>
    `;
    modal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}