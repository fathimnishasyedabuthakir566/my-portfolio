// Function for "Buy Now" button click
function buyNow(productName) {
    alert(`🛒 Thank you for purchasing: ${productName}!\nWe will contact you soon.`);
}

// Search Functionality
document.querySelector(".searchbar input").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".product-box");

    products.forEach(product => {
        let productName = product.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// Smooth Scrolling for Menu
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
