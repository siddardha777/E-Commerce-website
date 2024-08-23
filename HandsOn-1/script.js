const products = [
    {
        name: "Shirt",
        price: "$20",
        image: "../HandsOn-1/img/shirt-1.jpg"  
    },
    {
        name: "Men's fashion",
        price: "$30",
        image: "../HandsOn-1/img/shirt-2.jpg"  
    },
    {
        name: "MEN'S FASHIOM",
        price: "$40",
        image: "../HandsOn-1/img/shirt-3.jpg"  
    },
    {
        name: "Shirt with custom price",
        price: "$50",
        image: "../HandsOn-1/img/shirt-4.jpg"  
    },
    {
        name: "Product 5",
        price: "$70",
        image: "../HandsOn-1/img/shirt-5.jpg" 
    },
    {
        name: "Product 6",
        price: "$40",
        image: "../HandsOn-1/img/pant-1.jpg"  
    },

];

function loadProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>BUY</button>
        `;

        productList.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);


// Product Cart Items


