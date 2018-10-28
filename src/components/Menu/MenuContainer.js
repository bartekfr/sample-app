import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Menu from './Menu';

const mapStateToProps = (stat, ownProps) => ({
  className: ownProps.className,
});

const MenuContainer = connect(mapStateToProps, null)(Menu);

export default withRouter(MenuContainer);
