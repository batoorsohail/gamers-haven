import { Link } from "react-router-dom"
import { FaStar, FaHotjar, FaFastForward } from "react-icons/fa";


const Navbar = () => {
  return (
    <section className="w-64 sticky px-12 mt-10 mr-2 page-bg">
      <aside>
        <nav className="flex flex-col gap-3">
          <div>
            <Link to="/" className="text-white text-2xl font-bold">Home</Link>
          </div>
          <div>
            <Link to="/reviews" className="text-white text-2xl font-bold">Reviews</Link>
          </div>
          <div>
            <span to="/" className="text-white text-2xl font-bold">New Releases</span>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="flex items-center gap-2 text-white text-lg">
                <div className="bg-gray p-2 rounded-sm">
                  <FaStar/>
                </div>
                <p>Last 30 days</p>
              </li>
              <li className="flex items-center gap-2 text-white text-lg">
                <p><FaHotjar /></p>
                <p>This Week</p>
              </li>
              <li className="flex items-center gap-2 text-white text-lg">
                <p><FaFastForward/></p>
                <p>Next Week</p>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </section>
  )
}

export default Navbar