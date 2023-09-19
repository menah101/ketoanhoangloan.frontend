import { throttle } from 'throttle-debounce'
import selectors from '../utils/selectors'
import 'smoothscroll-polyfill'

const { SELECTOR_ANCHOR_LINK } = selectors

const onClickAnchorLink = () => {
  const selectorAnchorLink = document.querySelectorAll(SELECTOR_ANCHOR_LINK)
  if (selectorAnchorLink.length === 0) return

  selectorAnchorLink.forEach((item) => {
    item.addEventListener(
      'click',
      throttle(100, (event) => {
        event.preventDefault()
        const target = item.getAttribute('href').replace('#', '')
        const targetElement = document.getElementById(target)
        if (!targetElement) return

        window.scroll({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        })
      })
    )
  })
}

export default onClickAnchorLink
