export default function() {
  const urlPath = window.location.pathname+window.location.search;
  const links = Array.from(document.getElementsByClassName('nav-item'));
  const curUrlLink = links.filter(link => {
    return Array.from(link.children)[0].pathname === urlPath && Array.from(link.children)[0].pathname !== '/'
  });
  if(curUrlLink.length) {
    curUrlLink[0].className += ' active';
  }else if(urlPath === '/all-facilities/' || urlPath === '/find-a-facility/') {
    links[3].className += ' active';
  }
}
