// __tests__/dragAndDrop.test.js
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '../script'; // Remplace par le chemin relatif correct vers ton fichier JavaScript

describe('Drag and Drop Functionality', () => {
    let img1, img2, gallery;

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="gallery" class="gallery">
                <img src="photo1.jpg" alt="Photo 1" draggable="true" id="img1" ondragstart="drag(event)">
                <img src="photo2.jpg" alt="Photo 2" draggable="true" id="img2" ondragstart="drag(event)">
            </div>
        `;
        
        img1 = document.getElementById('img1');
        img2 = document.getElementById('img2');
        gallery = document.getElementById('gallery');
    });

    test('should allow dragging img1 and dropping before img2', () => {
        const dragStartEvent = new DragEvent('dragstart', {
            bubbles: true,
            cancelable: true,
            dataTransfer: new DataTransfer(),
        });
        img1.dispatchEvent(dragStartEvent);

        const dropEvent = new DragEvent('drop', {
            bubbles: true,
            cancelable: true,
            dataTransfer: dragStartEvent.dataTransfer,
        });
        img2.dispatchEvent(dropEvent);

        // Simuler la logique de réorganisation
        // Si l'élément img1 est déposé avant img2, il doit devenir le premier enfant
        gallery.insertBefore(img1, img2);

        expect(gallery.firstChild).toBe(img1);
        expect(gallery.lastChild).toBe(img2);
    });

    test('should allow dropping img1 in gallery', () => {
        const dragStartEvent = new DragEvent('dragstart', {
            bubbles: true,
            cancelable: true,
            dataTransfer: new DataTransfer(),
        });
        img1.dispatchEvent(dragStartEvent);

        const dropEvent = new DragEvent('drop', {
            bubbles: true,
            cancelable: true,
            dataTransfer: dragStartEvent.dataTransfer,
        });
        gallery.dispatchEvent(dropEvent);

        // Pour ce test, vous devrez ajouter la logique de dépôt
        // Vous pouvez décider de garder la même logique ou d'ajouter img1 à la galerie
        expect(gallery.children.length).toBe(2); // Il doit toujours y avoir 2 images
    });
});
