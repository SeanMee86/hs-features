import ImageSlider from './imageSlider';

class InitImageSlider {

  beforeAfterImageSliders: Element[];

  constructor(
    private elementClassName: string,
    private iconClassName: string,
    private elementContainerClass: string
  ) {
    this.beforeAfterImageSliders = Array
      .from(document.getElementsByClassName(this.elementContainerClass));

    if(this.beforeAfterImageSliders.length > 0)
      this.beforeAfterImageSliders.forEach(slider => {
        new ImageSlider(
          slider as HTMLElement,
          this.elementClassName,
          this.iconClassName
        )
      });
  }
}

export default InitImageSlider;
