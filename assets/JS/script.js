const textEditor = document.querySelector('#editor');
const textPreview = document.querySelector('#preview');

textEditor.addEventListener('keyup', evt => {
  const { value } = evt.target;
  var converter = new showdown.Converter(),
    html = converter.makeHtml(value);
  textPreview.innerHTML = html;
})
