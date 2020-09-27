export default class ImageSlider {

  element: HTMLElement;
  resizeSlider: HTMLElement;

  constructor(
    private div: HTMLElement,
    private elementClassName: string,
    private iconClassName: string
  ) {
    this.resizeSlider = div.getElementsByClassName(iconClassName)[0] as HTMLElement;
    this.element = div.getElementsByClassName(elementClassName)[0] as HTMLElement;
    this.resizeSlider
      .addEventListener('mousedown', this.onMouseDown);
    this.resizeSlider
      .addEventListener('touchstart', this.onTouchStart);
    window
      .addEventListener('resize', () => {
        this.resetArrowPosition();
      });
    window
      .addEventListener('mouseup', this.removeMouseDownListener);
    window
      .addEventListener('touchend', this.onTouchEnd);
  }

  /**
   * Mouse Events
   */
  onMouseDown = () => {
    window
      .addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    const leftPosition = event.pageX - (this.element.parentElement as HTMLElement).getBoundingClientRect().left;
    this.moveSlider(leftPosition);
  }

  removeMouseDownListener = () => {
    window
      .removeEventListener('mousemove', this.onMouseMove);
  }

  /**
   * Touch Events
   */
  onTouchStart = () => {
    window
      .addEventListener('touchmove', this.onTouchMove);
  }

  onTouchMove = (event: TouchEvent) => {
    const leftPosition = event.touches[0].clientX - (this.element.parentElement as HTMLElement).getBoundingClientRect().left;
    this.moveSlider(leftPosition);
  }

  onTouchEnd = () => {
    window.removeEventListener('touchmove', this.onTouchMove);
  }

  /**
   * Method that controls the movement of the slider
   * @param leftPosition
   */
  moveSlider(leftPosition: number) {
    const parentWidth = +window
      .getComputedStyle(this.element.parentElement as HTMLElement)
      .getPropertyValue('width')
      .replace('px', '');
    if (
      leftPosition > 20 &&
      leftPosition < parentWidth - 20
    ) {
      this.resizeSlider.style.left = leftPosition + 'px';
      this.element.style.width = (parentWidth - +this.resizeSlider.style.left.replace('px', '') + 2) + 'px';
    }
  }

  /**
   * Method used to reset the arrow position on screen resize or touchend event
   */
  resetArrowPosition() {
    this.resizeSlider.style.left = '';
    this.element.style.width = '';
  }
}
