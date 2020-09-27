function updatePostGridLinks(className, parentPage) {
  const veinPosts = Array.from(document.getElementsByClassName(className));

  if (veinPosts.length > 0) {
    veinPosts.forEach(post => {
      let veinHref = post.href;
      let slug = veinHref.split('/');
      slug = slug[slug.length - 2];
      post.href = `/${parentPage}/${slug}`;
      post.innerHTML = '<i class="fas fa-angle-double-right fa-2x"></i>';
    })
  }
}

export default updatePostGridLinks;
