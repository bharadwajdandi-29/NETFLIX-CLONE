// Get the modal
var modal = document.getElementById("movie-modal");

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-button")[0];

// Get all movie thumbnails
var movieThumbnails = document.getElementsByClassName("movie-thumbnail");

// Function to open the modal
function openModal(event) {
    modal.style.display = "block";
    var movieTitle = event.target.alt;
    modal.getElementsByTagName("h2")[0].textContent = movieTitle;
    modal.getElementsByTagName("p")[0].textContent = "Details about " + movieTitle;
}

// Attach click event to each movie thumbnail
for (var i = 0; i < movieThumbnails.length; i++) {
    movieThumbnails[i].onclick = openModal;
}

// Function to close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

