import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div id="loading">
                <p>
                    <em>
                        {this.props.numResults} recipes available to search
                        <br />
                        Last Updated: November 22, 2021
                    </em>
                </p>

                <p>
                    <strong>Get Started</strong>
                    <br />
                    Search by keyword (i.e. chicken) and/or filter by parameter
                    (i.e. "entrees" containing a "red"). Because these recipes
                    are exclusive to our community, only recipe names, container
                    counts, and source will be revealed.
                </p>

                <p>
                    <strong>Submit Your Images</strong>
                    <br />
                    If you see a recipe with a "placeholder" image, and you have
                    a picture of that recipe you would love to share, please{' '}
                    <a href="mailto:hello@eattherainbow.recipes?subject=Recipe%20Image">
                        submit your photos
                    </a>
                    ! Photo credit is given (unless you choose to remain
                    anonymous).
                </p>

                <p>
                    <strong>Feedback</strong>
                    <br />
                    If you have any feeback on how to improve this website
                    please{' '}
                    <a href="mailto:hello@eattherainbow.recipes?subject=Submit%20Feedback">
                        email me
                    </a>
                    .
                </p>

                <p>
                    <strong>Support</strong>
                    <br />
                    Like this website?{' '}
                    <a
                        href="https://www.buymeacoffee.com/nicolesmithdev"
                        target="_blank"
                    >
                        Buy me a coffee.
                    </a>{' '}
                    This website was created as a passion project. Domain, web
                    hosting, and time cataloging recipes are all done out of the
                    courtesy for my love of web development and this community.
                </p>
            </div>
        );
    }
}

export default Welcome;
