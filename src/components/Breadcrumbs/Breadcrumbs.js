import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withBreadcrumbs } from 'react-router-breadcrumbs-hoc';
import routesConfig from '../Routing/routingConfig';
import './styles.css';

const routes = Object.keys(routesConfig)
  .filter(r => routesConfig[r].breadcrumb)
  .map(r => routesConfig[r]);

export const BreadcrumbsHTML = ({ breadcrumbs }) => (
  <ul className="breadcrumbs">
    {breadcrumbs.map(({ path, match, breadcrumb }, i) => {
      const isLast = i === breadcrumbs.length - 1;
      return (
        <li className="breadcrumbs__item" key={path}>
          { isLast ?
            (<span className="breadcrumbs__txt">{breadcrumb}</span>) :
            (
              <NavLink className="breadcrumbs__link" title={breadcrumb} to={match.url}>
                <span className="breadcrumbs__txt">{breadcrumb}</span>
              </NavLink>
            )
          }
        </li>
      );
    })}
  </ul>
);

BreadcrumbsHTML.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default withBreadcrumbs(routes)(BreadcrumbsHTML);
