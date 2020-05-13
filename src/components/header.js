import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>

      <div>
        <h5 className={headerStyles.links}>
          <Link
            to="/"
            className={headerStyles.link}
          >
            work
          </Link>
        </h5>
        <h5 className={headerStyles.links}>
          <Link
            to="/about"
            className={headerStyles.link}
          >
            about
          </Link>
        </h5>
      </div>

      <div>
        <h2>
          <Link
            to="/"
            className={headerStyles.title}
          >
            {siteTitle}
          </Link>
        </h2>
      </div>

      <div>
        <h5>
          <Link
            to="/"
            className={headerStyles.link}
          >
            Instagram
          </Link>
        </h5>
      </div>      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
