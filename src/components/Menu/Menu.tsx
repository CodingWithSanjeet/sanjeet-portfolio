import { Link, NavLink } from "react-router-dom";
import logoS from "../../assets/images/s.png";
import { menuData } from "../../data";
import { MenuBtn } from "../../types/common";
import "./Menu.scss";

type MenuProps = {
  onMenuItemCLick: (item: MenuBtn) => void;
};

const Menu = ({ onMenuItemCLick }: MenuProps) => {
  return (
    <menu className="main-menu">
      <div className="main-menu__top">
        <Link className="logo" to="/" onClick={() => onMenuItemCLick("close")}>
          <img src={logoS} alt="logo" height="100" width="80" />
          <span>{menuData.title}</span>
        </Link>
        <span>{menuData.description}</span>
      </div>
      <nav className="main-menu__nav">
        {menuData.menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.url}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => onMenuItemCLick("close")}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <ul className="social">
        {menuData.socialLinks.map((link) => (
          <li key={link.name}>
            <a target="_blank" rel="noreferrer" href={link.url}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default Menu;
