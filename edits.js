
    // Function to find and replace email
    function findAndReplaceEmail() {
        // Find all <p> tags
        const paragraphs = document.getElementsByTagName("p");

        // Loop through each <p> tag
            for (let i = 0; i < paragraphs.length; i++) {
                // Check if the text content contains "Louis21329@gmail.com"
                console.log("Replaced Email")
            if (paragraphs[i].textContent.includes("Louis21329@gmail.com")) {
                // Replace the content with "an.cappello@healthyvibesnutritionist.com"
                paragraphs[i].textContent = "an.cappello@healthyvibesnutritionist.com";
            }
        }
    }

            // Counter to keep track of the number of runs
            let counter = 0;

            // Wrap the code to run every second until it runs 3 times
            const intervalId = setInterval(function () {
                // Run the function
                findAndReplaceEmail();

            // Increment the counter
            counter++;

            // Check if the counter reaches 3
            if (counter === 3) {
                // Clear the interval to stop further execution
                clearInterval(intervalId);
        }
    }, 1000); // 1000 milliseconds = 1 second
