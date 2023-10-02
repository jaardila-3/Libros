import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
        <li>
          <Link to="/user/4">user 4 (change "id" in url)</Link>
        </li>
        <li>
          <Link to="/test-mocks">Test Mocks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
