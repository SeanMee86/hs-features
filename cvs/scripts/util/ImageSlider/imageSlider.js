export default class ImageSlider {
    constructor(div, elementClassName, iconClassName) {
        this.div = div;
        this.elementClassName = elementClassName;
        this.iconClassName = iconClassName;
        /**
         * Mouse Events
         */
        this.onMouseDown = () => {
            window
                .addEventListener('mousemove', this.onMouseMove);
        };
        this.onMouseMove = (event) => {
            event.preventDefault();
            const leftPosition = event.pageX - this.element.parentElement.getBoundingClientRect().left;
            this.moveSlider(leftPosition);
        };
        this.removeMouseDownListener = () => {
            window
                .removeEventListener('mousemove', this.onMouseMove);
        };
        /**
         * Touch Events
         */
        this.onTouchStart = () => {
            window
                .addEventListener('touchmove', this.onTouchMove);
        };
        this.onTouchMove = (event) => {
            const leftPosition = event.touches[0].clientX - this.element.parentElement.getBoundingClientRect().left;
            this.moveSlider(leftPosition);
        };
        this.onTouchEnd = () => {
            window.removeEventListener('touchmove', this.onTouchMove);
        };
        this.resizeSlider = div.getElementsByClassName(iconClassName)[0];
        this.element = div.getElementsByClassName(elementClassName)[0];
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
     * Method that controls the movement of the slider
     * @param leftPosition
     */
    moveSlider(leftPosition) {
        const parentWidth = +window
            .getComputedStyle(this.element.parentElement)
            .getPropertyValue('width')
            .replace('px', '');
        if (leftPosition > 20 &&
            leftPosition < parentWidth - 20) {
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
