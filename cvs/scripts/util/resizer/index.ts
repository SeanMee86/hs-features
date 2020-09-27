import { Resizer } from './resize';
import { Size } from "./size.model";

export default function initializeResizer(sizeArray: Size[]): void {
  const resizer = new Resizer();
  sizeArray.forEach(size => {
    document
      .getElementById(size.targetId)!
      .addEventListener('click', () => {
        resizer.updateSize(size.sizeValue)
      })
  })
}
