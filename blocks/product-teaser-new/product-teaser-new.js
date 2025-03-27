export default async function decorate(block) {
    console.log('Product Teaser Block Loaded:', block);

    // Extract SKU values from the block content
    const skus = [...block.children].map((item) => item.textContent.trim());

    // Fetch product data from Adobe Commerce GraphQL API
    const query = `
        query {
            products(filter: { sku: { in: ["${skus.join('","')}"] } }) {
                items {
                    sku
                    name
                    price_range {
                        minimum_price {
                            regular_price {
                                value
                                currency
                            }
                        }
                    }
                    image {
                        url
                    }
                    url_key
                }
            }
        }
    `;

    const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const products = data?.data?.products?.items || [];

    // Replace block content with product teaser cards
    block.innerHTML = `
        <div class="product-teaser-container">
            ${products
                .map(
                    (product) => `
                    <div class="product-teaser">
                        <a href="/${product.url_key}">
                            <img src="${product.image.url}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>${product.price_range.minimum_price.regular_price.value} ${product.price_range.minimum_price.regular_price.currency}</p>
                        </a>
                    </div>
                `
                )
                .join('')}
        </div>
    `;
}
