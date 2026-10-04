import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div>
      <footer className="flex justify-center items-center py-4 mb-4 font-primary dark:font-light text-gray-700 dark:text-lighter">
        Built with
        <FontAwesomeIcon icon={faHeart} aria-hidden="true" className = "text-red-500 mx-1 animate-pulse"/>
        by 
        <a href="/" className="text-primary dark:text-light font-semibold px-1 transition-colors duration-300 hover:text-dark dark:hover:text-lighter">
            JaneProduction 
        </a>
      </footer>
    </div>
  )
}

export default Footer
