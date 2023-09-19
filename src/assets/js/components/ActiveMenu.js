import selectors from '../utils/selectors'
import attributies from '../utils/attributies'
const { SELECTOR_BODY, SELECTOR_ITEM_MENU } = selectors
const { DATA_ACTIVE_MENU, DATA_MENU } = attributies

const IS_ACTIVE = 'is-active'

const onActiveMenu = () => {
  const selectorBody = document.querySelector(SELECTOR_BODY)
  const selectorItemMenu = document.querySelectorAll(SELECTOR_ITEM_MENU)
  if (selectorBody.length === null) return
  const getAttrActiveMenu = selectorBody.getAttribute(DATA_ACTIVE_MENU)

  selectorItemMenu.forEach((element, index) => {
    element.classList.remove(IS_ACTIVE)
    if (element.getAttribute(DATA_MENU) === getAttrActiveMenu) {
      selectorItemMenu[index].classList.add(IS_ACTIVE)
    }
  })
}

export default onActiveMenu
