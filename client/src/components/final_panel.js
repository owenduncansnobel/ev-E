import React from 'react';
import av1 from '..//images/AVATARZ 1.png';
import av2 from '..//images/AVATARZ 2.png';
import av3 from '..//images/AVATARZ 3.png';
import av4 from '..//images/AVATARZ 4.png';
import av5 from '..//images/AVATARZ 5.png';

const FinalPanel = () => {
    return (
        <div className="grid lg:grid-cols-5">
            <img className="hidden lg:flex object-cover" src={av1} />
            <img className="hidden lg:flex object-cover" src={av2} />
            <img className="hidden lg:flex object-cover" src={av3} />
            <img className="hidden lg:flex object-cover" src={av4} />
            <img className="hidden lg:flex object-cover" src={av5} />
        </div>
    )
}
export default FinalPanel;