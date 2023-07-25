
    // Function to find and replace email
    function findAndReplaceEmail() {
        // Find all <p> tags
        const paragraphs = document.getElementsByTagName("p");
        const started_text = document.getElementsByTagName("strong");
        const dropdown = document.getElementsByTagName("a");
        // Loop through each <p> tag\

        var elementsToRemove = document.querySelectorAll(".ghl-form-wrap");

        // Loop through the elements and remove them one by one
        elementsToRemove.forEach(function (element) {
            element.remove();
        });

        
        for (let i = 0; i < dropdown.length; i++) {
            // Check if the text content contains "Louis21329@gmail.com"
            console.log("Replaced Email")
            if (dropdown[i].textContent.includes("Forms")) {
                // Replace the content with "an.cappello@healthyvibesnutritionist.com"
                dropdown[i].remove();
            }
            //if (dropdown[i].textContent.includes("Contact Us")) {
            //    // Replace the content with "an.cappello@healthyvibesnutritionist.com"
            //    dropdown[i].remove();
            //}
        }
            for (let i = 0; i < paragraphs.length; i++) {
                // Check if the text content contains "Louis21329@gmail.com"
                console.log("Replaced Email")
            if (paragraphs[i].textContent.includes("Louis21329@gmail.com")) {
                // Replace the content with "an.cappello@healthyvibesnutritionist.com"
                paragraphs[i].textContent = "dan.cappello@healthyvibesnutritionist.com";
                paragraphs[i].onclick = function () { window.location.href = 'mailto:dan.cappello@healthyvibesnutritionist.com'; };
                
            }
                if (paragraphs[i].textContent.includes("6040 Library Road, Bethel Park PA 15102")) {
                    // Replace the content with "an.cappello@healthyvibesnutritionist.com"
                    console.log("Placed Location Link")
                    paragraphs[i].onclick = function () { window.location.href = 'https://www.google.com/maps?q=6040+Library+Road,+Bethel+Park+PA+15102'; };
                }
        }

        for (let i = 0; i < started_text.length; i++) {
            // Check if the text content contains "Louis21329@gmail.com"
            
            if (started_text[i].textContent.includes("I accept patients in-person around the Bethel Park, PA area. If you are outside of this, I can provide help via telehealth sessions.")) {
                console.log("Replaced Email")
                // Replace the content with "an.cappello@healthyvibesnutritionist.com"
                started_text[i].textContent = "Call (724) 712-6724 now to schedule a consultation, or complete the contact form. We welcome all patients to visit us at our office in Bethel Park, and we offer telehealth sessions. We look forward to seeing you soon!";
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
