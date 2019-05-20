import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
    render() {
        return(
            <div  className="btn-wrapper">
                <div style={{...{backgroundColor: `${this.props.backgroundColor}`},
                             ...{width: `${this.props.width}`},
                             ...{height: `${this.props.height}`}}}
                            className="btn" onClick={this.props.onClick}>
                    <span>{this.props.title}</span>
                </div>
            </div>
        );
    }
}

export default Button;

Button.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

Button.defaultProps = {
    backgroundColor: '#76323F',
}