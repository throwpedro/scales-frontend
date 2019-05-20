import React, { Component } from 'react'
import Scales from '../Scales/Scales';
import Button from '../../Reuse/Button';

class ScaleSelector extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMajorScales: false,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
        }

        this.handleToggleMajorScales = this.handleToggleMajorScales.bind(this);
        this.handleToggleHarmonicMinorScales = this.handleToggleHarmonicMinorScales.bind(this);
        this.handleToggleMelodicMinorScales = this.handleToggleMelodicMinorScales.bind(this);
    }

    handleToggleMajorScales() {
        this.setState(prevState => ({
            showMajorScales: !prevState.showMajorScales,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
        }));
    }

    handleToggleHarmonicMinorScales() {
        this.setState(prevState => ({
            showHarmonicMinorScales: !prevState.showHarmonicMinorScales,
            showMajorScales: false,
            showMelodicMinorScales: false,
        }));
    }

    handleToggleMelodicMinorScales() {
        this.setState(prevState => ({
            showMelodicMinorScales: !prevState.showMelodicMinorScales,
            showMajorScales: false,
            showHarmonicMinorScales: false,
        }));
    }

    render() {
        return(
            <div>
                <Scales
                    showMajorScales={this.state.showMajorScales}
                    showHarmonicMinorScales={this.state.showHarmonicMinorScales}
                    showMelodicMinorScales={this.state.showMelodicMinorScales}
                />
                <Button
                    width={'250px'}
                    height={'50px'}
                    onClick={this.handleToggleMajorScales}
                    title={'Show major scales'}
                />
                <Button
                    width={'250px'}
                    height={'50px'}
                    onClick={this.handleToggleHarmonicMinorScales}
                    title={'Show harmonic minor scales'}
                />
                <Button
                    width={'250px'}
                    height={'50px'}
                    onClick={this.handleToggleMelodicMinorScales}
                    title={'Show medlodic minor scales'}
                />
            </div>
        );
    }

}

export default ScaleSelector;