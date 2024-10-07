// Function for handling tabs
function openTab(tabName) {
    let i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

// Function to get a random element from each array
const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

// Function to generate a random menu and update display
function generateMenu() {
    const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
    document.getElementById('menu-content').innerText = menu;
}

// Exit popup
document.addEventListener('mouseleave', (event) => {
    if (event.clientY < 0) {
        document.getElementById('exit-popup').style.display = 'block';
    }
});

function closePopup() {
    document.getElementById('exit-popup').style.display = 'none';
}

// Drag and drop
function allowDrop(event) {
    event.preventDefault(); // Prevent default behavior
    event.dataTransfer.dropEffect = "move"; // Set drop effect
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    
    // Insert dragged element before the target
    const target = event.target;
    
    if (target.tagName === "IMG") {
        // If the target is an image, insert before it
        target.parentNode.insertBefore(draggedElement, target);
    } else if (target.classList.contains('gallery')) {
        // If the target is the gallery, append the dragged element
        target.appendChild(draggedElement);
    }
}

function drag(event) {
    // Vérifiez si dataTransfer est disponible
    if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', event.target.id);
    } else {
        console.error("dataTransfer est undefined");
    }
}

const img1 = document.createElement('img');
img1.id = 'image1';
img1.ondragstart = drag; // Assurez-vous que la fonction drag est définie ici

// Simuler l'événement avec DragEvent pour avoir dataTransfer
const dragStartEvent = new DragEvent('dragstart', {
    dataTransfer: new DataTransfer() // Créez un nouvel objet DataTransfer
});

// Déclenchez l'événement
img1.dispatchEvent(dragStartEvent);

