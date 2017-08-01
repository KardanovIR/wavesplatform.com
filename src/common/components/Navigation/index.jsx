import React from 'react';
import styles from './styles';


const Input = ({ children, ...rest }) => (
    <div className={styles.group}>      
      <input required className={styles.input} type="text" {...rest} />
      <span className={styles.highlight} />
      <span className={styles.bar} />
      <label className={styles.label}>{ children }</label>
    </div>
)


export default Input;