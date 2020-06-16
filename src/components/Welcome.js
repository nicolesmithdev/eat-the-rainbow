import React from 'react';

const Welcome = ({numResults}) => {
    return (
        <div id="loading">
            <p><em>{numResults} recipes available to search</em></p>

            <p><strong>Get Started</strong>
            <br />Search by keyword (i.e. chicken) and/or filter by parameter (i.e. "entrees" containing a "red"). Because these recipes are exclusive to our community (i.e. behind a paywall), only recipe names, container counts, and source will be revealed.</p>

            <p><strong className="red">BETA:</strong> Only the monthly group recipes, cookbook volume one, cookbook volume two, and partial cooking show recipes are currently cataloged. I'm almost done! Check back regularly for more. Also please note recipes with different vegan container counts have not been implemented yet.</p>

            <p><strong>Feedback</strong>
            <br />If you have any feeback on how to improve this website please <a href="mailto:hello@eattherainbow.recipes?subject=Submit%20Feedback">email me</a>.</p>

            <p><strong>Support</strong>
            <br />Like this website? <a href="https://www.buymeacoffee.com/nicolesmithdev" target="_blank">Buy me a coffee.</a> This website was created as a passion project. Domain, web hosting, and time cataloging recipes are all done out of the courtesy for my love for web development and this community.</p>
        </div>
    );
};

export default Welcome;