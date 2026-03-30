import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';

const FinalCard = ({ e, buynow, setBuynow, selected, setSelected }) => {
    console.log(selected)
    const [total,setTotal] = useState()
    function handelBuynow() {
        setBuynow(!buynow)
        if (buynow) {
            toast.error(`${e.name} is Not Selected`)
        } else {
            toast.success(`${e.name} is Selected`)
        }
        setSelected([...selected, e])
        
    }
    return (
        <div>
            {
                <div className="cart">
                    <div className="value">
                        <h4>{e.tagType}</h4>
                    </div>
                    <img src={e.image} alt="" />
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                    <h2>${e.price}<span id='month'>/{e.period}</span></h2>
                    {
                        e.features.map((elem) => {
                            return (
                                <p className='done'><MdDone className='i' /> {elem}</p>
                            )
                        })
                    }
                    <button onClick={handelBuynow} className={buynow ? "buy-now-succ" : "buy-now"}>Buy Now</button>
                </div>
            }
        </div>
    );
};

export default FinalCard;