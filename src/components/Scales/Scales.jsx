import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Scales.scss';

class Scales extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            clickedElements: [],
        };
        this.handleStrikeThrough = this.handleStrikeThrough.bind(this);
        this.clickedArray = [];
    }

    handleStrikeThrough(elementClicked) {
        if (this.clickedArray.includes(elementClicked)) {
            let index = this.clickedArray.indexOf(elementClicked);
            this.clickedArray.splice(index, 1);
        } else {
            this.clickedArray.push(elementClicked);
        }
        this.setState({
            clickedElements: this.clickedArray,
        });
    }

    render() {
        const majorScaleNames = 
        [
            'C Major Scale', 'C# Major Scale', 'D Major Scale',
            'Eb Major Scale', 'E Major Scale', 'F Major Scale',
            'F# Major Scale', 'G Major Scale', 'G# Major Scale',
            'A Major Scale', 'Bb Major Scale', 'B Major Scale'
        ];
        
        const harmonicMinorScaleNames = 
        [
            'C Harmonic Minor Scale', 'C# Harmonic Minor Scale', 'D Harmonic Minor Scale',
            'Eb Harmonic Minor Scale', 'E Harmonic Minor Scale', 'F Harmonic Minor Scale',
            'F# Harmonic Minor Scale', 'G Harmonic Minor Scale', 'G# Harmonic Minor Scale',
            'A Harmonic Minor Scale', 'Bb Harmonic Minor Scale', 'B Harmonic Minor Scale'
        ];

        const melodicMinorScaleNames = 
        [
            'C Melodic Minor Scale', 'C# Melodic Minor Scale', 'D Melodic Minor Scale',
            'Eb Melodic Minor Scale', 'E Melodic Minor Scale', 'F Melodic Minor Scale',
            'F# Melodic Minor Scale', 'G Melodic Minor Scale', 'G# Melodic Minor Scale',
            'A Melodic Minor Scale', 'Bb Melodic Minor Scale', 'B Melodic Minor Scale'
        ];

        const majorScaleNamesList = majorScaleNames.map((majorScaleNames, i) => 
            <li
                className={"scale-list-element" + (this.state.clickedElements.includes(majorScaleNames + i) ? ' scale-list-element-line-through' : '')}  key={majorScaleNames + i}
                onClick={(e) => this.handleStrikeThrough(majorScaleNames + i)}
            >
                {majorScaleNames}
            </li>
        );
        const harmonicMinorScaleNamesList = harmonicMinorScaleNames.map((harmonicMinorScaleNames, i) => 
            <li 
                className={"scale-list-element" + (this.state.clickedElements.includes(harmonicMinorScaleNames + i) ? ' scale-list-element-line-through' : '')}  key={harmonicMinorScaleNames + i}
                onClick={(e) => this.handleStrikeThrough(harmonicMinorScaleNames + i)}
            >
                {harmonicMinorScaleNames}
            </li>
        );
        const melodicMinorScaleNamesList = melodicMinorScaleNames.map((melodicMinorScaleNames, i) =>
            <li
                className={"scale-list-element" + (this.state.clickedElements.includes(melodicMinorScaleNames + i) ? ' scale-list-element-line-through' : '')}  key={melodicMinorScaleNames + i}
                onClick={(e) => this.handleStrikeThrough(melodicMinorScaleNames + i)}
            >
                {melodicMinorScaleNames}
            </li>
        );
        return(
            <ul className="scale-list">
                {this.props.showMajorScales ?
                    majorScaleNamesList
                : null }
                {this.props.showHarmonicMinorScales ?
                    harmonicMinorScaleNamesList
                : null }
                {this.props.showMelodicMinorScales ?
                    melodicMinorScaleNamesList
                : null }
            </ul>
        );
    }
}
export default Scales;

Scales.propTypes = {
    showMajorScales: PropTypes.bool,
    showHarmonicMinorScales: PropTypes.bool,
    showMelodicMinorScales: PropTypes.bool,
}

Scales.defaultProps = {
    showMajorScales: true,
    showHarmonicMinorScales: true,
    showMelodicMinorScales: true,
}