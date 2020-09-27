import RandomizeTestimonials from './randomizer';

export interface Testimonial {
  mainTestimonial: string;
  patientSignature: string;
}

export default class TestimonialInjector {
  static testimonial = RandomizeTestimonials.getRandom();
  static divToInject = document.getElementById('side-testimonial')!;

  static injectTestimonial() {
    if (this.divToInject) {
      this.divToInject
        .querySelector('.main-testimonial')!
        .innerHTML = this.testimonial.mainTestimonial;
      this.divToInject
        .querySelector('.patient-signature')!
        .innerHTML = this.testimonial.patientSignature;
    }
  }
}
