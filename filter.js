// Get filter option input
const filter = document.querySelector('.filter');

// Get grid wrapper
const grid = document.querySelector('.products-grid');

// All images are already stored in const "images"

// Listen to change on filter

filter.addEventListener('change', e => {
    const { value } = e.target;
    sortBy(value);
})


let sortBy = type => {
    let sortedItems = [];

    // Sort by price (descending)

    if (type === 'price') {
        sortedItems = images.sort((a, b) => {
            a = a.getAttribute('data-price');
            b = b.getAttribute('data-price');
            console.log('done price sorting')
            return b - a;
        })
    }

    // Sort by name
    else if (type === 'name') {
        sortedItems = images.sort((a, b) => {
            a = a.getAttribute('data-name');
            b = b.getAttribute('data-name');
            if (a > b) return 1;
            if (b > a) return -1;
            return 0;
        })
    }
    // Show default
    else {
        sortedItems = defaultGrid;
    }

    // Replace HTML
    grid.innerHTML = '';
    sortedItems.forEach(image => {
        console.log('zmieniono html')
        grid.appendChild(image.getRootNode());
    })

}

