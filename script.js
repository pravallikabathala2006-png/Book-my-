document.getElementById("bookBtn").addEventListener("click", function () {

    let movie = document.getElementById("movie").value;
    let seats = document.getElementById("seats").value;

    if (movie === "" || seats === "") {
        alert("Please select movie and seats.");
        return;
    }

    document.getElementById("message").innerHTML =
        "✅ <b>Booking Successful!</b><br>" +
        "🎬 Movie: " + movie + "<br>" +
        "💺 Seats: " + seats;

    // Try to close the window after 2 seconds.
    // Some browsers block window.close() on normally opened tabs.
    setTimeout(function () {
        window.close();
    }, 2000);
});
