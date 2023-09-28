import Quill from 'quill'
import 'quill-paste-smart'
// import '../../../../node_modules/quill/dist/quill.snow.css'

const onQuill = () => {
  const elementQuill = document.getElementById('editor')
  if (!elementQuill) return

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ['image'],

    ['clean'], // remove formatting button
  ]

  new Quill(elementQuill, {
    theme: 'snow',
    modules: {
      toolbar: toolbarOptions,
    },
  })
}

export default onQuill
