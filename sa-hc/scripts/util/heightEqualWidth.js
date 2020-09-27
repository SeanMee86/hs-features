function setEqualHeight() {
  const section = document.getElementById('section-6');
  const posts = Array.from(section.getElementsByTagName('article'));
  posts.forEach(post => {
    post.style.height = posts[0].offsetWidth + 'px';
  })
}

export default function() {
  setEqualHeight();
  window.addEventListener('resize', setEqualHeight);
}
