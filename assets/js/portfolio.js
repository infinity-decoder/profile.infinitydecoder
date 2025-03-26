document.addEventListener("DOMContentLoaded", function () {
    /**
     * Define your portfolio data here.
     */
    const projects = [
        {
            id: "1",
            title: "Intrusion Detection System",
            category: "App",
            client: "Virtual University Pakistan",
            date: "09 May, 2025",
            url: "https://ids.infinitydecoder.com/",
            description: "Real Time intrusion detection system using ensemble learning techniques.",
            images: [
                
                "assets/img/portfolio/portfolio-01-details-1.jpg"
                
            ]
        },
        {
            id: "2",
            title: "Infinity decoder",
            category: "Web",
            client: "Self"  ,
            date: "15 April, 2020",
            url: "https://infinitydecoder.com",
            description: "An blog to keep posting solutions.",
            images: [
                
                "assets/img/portfolio/portfolio-02-details-1.jpg"
            ]
        },
        {
            id: "3",
            title: "Infinity decoder Notes",
            category: "Website",
            client: "Self"  ,
            date: "15 April, 2020",
            url: "https://notes.infinitydecoder.com",
            description: "Infinity decoder is an writer who write on self discovery and social issues.",
            images: [
                
                "assets/img/portfolio/portfolio-03-details-1.jpg"
            ]
        },
        {
            id: "4",
            title: "DarsGhah",
            category: "Website",
            client: "Self"  ,
            date: "24 March, 2020",
            url: "https://darsghah.com",
            description: "An website was developed to provide educational content including past papers, MCQs and excercises .",
            images: [
                
                "assets/img/portfolio/portfolio-04-details-1.webp"
            ]
        },
        {
            id: "5",
            title: "Book Bank",
            category: "Store",
            client: "Self"  ,
            date: "15 April, 2020",
            url: "https://darsghah.com/shop/",
            description: "An E-commerce store for books.",
            images: [
                
                "assets/img/portfolio/portfolio-05-details-1.jpg"
            ]
        },
        {
            id: "6",
            title: "Support System",
            category: "Web",
            client: "Self"  ,
            date: "15 April, 2020",
            url: "https://support.infinitydecoder.com/",
            description: "An Ticket generating support system to streamline the client support.",
            images: [
                
                "assets/img/portfolio/portfolio-06.webp"
            ]
        }
        // Add more projects as needed...
    ];

    /**
     * Utility function to get a query parameter value by name.
     */
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the project ID from the URL (e.g., ?id=1)
    const projectId = getQueryParam("id");

    // Find the project object matching the projectId
    const project = projects.find(p => p.id === projectId);

    // Ensure the portfolio details section exists before modifying it
    const portfolioDetails = document.getElementById("portfolio-details");

    if (project) {
        // Update project details
        document.getElementById("portfolio-title").textContent = project.title;
        document.getElementById("portfolio-category").textContent = project.category;
        document.getElementById("portfolio-client").textContent = project.client;
        document.getElementById("portfolio-date").textContent = project.date;
        document.getElementById("portfolio-url").href = project.url;
        document.getElementById("portfolio-description").textContent = project.description;

        // Update the carousel
        const carousel = document.getElementById("portfolio-carousel");

        if (carousel) {
            carousel.innerHTML = ""; // Clear existing content

            project.images.forEach(function (imgSrc) {
                const item = document.createElement("div");
                item.classList.add("item"); // Required by Owl Carousel

                const imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                imgElement.classList.add("img-fluid");
                imgElement.alt = project.title;

                item.appendChild(imgElement);
                carousel.appendChild(item);
            });

            // Initialize Owl Carousel AFTER adding images
            $(document).ready(function () {
                $("#portfolio-carousel").owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    responsive: {
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 }
                    }
                });
            });
        } else {
            console.error("Element with ID 'portfolio-carousel' not found.");
        }
    } else {
        if (portfolioDetails) {
            portfolioDetails.innerHTML =
                "<div class='container'><p>Project not found.</p></div>";
        } else {
            console.error("Element with ID 'portfolio-details' not found.");
        }
    }
});
