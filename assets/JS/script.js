const textEditor = document.querySelector('#editor');
const textPreview = document.querySelector('#preview');
const converter = new showdown.Converter({tables: true, tasklists: true, smoothLivePreview: true})

textEditor.addEventListener('keyup', evt => {
  const { value } = evt.target;
  html = converter.makeHtml(value);
  textPreview.innerHTML = html;
})
