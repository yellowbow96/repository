function submitKYC() {
    // Your submitKYC function logic here
    console.log('KYC form submitted');
}
function submitKYC() {
    // Simulate form submission
    // Replace this with actual form submission logic
    console.log('Submitting KYC form...');
    setTimeout(() => {
        // Show success message and hide form
        document.getElementById('kycForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }, 2000); // Simulating a delay for form submission
}

function showHomePage() {
    // Redirect to home page or load home page content
    console.log('Redirecting to home page...');
    // Replace window.location with the URL of your home page
    window.location.href = 'home.html';
}
