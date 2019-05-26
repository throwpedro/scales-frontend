import React from 'react';
import './BackButton.scss';

class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
                <div
                    className='back-button'
                    onClick={this.props.onClick}
                >
                    &#8249;
                </div>
        );
    }
}

export default BackButton;