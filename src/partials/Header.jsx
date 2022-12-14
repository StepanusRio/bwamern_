import React from 'react'
import BrandIcon from './IconText'
import Button from 'components/Button'
import Fade from 'react-reveal/Fade'
export default function Header(props) {
  const getNavLinkClass = path => {
    return props.location.pathname === path ? " active" : " ";
  }
  return (
    <Fade>
      <header className='spacing-sm'>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browseby")}`}>
                  <Button className="nav-link" type="link" href="/browseby">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  )
}
