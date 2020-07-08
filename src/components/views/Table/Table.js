import React from 'react';
import styles from './Table.module.scss';
import {Link} from 'react-router-dom';

const Table = () => {
  return(
    <div className={styles.component}>
      <h2>
      Table view
      </h2>
      <nav>
        <Link to={`${process.env.PUBLIC_URL}/table/booking/:id`} >Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/table/booking/new`} >New Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/table/event/:id`} >Event</Link>
        <Link to={`${process.env.PUBLIC_URL}/table/event/new`} >New Event</Link>
      </nav>
    </div>
  );
};

export default Table;
