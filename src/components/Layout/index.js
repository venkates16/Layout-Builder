// Write your code here
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Layout = () => (
  <div className="layoutContent">
    <div className="contentLayout">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
