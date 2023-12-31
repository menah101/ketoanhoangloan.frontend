import onClickAnchorLink from './components/ClickAnchorLink'
import onActiveMenu from './components/ActiveMenu'
import onScrollTop from './components/ScrollTop'
import onCollapse from './components/CollapseFaq'
import onDataTable from './components/DataTable'
import onQuill from './components/Quill'
import onPreviewImage from './components/PreviewImage'

const init = () => {
  onClickAnchorLink()
  onActiveMenu()
  onScrollTop()
  onCollapse()
  onDataTable()
  onQuill()
  onPreviewImage()
}

document.addEventListener('DOMContentLoaded', init)
