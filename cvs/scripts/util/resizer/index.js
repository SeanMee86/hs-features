import { Resizer } from './resize';
export default function initializeResizer(sizeArray) {
    const resizer = new Resizer();
    sizeArray.forEach(size => {
        document
            .getElementById(size.targetId)
            .addEventListener('click', () => {
            resizer.updateSize(size.sizeValue);
        });
    });
}
