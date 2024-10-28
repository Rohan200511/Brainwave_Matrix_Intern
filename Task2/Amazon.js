// Wait for the page to load before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Select the cart icon and counter
    const cartCounter = document.createElement('span');
    cartCounter.id = 'cart-counter';
    cartCounter.textContent = getCartItems().length; // Initial cart count
    document.querySelector('.nav-cart').appendChild(cartCounter);

    // Add event listeners to all 'Shop now' buttons
    const shopButtons = document.querySelectorAll('.shop-section a, #shop_2 a');
    shopButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent page reload
            addToCart(); // Add item to the cart
        });
    });

    // Function to add an item to the cart
    function addToCart() {
        let cartItems = getCartItems();
        cartItems.push('item'); // Add a dummy item (you can expand this)
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartCounter(cartItems.length);
        alert('Item added to cart!');
    }

    // Function to get cart items from local storage
    function getCartItems() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    // Function to update the cart counter display
    function updateCartCounter(count) {
        cartCounter.textContent = count;
    }
});
