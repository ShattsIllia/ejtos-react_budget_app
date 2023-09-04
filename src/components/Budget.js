import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const handleBudgetChange = (e) => {
        if (e.target.value > budget) {
            dispatch({
                type: 'CHANGE_BUDGET',
                payload: budget + 10
            });
        } else (    
            dispatch({
            type: 'CHANGE_BUDGET',
            payload: budget - 10
        }))
    }

    return (
        <div className='alert alert-secondary' style={{display: 'flex'}}>
            {currency}
            <input type="number" max="20000" step={10} value={budget} onChange={handleBudgetChange}/>
        </div>
    );
};
export default Budget;
