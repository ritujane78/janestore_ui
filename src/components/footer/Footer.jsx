import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import './footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        Built with
        <FontAwesomeIcon icon={faHeart} className="footer-icon" aria-hidden="true" />
        by 
        <a href="/">
            JaneProduction 
        </a>
      </footer>
    </div>
  )
}

export default Footer
