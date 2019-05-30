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
            showBackToScalesButton: false,
        }

        this.handleToggleMajorScales = this.handleToggleMajorScales.bind(this);
        this.handleToggleHarmonicMinorScales = this.handleToggleHarmonicMinorScales.bind(this);
        this.handleToggleMelodicMinorScales = this.handleToggleMelodicMinorScales.bind(this);
        this.handleBackToScalesClick = this.handleBackToScalesClick.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }

    handleBackToScalesClick() {
        this.setState(prevState => ({
            showScaleButtons: true,
            showBackToScalesButton: false,
            showMajorScales: false,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
        }));
    }

    routeChange() {
        let path = `/`;
        this.props.history.push(path);
    }

    handleToggleMajorScales() {
        this.setState(prevState => ({
            showMajorScales: !prevState.showMajorScales,
            showHarmonicMinorScales: false,
            showMelodicMinorScales: false,
            showBackToScalesButton: true,
            showScaleButtons: false,
        }));
    }

    handleToggleHarmonicMinorScales() {
        this.setState(prevState => ({
            showHarmonicMinorScales: !prevState.showHarmonicMinorScales,
            showMajorScales: false,
            showMelodicMinorScales: false,
            showBackToScalesButton: true,
            showScaleButtons: false,
        }));
    }

    handleToggleMelodicMinorScales() {
        this.setState(prevState => ({
            showMelodicMinorScales: !prevState.showMelodicMinorScales,
            showMajorScales: false,
            showHarmonicMinorScales: false,
            showBackToScalesButton: true,
            showScaleButtons: false,
        }));
    }

    render() {
        const {showBackToScalesButton, showScaleButtons } = this.state;
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
                { showBackToScalesButton ?
                    <BackButton
                        onClick={this.handleBackToScalesClick}
                    />
                :
                    <BackButton
                        onClick={this.routeChange}
                    />
                }
            </div>
        );
    }

}

export default ScaleSelector;