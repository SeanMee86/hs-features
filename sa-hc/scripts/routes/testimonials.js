import { testimonialHeightHandler } from '../util/EmployeeTestimonials/testimonialHeightHandler';
import initTestimonials from '../util/EmployeeTestimonials';
import foreach from '../util/Polyfills/foreach';
import arrayFrom from '../util/Polyfills/arrayFrom';

export default {
  init() {
    foreach()
    arrayFrom()
  },
  finalize() {
    testimonialHeightHandler();
    initTestimonials();
  },
};
