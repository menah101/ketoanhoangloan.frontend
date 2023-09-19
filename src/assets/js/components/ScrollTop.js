import { throttle } from 'throttle-debounce'
import selectors from '../utils/selectors'
import 'smoothscroll-polyfill'

const { SELECTOR_GO_TOP, SELECTOR_GO_TOP_LINK } = selectors

const IS_FIXED = 'is-fixed'

const onScrollTop = () => {
  const selectorGoTop = document.querySelector(SELECTOR_GO_TOP)
  const selectorGoTopLink = document.querySelector(SELECTOR_GO_TOP_LINK)

  if (!(selectorGoTop && selectorGoTopLink)) return
  const observable_scroll = throttle(10, () => {
    const documentElement = document.documentElement
    const viewportHeight = window.innerHeight
    const winScrollTop =
      (window.pageYOffset || documentElement.scrollTop) -
      (documentElement.clientTop || 0) +
      viewportHeight
    if (selectorGoTop.length === 0) return
    const isDisplayRange = winScrollTop > viewportHeight + 50
    selectorGoTopLink.classList.toggle(IS_FIXED, isDisplayRange)
  })

  const onScrollButton = (event) => {
    event.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  document.addEventListener('scroll', observable_scroll)
  selectorGoTopLink.addEventListener('click', onScrollButton)
}

export default onScrollTop
