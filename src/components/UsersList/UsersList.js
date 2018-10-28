import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import { NavLink } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import tableHelpers from '../../common/js/tableHelpers';
import Search from './Search';

export const formatters = {
  actionsFormatter: (cell, row) => (
    <div className="table-list__btns">
      <NavLink className="btn btn-secondary btn-sm" to={`users/user/${row.id}/edit`}>
        {I18n.t('edit')}
      </NavLink>
    </div>
  ),
};

// Ultimately all toolbox items will be separate components (search, notifications etc.)
class UsersList extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const {
      users,
      loading,
    } = this.props;

    const addUserBtn = (
      <NavLink
        className="btn btn-primary"
        to="/users/add"
      >
        {I18n.t('addNewUser')}
      </NavLink>
    );

    const { perPageSizeOptions } = tableHelpers;

    const options = {
      noDataText: I18n.t('noData'),
      paginationPanel: tableHelpers.renderPaginationPanel(addUserBtn),
      sizePerPageDropDown: tableHelpers.renderSizePerPageDropDown(perPageSizeOptions),
      sizePerPage: perPageSizeOptions[0].value,
      nextPage: '›',
      lastPage: '»',
      prePage: '‹',
      firstPage: '«',
      paginationSize: 4,
      alwaysShowAllBtns: true,
    };
    const tableProps = {
      data: users,
      containerClass: 'table-list',
      trClassName: 'table-list__row',
      bordered: false,
      striped: true,
      version: '4',
      pagination: true,
    };
    const table = (
      <BootstrapTable {...tableProps} options={options}>
        <TableHeaderColumn isKey dataField="id" hidden>id</TableHeaderColumn>
        <TableHeaderColumn
          dataField="name"
        >
          {I18n.t('name')}
        </TableHeaderColumn>
        <TableHeaderColumn
          width="25%"
          dataField="email"
        >
          {I18n.t('emailAddress')}
        </TableHeaderColumn>
        <TableHeaderColumn
          width="25%"
          dataField="username"
        >
          {I18n.t('username')}
        </TableHeaderColumn>
        <TableHeaderColumn
          width="90px"
          columnClassName="table-list__btns-td"
          dataField="id"
          dataFormat={(c, r) => formatters.actionsFormatter(c, r)}
        >
          {I18n.t('actions')}
        </TableHeaderColumn>
      </BootstrapTable>
    );
    return (
      <div className="users-list" ref={(el) => { this.element = el; }}>
        <div className="page-title-wrapper">
          <h1 className="page-title">
            {I18n.t('users')}
          </h1>
          {addUserBtn}
        </div>
        <Search />
        {loading ? <div className="loader" /> : table}
      </div>
    );
  }
}

export default UsersList;
