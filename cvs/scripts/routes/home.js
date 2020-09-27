import { setEqualHeight } from '../util/setEqualHeight';

export default {
  init() {
    // JavaScript to be fired on the home page
    $(document).ready(function(){
      $('#freeVeinModal').modal('show');
    })
    setEqualHeight('.section-1-columns', '.section-1-cover');
    window.addEventListener('resize', function() {
      setEqualHeight('.section-1-columns', '.section-1-cover');
    })
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
