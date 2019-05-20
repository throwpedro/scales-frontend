import React from 'react';
import Subpage from './Subpage';
import './Frontpage.scss';
import cmajor from '../../media/c-major-arpeggio.png';

const Frontpage = () => {
    return(
        <div>
            <div className="page-selector-wrapper">
                <Subpage title='Scales' link='/scales' />
                <Subpage title='Arpeggios' link='/arpeggios' />
                <Subpage title='Theory' link='/theory'/>
            </div>
        </div>
    );
}

export default Frontpage;