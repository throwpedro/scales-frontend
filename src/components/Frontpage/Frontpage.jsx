import React from 'react';
import Subpage from './Subpage';
import './Frontpage.scss';

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