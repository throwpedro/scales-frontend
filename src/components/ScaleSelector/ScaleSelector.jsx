import React, { Component } from 'react'
import Scales from '../Scales/Scales';
import Button from '../../Reuse/Button';
import BackButton from '../../Reuse/BackButton';

import './ScaleSelector.scss';

class ScaleSelector extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMajorScales: false,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
            showScaleButtons: true,
            showBackButton: false,
        }

        this.handleToggleMajorScales = this.handleToggleMajorScales.bind(this);
        this.handleToggleHarmonicMinorScales = this.handleToggleHarmonicMinorScales.bind(this);
        this.handleToggleMelodicMinorScales = this.handleToggleMelodicMinorScales.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    handleBackButtonClick() {
        this.setState(prevState => ({
            showScaleButtons: true,
            showBackButton: false,
            showMajorScales: false,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
        }));
    }

    handleToggleMajorScales() {
        this.setState(prevState => ({
            showMajorScales: !prevState.showMajorScales,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
            showBackButton: true,
            showScaleButtons: false,
        }));
    }

    handleToggleHarmonicMinorScales() {
        this.setState(prevState => ({
            showHarmonicMinorScales: !prevState.showHarmonicMinorScales,
            showMajorScales: false,
            showMelodicMinorScales: false,
            showBackButton: true,
            showScaleButtons: false,
        }));
    }

    handleToggleMelodicMinorScales() {
        this.setState(prevState => ({
            showMelodicMinorScales: !prevState.showMelodicMinorScales,
            showMajorScales: false,
            showHarmonicMinorScales: false,
            showBackButton: true,
            showScaleButtons: false,
        }));
    }

    render() {
        const {showBackButton, showScaleButtons} = this.state;
        return(
            <div className="scale-selector">
                <Scales
                    showMajorScales={this.state.showMajorScales}
                    showHarmonicMinorScales={this.state.showHarmonicMinorScales}
                    showMelodicMinorScales={this.state.showMelodicMinorScales}
                />
                { showScaleButtons ?
                <div>
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
                : null }
                { showBackButton ?
                    <BackButton
                        onClick={this.handleBackButtonClick}
                    />
                : null }
            </div>
        );
    }

}

export default ScaleSelector;