import React from 'react';
import { I18n } from 'react-redux-i18n';
import Select from 'react-select';

/*
 React-bootstrap-table shared config
*/

/* eslint-disable   react/prop-types */
export default {
  perPageSizeOptions: [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
  ],
  renderPaginationPanel: Button => props => (
    <div className="list-pagination">
      <div className="list-pagination__size-section">
        <span>{I18n.t('show')}</span>
        { props.components.sizePerPageDropdown }
        <span>{I18n.t('elementsPerPage')}</span>
      </div>
      <div className="list-pagination__pager">{ props.components.pageList }</div>
      {Button}
    </div>
  ),
  renderSizePerPageDropDown: perPageSizeOptions => props => (
    <div className="list-pagination__size">
      {
        <Select
          name="form-field-name"
          value={props.currSizePerPage}
          searchable={false}
          clearable={false}
          onChange={o => props.changeSizePerPage(o.value)}
          options={perPageSizeOptions}
        />
      }
    </div>
  ),
};
