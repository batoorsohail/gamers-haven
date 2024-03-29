import { Link } from 'react-router-dom';
import { FaStar, FaHotjar, FaFastForward } from 'react-icons/fa';

const Navbar = () => (
  <section className="w-64 sticky h-[80vh] px-12 mt-10 mr-2">
    <aside>
      <nav className="flex flex-col gap-3">
        <div>
          <Link to="/" className="text-white text-2xl font-bold text-gray-hover slow-transition">Home</Link>
        </div>
        <div>
          <Link to="/reviews" className="text-white text-2xl font-bold text-gray-hover slow-transition">Reviews</Link>
        </div>
        <div>
          <span to="/" className="text-white text-2xl font-bold">New Releases</span>
          <ul className="flex flex-col gap-3 mt-3">
            <li className="flex items-center gap-2 text-white text-lg">
              <button type="button" className="bg-gray p-2 rounded-lg hover:bg-white hover:text-black">
                <FaStar />
              </button>
              <p>Last 30 days</p>
            </li>
            <li className="flex items-center gap-2 text-white text-lg">
              <button type="button" className="bg-gray p-2 rounded-lg hover:bg-white hover:text-black">
                <FaHotjar />
              </button>
              <p>This Week</p>
            </li>
            <li className="flex items-center gap-2 text-white text-lg">
              <button type="button" className="bg-gray p-2 rounded-lg hover:bg-white hover:text-black">
                <FaFastForward />
              </button>
              <p>Next Week</p>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  </section>
);

export default Navbar;
