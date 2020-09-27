export default function(id, uri, entryPoint, callBack) {
    const tag = document.createElement('script');
    tag.src = uri;
    tag.id = id;
    tag.setAttribute('samesite', 'None');
    tag.type = 'text/javascript';
    tag.async = true;
    tag.onload = () => {
      callBack();
    };
    const scriptEntryPoint = document.getElementById(entryPoint);
    scriptEntryPoint.insertBefore(tag, scriptEntryPoint[0]);
}
