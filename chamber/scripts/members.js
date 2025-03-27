const members = [
    {
        level: 'Non Profit Membership',
        description: 'Benefits include business included in chamber site. No fees.'
    },
    {
        level: 'Bronze Membership',
        description: 'Benefits include small spotlight times and help from businesses. Small fees.'
    },
    {
        level: 'Silver Membership',
        description: 'Benefits include small discounts for advertising and spotlight time. Medium fees.'
    },
    {
        level: 'Gold Membership',
        description: 'Benefits include discounts for advertising and most spotlight time. Also has an exclusive Gold member meal once every month. Highest fees.'
    }
]


const buttons = document.querySelectorAll(".details");
const modal = document.getElementById("membership-details");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        displayMemberDetails(members[index]);
    });
});

function displayMemberDetails(member) {
    modal.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${member.level}</h2>
    <p>${member.description}</p>
    `;
    modal.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}