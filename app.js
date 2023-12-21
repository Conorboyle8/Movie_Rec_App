var genresBtn = document.getElementById("genresBtn");
var genresDropdown = document.getElementById("genresDropdown");

// Add a click event listener to the button
genresBtn.addEventListener("click", function() {        // this tells the java script to listen and know when to use its function
    // Toggle the visibility of the dropdown content
    if (genresDropdown.style.display === "" || genresDropdown.style.display === "none") {
        genresDropdown.style.display = "block";
    } else {
        genresDropdown.style.display = "none";
    }
});