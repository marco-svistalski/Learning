const animals = [
    {
        name: 'Dog',
        image: 'https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-2.png',
    },
    {
        name: 'Cat',
        image: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
    },
    {
        name: 'Hamster',
        image: 'https://i2.wp.com/www.clubedosbichos.com.br/wp-content/uploads/2020/12/quanto-tempo-vive-um-hamster.jpg',
    },
    {
        name: 'Parrot',
        image: 'https://static.wikia.nocookie.net/disney/images/c/c8/Ze-carioca.jpg/revision/latest?cb=20150511191537&path-prefix=pt-br',
    },
    {
        name: 'Iguana',
        image: 'https://img.freepik.com/vetores-gratis/desenho-de-iguana-fofo_160606-452.jpg?w=360',
    }
];
  
const menuElement = document.getElementById('menu');
const imageElement = document.getElementById('image');
  
function cleanImageElement() {
    imageElement.innerHTML = '';
}
  
function createMenu() {
    animals.forEach(animal => {
        const button = document.createElement('button');
        button.innerText = animal.name;

        button.addEventListener('click', () => {
        cleanImageElement();
  
        const image = document.createElement('img');
        image.src = animal.image;
  
        imageElement.appendChild(image);
        });
  
        menuElement.appendChild(button);
    });
}

createMenu();
  