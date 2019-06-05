
// Get sort option input
const sort = document.querySelector('.category');

// Get all images
const images = Array.from(document.querySelectorAll('.grid-item__img'));
const defaultGrid = [...images];

// Listen to change on input
sort.addEventListener('change', e => {
    const { value } = e.target;
    resetClasses();
    setTimeout(() => showImages(value))
})

// Reset classes
let resetClasses = () => {
    images.forEach(image => {
        image.parentElement.classList = 'grid-item';
    });
};

// Show active images
let showImages = value => {
    images.forEach(image => {
        const category = image.getAttribute('data-category');
        if (category.includes(value)) {
            image.parentElement.classList.add('active');
        } else {
            image.parentElement.classList.add('hide');
        }
    })
}











