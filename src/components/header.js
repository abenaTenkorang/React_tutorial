import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <aside className="aside-nav">
    <ul className="aside-ul">
      <li className="aside-li">
        <NavLink to="/" activeClassName="active">
          <span>Todo List</span>
        </NavLink>
      </li>
      <li className="aside-li">
        <NavLink to="/about" activeClassName="active">
          <span>Info</span>
        </NavLink>
      </li>
    </ul>
  </aside>
);

export default Navigation;
