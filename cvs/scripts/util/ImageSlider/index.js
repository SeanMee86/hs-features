import ImageSlider from './imageSlider';
class InitImageSlider {
    constructor(elementClassName, iconClassName, elementContainerClass) {
        this.elementClassName = elementClassName;
        this.iconClassName = iconClassName;
        this.elementContainerClass = elementContainerClass;
        this.beforeAfterImageSliders = Array
            .from(document.getElementsByClassName(this.elementContainerClass));
        if (this.beforeAfterImageSliders.length > 0)
            this.beforeAfterImageSliders.forEach(slider => {
                new ImageSlider(slider, this.elementClassName, this.iconClassName);
            });
    }
}
export default InitImageSlider;
