import React from 'react';
import styles from '../Login/Login.module.scss';

const Order = (value) => {
  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h2>
      Order view {id}
      </h2>
    </div>
  );
};

export default Order;
