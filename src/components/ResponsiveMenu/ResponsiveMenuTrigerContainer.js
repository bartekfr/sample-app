import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { MenuTriger } from './ResponsiveMenu';
import { toggleMenu } from '../../state/common';

const mapStateToProps = state => ({
  menuVisible: state.common.menuVisible,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: (show) => {
    dispatch(toggleMenu(show));
  },
});

const MenuTrigerContainer = connect(mapStateToProps, mapDispatchToProps)(MenuTriger);

export default withRouter(MenuTrigerContainer);
