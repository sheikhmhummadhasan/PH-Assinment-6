import React, { use, useState } from 'react';
import { MdDone } from 'react-icons/md';
import FinalCard from './FinalCard';

const Crad = ({ data, selected, setSelected}) => {
    const user = use(data);
    // console.log(user)
    
    return (
        <div>
            <div className="rander-box-2">
                {
                    user.map((e) => {
                        const [buynow,setBuynow] = useState(false)
                        return (
                            <FinalCard 
                             e={e}
                             buynow={buynow} 
                             setBuynow={setBuynow} 
                             selected={selected} 
                             setSelected={setSelected}></FinalCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Crad;