const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesStored = ['./images/pic1.jpg', 
                      './images/pic2.jpg', 
                      './images/pic3.jpg', 
                      './images/pic4.jpg', 
                      './images/pic5.jpg'
                    ]

const imagesDescript = ['Creepy zoomed-in eyeball positioned top-left. Eyeball\'s color is blueish. Image slightly out of focus',
                        'Wavy semi-curvacious lines colored in beige and blues. The image resembles cragged rock patterns but could potentially be a painting using multiple thick layers of paint. Colors look dull and faded, lacking light',
                        'Purple flowers that have a vibrant hue, and among them, there are a few white flowers with some brownish or burned edges, as if they were either older or damaged by the elements. The flowers seem to have a soft, velvety texture, typical of many types of flowering plants. The background is mostly green, indicating the presence of leaves. The overall focus of the image is on the flowers, with the background slightly blurred, putting emphasis on the blooms at the center of the image',
                        'An ancient Egyptian wall painting or artwork. There are three figures depicted in a traditional Egyptian style, with profile faces and frontal bodies. The central figure seems to represent Anubis, the jackal-headed god associated with mummification and the afterlife, identifiable by his black canine head. He is holding the hand of a figure to his right, which seems to be a human, possibly a pharaoh or a noble, indicated by the headdress and the ankh sign held in his hand, symbol of life. The third figure, on the left side, is less clear, but it looks like a person carrying something, perhaps part of a ceremonial process. Hieroglyphic text is visible above the figures, potentially offering context or prayers related to the scene. The colors are rich, with a warm golden background that suggests the reverence and importance of the depicted scene.',
                        'A butterfly with its wings fully spread, resting on a large green leaf. The butterfly has a pattern of brown, tan, and cream colors, with eyespots and bands on its wings that could serve as camouflage or as a mechanism to deter predators by mimicking the eyes of a larger animal. The leaf on which it rests has a vibrant green color, with some visible damage like small holes and tears, suggesting outdoor foliage. The butterfly appears to be at the center of the leaf, providing a symmetrical view that highlights the patterns on its wings. The backdrop is somewhat shadowed, likely beneath the canopy of foliage, which makes the butterfly and the leaf stand out as the bright subjects of the image.'
                    ]
/* Declaring the alternative text for each image file */

/* Looping through images. in OOP we learned about lambda expressions, I searched how I could use
the same here and thought to try it myself. I used imageSrc to maintain a concise method
of setting the src and the alt contents into each image in the array without the need to make
multiple lines for every image*/ 
imagesStored.forEach((imageSrc, index) => {
    const newImage = document.createElement('input');
    newImage.setAttribute('src', imageSrc);
    newImage.setAttribute('alt', imagesDescript[index]);
    newImage.setAttribute('tabindex', '0');
    newImage.setAttribute('type', 'image')
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.src = imageSrc; // Updating the displayed image to the clicked thumbnail's source
        displayedImage.alt = imagesDescript[index];
    })
})



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', lightdark)
btn.setAttribute('class', 'light')
btn.textContent = 'Darken'

function lightdark() {
    const currentClass = btn.getAttribute('class')
    if (currentClass === 'dark') { //if dark, make light
        btn.setAttribute('class', 'light');
        btn.setAttribute('aria-label', 'Picture made lighter')
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    } if (currentClass === 'light') { //if light make dark
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Lighten';
        btn.setAttribute('aria-label', 'Picture made darker')
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }

}


