const onQuill = () => {
  const elementQuill = document.getElementById('editor')
  if (!elementQuill) return

  new Quill(elementQuill, {
    theme: 'snow'
  });
}

export default onQuill
