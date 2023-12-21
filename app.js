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
function searchMovies() {
                // Get the input value
                var searchTerm = document.getElementById("search").value.toLowerCase();

                // Movie data (replace with your actual movie data)
                var movieData = [
                    { title: "The Shawshank Redemption", genre: "Drama" },
                    { title: "The Godfather", genre: "Crime" },
                    { title: "Inception", genre: "Sci-Fi" },
                    { title: "Titanic", genre: "Romance" },
                    { title: "Avatar", genre: "Action" }
                ];

                // Perform the search logic
                var results = [];

                for (var i = 0; i < movieData.length; i++) {
                    if (movieData[i].title.toLowerCase().includes(searchTerm)) {
                        results.push(movieData[i]);
                    }
                }

                // Display the search results
                displaySearchResults(results);
            }

            function displaySearchResults(results) {
                var resultContainer = document.createElement("div");
                resultContainer.classList.add("search-results");

                if (results.length === 0) {
                    resultContainer.textContent = "No results found.";
                } else {
                    for (var i = 0; i < results.length; i++) {
                        var resultItem = document.createElement("p");
                        resultItem.textContent = results[i].title + " - Genre: " + results[i].genre;
                        resultContainer.appendChild(resultItem);
                    }
                }

                // Replace or append the search results to your HTML
                var contentDiv = document.querySelector(".content");
                contentDiv.appendChild(resultContainer);
            }
