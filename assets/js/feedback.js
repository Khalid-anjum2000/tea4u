document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let rating = document.getElementById("rating").value;

    if (name && email && message) {
        let feedbackList = document.getElementById("feedbackList");
        let newFeedback = document.createElement("div");
        newFeedback.classList.add("feedback-item");
        newFeedback.innerHTML = `
            <p><strong>${name}</strong> (${email})</p>
            <p>${message}</p>
            <p>⭐ Rating: ${rating}/5</p>
            <hr>
        `;
        feedbackList.appendChild(newFeedback);

        // Clear form fields
        document.getElementById("feedbackForm").reset();
    }
});