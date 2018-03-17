import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <Link to="/">
                <strong>ExpenseTracker</strong>
            </Link>
            <p/>
            <Link to="/report">
                <strong>Reports</strong>
            </Link>
        </div>
    )
};
