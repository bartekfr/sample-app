import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ResponsiveMenu from './ResponsiveMenu';
import { toggleMenu } from '../../state/common';

const mapStateToProps = state => ({
  menuVisible: state.common.menuVisible,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: (show) => {
    dispatch(toggleMenu(show));
  },
});

const ResponsiveMenuContainer = connect(mapStateToProps, mapDispatchToProps)(ResponsiveMenu);

export default withRouter(ResponsiveMenuContainer);
