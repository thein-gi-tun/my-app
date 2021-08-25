import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favourites-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites"> My Favourites</Link>
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
