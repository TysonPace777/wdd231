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
            message = "Welcome Back!";
        } else {
            message = `It has been ${daysDiff} day${daysDiff > 1 ? 's' : ''} since you were last here.`;
        }
    }

    sidebar.textContent = message;
    localStorage.setItem("lastVisit", new Date().toISOString());
});