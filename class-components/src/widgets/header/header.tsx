import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@/core/theme/theme-context.tsx';
import './header.scss';

function Header(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="header__wrapper wrapper">
        <NavLink to="/main" className="app-header__logo">
          Star Wars API search
        </NavLink>
        <div className="app-header__top-right">
          <nav className="app-header__nav">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `app-header__nav-link${isActive ? ' app-header__nav-link--active' : ''}`
              }
            >
              About
            </NavLink>
          </nav>
          <div className="theme-switcher">
            <label className="theme-switcher__label">
              <input
                type="radio"
                name="theme"
                checked={theme === 'light'}
                onChange={() => setTheme('light')}
              />
              Light
            </label>
            <label className="theme-switcher__label">
              <input
                type="radio"
                name="theme"
                checked={theme === 'dark'}
                onChange={() => setTheme('dark')}
              />
              Dark
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
