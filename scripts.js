// Function to handle joining a group
function joinGroup(url) {
    // Log the URL to verify it's being passed correctly
    console.log('Redirecting to:', url);
    window.location.href = url;
}

// Optionally, you can also add an event listener to ensure the function is properly attached to the buttons
document.addEventListener('DOMContentLoaded', (event) => {
    // Find all buttons with the "joinGroup" function
    const buttons = document.querySelectorAll('button');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the URL from the button's data attribute
            const url = this.getAttribute('data-url');
            if (url) {
                joinGroup(url);
            }
        });
    });
});
