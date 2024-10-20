// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="layoutContainer">
          <div className="leftAlign">
            {' '}
            <h1 className="layout">Layout</h1>
            <div className="checkContent">
              <div className="align">
                <input
                  type="checkbox"
                  id="check"
                  checked={showContent}
                  name="content"
                  onChange={onToggleShowContent}
                />
                <label htmlFor="check">Content</label>
              </div>
              <div className="align">
                <input
                  type="checkbox"
                  id="left"
                  checked={showLeftNavbar}
                  onChange={onToggleShowLeftNavbar}
                />
                <label htmlFor="left">Left Navbar</label>
              </div>
              <div className="align">
                <input
                  type="checkbox"
                  id="right"
                  checked={showRightNavbar}
                  onChange={onToggleShowRightNavbar}
                />
                <label htmlFor="right">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
