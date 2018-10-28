import React from 'react';
import PropTypes from 'prop-types';
import WindowSizeListener from 'react-window-size-listener';
import Menu from '../Menu/MenuContainer';
import './styles.css';

// Hamburger button component
export const MenuTriger = ({ toggleMenu, menuVisible }) => {
  const hamburgerMenu = (
    <button className="rmenu__trigger rmenu__trigger--open" onClick={() => toggleMenu(true)}>
      <span />
      <span />
      <span />
    </button>
  );
  const closeMenu = (
    <button
      className="rmenu__trigger rmenu__trigger--close icon-close"
      onClick={() => toggleMenu(false)}
    >
      &#215;
    </button>
  );
  return menuVisible ? closeMenu : hamburgerMenu;
};

MenuTriger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuVisible: PropTypes.bool.isRequired,
};

// Main responsive menu content component
class ResponsiveMenu extends React.Component {
  static propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuVisible: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    const { toggleMenu, history } = this.props;
    this.unlisten = history.listen(() => toggleMenu(false));
  }

  componentWillUnmount() {
    this.unlisten();
  }

  resizeHandler({ windowWidth }) {
    if (windowWidth > 768) {
      this.props.toggleMenu(false);
    }
  }

  render() {
    const { menuVisible } = this.props;
    const visibilityClass = menuVisible ? '' : 'rmenu--hidden';
    return (
      <div className={`rmenu ${visibilityClass}`}>
        <WindowSizeListener
          onResize={size => this.resizeHandler(size)}
        />
        <div className="rmenu__content">
          <Menu className="navigation--rmenu" />
        </div>
      </div>
    );
  }
}

export default ResponsiveMenu;
