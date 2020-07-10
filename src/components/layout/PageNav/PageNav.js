import React from 'react';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const PageNav = () => {
  return(
    <div className={styles.component}>
      <nav>
        <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
        <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
        <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/table`} activeClassName='active'>Table</Button>
        <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
        <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
      </nav>
    </div>
  );
};

export default PageNav;
