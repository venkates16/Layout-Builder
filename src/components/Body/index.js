// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const leftBar = () => (
    <div className="navleft">
      <h1>Left Navbar Menu</h1>
      <ul>
        {[1, 2, 3, 4].map(each => (
          <li key={each}>items {each}</li>
        ))}
      </ul>
    </div>
  )
  const content = () => (
    <div className="navleft">
      <h1>Content</h1>
      <p>Lorem ipsum</p>
    </div>
  )
  const rightBar = () => (
    <div className="navleft">
      <h1> Right Navbar Menu</h1>
      <div>
        <p>Ad 1</p>
        <p>Ad 2</p>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="alignLeftBar">
            {showLeftNavbar && leftBar()}
            {showContent && content()}
            {showRightNavbar && rightBar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
