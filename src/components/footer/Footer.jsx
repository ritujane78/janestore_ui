import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div>
      <footer className="flex justify-center items-center py-4 mb-4 font-primary text-gray-700">
        Built with
        <FontAwesomeIcon icon={faHeart} aria-hidden="true" className = "text-red-500 mx-1 animate-pulse"/>
        by 
        <a href="/" className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark">
            JaneProduction 
        </a>
      </footer>
    </div>
  )
}

export default Footer
