import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import styles from './styles.modules.css'

export const MemeGenerated = () => {

    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    return(
        <div>
            <button onClick={() => history.push('/')} className={styles.home}>
                Make some more Meme's
            </button>
            {url && <img src={url} alt="generated meme"/>}
        </div>
    )
}