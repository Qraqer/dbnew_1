import logo from '@/../public/img/logo.svg';
import { topMenu } from '@/static/mocks/menu';
import { useState } from 'react';

export const Header = (): React.JSX.Element => {
  const [isBreaker, setBreaker] = useState(false);
  const additionMenuItems = topMenu.filter((item) => item.type === 'additional');

  return (
    <header>
      <div className="header__top">
        <div className="container">
          <div className="header__top-area"></div>
          <nav className="header__top-menu">
            <ul className="header__top-menu-ul">
              {topMenu.map((item) => {
                const addClass = item.type === 'additional' ? 'hide-below-1200' : '';
                const showItem =
                  !isBreaker && addClass === 'hide-below-1200' ? (
                    <li className="header__top-menu-item showmore">
                      <span className="header-top-nav__link">Ещё</span>
                      <div className="header__top-menu-popup">
                        <ul className="header__top-menu-popup-ul">
                          {additionMenuItems.map((addItem, i) => (
                            <li className="header__top-menu-li" key={i}>
                              <a
                                href={addItem.link}
                                className={`header__top-menu-link ${addClass}`}
                              >
                                {addItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li className="header__top-menu-item">
                      <a
                        href={item.link}
                        className={`header__top-menu-link ${addClass}`}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                !isBreaker && addClass === 'hide-below-1200' && setBreaker(true);
                return showItem;
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom-logo">
          <img src={logo} alt="Daichi" />
        </div>
        <div className="header__bottom-catalog"></div>
        <div className="header__bottom-search"></div>
        <div className="header__bottom-toolbar"></div>
      </div>
    </header>
  );
};
