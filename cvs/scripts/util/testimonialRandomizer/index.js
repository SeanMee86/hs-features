import RandomizeTestimonials from './randomizer';
export default class TestimonialInjector {
    static injectTestimonial() {
        if (this.divToInject) {
            this.divToInject
                .querySelector('.main-testimonial')
                .innerHTML = this.testimonial.mainTestimonial;
            this.divToInject
                .querySelector('.patient-signature')
                .innerHTML = this.testimonial.patientSignature;
        }
    }
}
TestimonialInjector.testimonial = RandomizeTestimonials.getRandom();
TestimonialInjector.divToInject = document.getElementById('side-testimonial');
