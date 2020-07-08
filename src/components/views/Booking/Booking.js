import React from 'react';
import styles from '../Login/Login.module.scss';

const Booking = (value) => {

  const id = value.match.params.id;


  return(
    <div className={styles.component}>
      <h2>
      Booking view {id}
      </h2>
    </div>
  );
};

export default Booking;
