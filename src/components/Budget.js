import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (newBudget > 20000){
            alert("The value cannot exceed £20,000");
            setNewBudget("20000");
            return;
        }
        else if (newBudget < totalExpenses){
            alert("The value cannot be lower than expenses!");
            setNewBudget(totalExpenses);
            return;
        }
        else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>

<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;