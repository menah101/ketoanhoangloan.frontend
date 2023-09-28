const onQuill = () => {
  const elementQuill = document.getElementById('editor')
  if (!elementQuill) return

  // eslint-disable-next-line no-undef
  new Quill(elementQuill, {
    theme: 'snow',
  })
}

export default onQuill
