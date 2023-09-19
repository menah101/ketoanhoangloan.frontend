import onClickAnchorLink from './components/ClickAnchorLink'
import onActiveMenu from './components/ActiveMenu'
import onScrollTop from './components/ScrollTop'
import onCollapse from './components/CollapseFaq'

const init = () => {
  onClickAnchorLink()
  onActiveMenu()
  onScrollTop()
  onCollapse()
}

document.addEventListener('DOMContentLoaded', init)
