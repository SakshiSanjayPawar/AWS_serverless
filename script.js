const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');
const subscribeBtn = document.getElementById('subscribe-btn');
const counter = document.querySelector(".counter-number");

// Function to display the search result
function displaySearchResult(message) {
    searchResult.innerHTML = message;
    searchResult.style.display = 'block'; // Show the search result
}

// Function to hide the search result
function hideSearchResult() {
    searchResult.style.display = 'none'; // Hide the search result
}

// Function to handle search button click
async function handleSearch() {
    const searchQuery = document.getElementById('search-input').value.trim();
    if (searchQuery) {
        try {
            const url = `https://hmji3r2m2dyaltlsjyk3wfwmlq0yygja.lambda-url.us-east-1.on.aws/?search=${encodeURIComponent(searchQuery)}`;
            const response = await fetch(url);
            const data = await response.json();
            
            // Process and display the search result
            if (data && data.message) {
                const resultMessage = `Search results for "${searchQuery}": ${data.message}`;
                displaySearchResult(resultMessage);
                
                // Update the viewer count
                if (data.views !== undefined) {
                    counter.textContent = `${data.views}`;
                }
            } else {
                displaySearchResult('No results found.');
            }
        } catch (error) {
            displaySearchResult('Error fetching search results.');
            console.error('Error fetching search results:', error);
        }
    } else {
        hideSearchResult();
    }
}

// Add event listener for search button click
searchBtn.addEventListener('click', handleSearch);

// Function to update the viewer count
async function updateCounter() {
    try {
        let response = await fetch("https://hmji3r2m2dyaltlsjyk3wfwmlq0yygja.lambda-url.us-east-1.on.aws/");
        if (!response.ok) throw new Error('Network response was not ok.');
        let data = await response.json();
        counter.innerHTML = `Viewers: ${data.views || 0}`;
    } catch (error) {
        counter.innerHTML = 'Error fetching viewers.';
        console.error('Error fetching viewer count:', error);
    }
}

// Initial call to update the viewer count
updateCounter();

// Handle subscribe button click
subscribeBtn.addEventListener('click', () => {
    subscribeBtn.textContent = 'Subscribed';
    subscribeBtn.disabled = true; // Disable the button after subscription
});
