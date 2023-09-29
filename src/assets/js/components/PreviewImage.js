import selectors from '../utils/selectors'

const { SELECTOR_UPLOAD_FILE, SELECTOR_PREVIEW_IMAGE } = selectors
const onPreviewImage = () => {
  const selectorUploadFile = document.querySelector(SELECTOR_UPLOAD_FILE)
  const selectorPreviewImage = document.querySelector(SELECTOR_PREVIEW_IMAGE)

  if (!selectorUploadFile || !selectorPreviewImage)return

  selectorUploadFile.addEventListener(
    'change',
    (event) => {
      const files = event.target.files
      const file = files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          selectorPreviewImage.setAttribute('src', e.target.result)
        }
        reader.readAsDataURL(file)
      }
    },
    false
  )
}

export default onPreviewImage
