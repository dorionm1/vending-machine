import React from "react";
import '.././App.css';

import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
            <ul id="snack-list" list-style-type="none">
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/cookies">Cookies</Link>
                </li>
                <li>
                    <Link to="/soda">Soda</Link>
                </li>
            </ul>
    )
};

export default VendingMachine
