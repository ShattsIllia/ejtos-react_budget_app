import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    
    const { dispatch } = useContext(AppContext);
  
    const hangleCurencyChange = (event)=> {
        // (event) => setName(event.target.value)
        console.log(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    return (
        <div className='alert alert-secondary'>
         <select className="custom-select-2" id="inputGroupSelect02" onChange={hangleCurencyChange}>
                        <option value="£" name="pound" defaultValue>£ Pound</option>
                        <option value="$" name="dollar">$ Dollar</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="ruppee">,₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Budget;
