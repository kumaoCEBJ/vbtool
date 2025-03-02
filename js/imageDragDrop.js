
window.imageDragDrop = {
    initialize: function (sourceImage, dropZone,blazorComponent) {
        let draggedImage = null;

        sourceImage.addEventListener('dragstart', function (event) {
            draggedImage = sourceImage.src;
            event.dataTransfer.setData('text/plain', draggedImage);
        });
        dropZone.addEventListener('dragover', function (event) {
            event.preventDefault();
        });
        dropZone.addEventListener('drop', function (event) {
            event.preventDefault();           
            const droppedImage = event.dataTransfer.getData('text/plain');
            const relativePath = droppedImage.replace('https://localhost:7023/', ''); // 必要に応じて変更
            blazorComponent.invokeMethodAsync('UpdateDroppedImage', relativePath);//, dropZoneId);//, dropZone);
        });
    }

};

