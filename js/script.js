(function (w, d, s, o, f, js, fjs) {
  w['TagEmbedObject'] = o;
  w[o] = w[o] || function () {
    (w[o].q = w[o].q || []).push(arguments);
  };
  js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'tagembed', '//widget.tagembed.com/embed.min.js'));


tagembed('load', 'widget-embed-code-goes-here');