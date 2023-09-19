import { throttle } from 'throttle-debounce'
import selectors from '../utils/selectors'

const { SELECTOR_TOGGLE_COLLAPSE } = selectors
const onCollapse = () => {
  const selectorCollapseBtn = document.querySelectorAll(
    SELECTOR_TOGGLE_COLLAPSE
  )
  const isCollapsed = 'is-collapsed'
  if (selectorCollapseBtn.length === 0) return

  selectorCollapseBtn.forEach((item) => {
    const selectorAnswer = item.nextElementSibling
    if (!selectorAnswer) return
    item.classList.add(isCollapsed)

    selectorAnswer.style.maxHeight = selectorAnswer.style.maxHeight
      ? null
      : selectorAnswer.scrollHeight + 'px'

    item.addEventListener('click', (event) => {
      event.preventDefault()
      item.classList.toggle(isCollapsed)

      selectorAnswer.style.maxHeight = selectorAnswer.style.maxHeight
        ? null
        : selectorAnswer.scrollHeight + 'px'
    })

    window.addEventListener(
      'resize',
      throttle(100, () => {
        if (item.classList.contains(isCollapsed)) {
          selectorAnswer.style.maxHeight = selectorAnswer.scrollHeight + 'px'
        }
      })
    )
  })
}

export default onCollapse
