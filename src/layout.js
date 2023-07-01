import { Outlet, Link } from "react-router-dom";
import './App.css'

const layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Books">Books</Link>
          </li>
          <li>
            <Link to="/Activists">Activists</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Donate">Donate</Link>
          </li>
        </ul>
      </nav>

    <Outlet/>
    </>
  )
};

export default layout;