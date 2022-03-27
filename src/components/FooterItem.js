import React, {Component} from 'react';

class FooterItem extends Component {
    render() {
        return (
            <>
                {
                    <div className="menuitem">
                        <h3>Sub menu</h3>
                        <div>
                            Android
                            <br/>
                            Apps
                            <br/>
                            Articles
                            <br/>
                            Backgrounds
                            <br/>
                            Blogger
                            <br/>
                            Books
                            <br/>
                            Coding
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default FooterItem;