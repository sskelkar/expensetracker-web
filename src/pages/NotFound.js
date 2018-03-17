import React from 'react'

//arbitrary URLs will be redirected to this page.
// As per https://stackoverflow.com/a/36623117/9080015
export const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <a href="https://www.youtube.com/watch?v=oqMl5CRoFdk">{"You can't always get what you want!"}</a>
        </div>
    );
};


