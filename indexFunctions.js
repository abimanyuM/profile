

document.addEventListener("DOMContentLoaded", function () {
    // Simulate the loading time
    setTimeout(function () {
        // Remove the loading screen
        document.querySelector('.loading-screen').style.display = 'none';
    }, 3500); // Change the value to match your actual loading time
});
