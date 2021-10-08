import React from 'react';
import styles from "../styles/Home.module.scss";

const Prices = (props) => {
    return (
        <div className={styles.pricebox}>
            <div className={styles.pricebox_title}>
                {props.package}
            </div>
            <div className={styles.pricebox_line}></div>

        </div>
    );
}

export default Prices;