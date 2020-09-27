// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import pageId39 from './routes/careers';
import pageId194 from './routes/findAFacility';
import pageId251 from './routes/testimonials';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
  // Careers Page
  pageId39,
  // Find a Facility Page
  pageId194,
  // Testimonials Page
  pageId251,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
