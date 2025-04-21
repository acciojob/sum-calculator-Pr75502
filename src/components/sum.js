
import React, { useState, useEffect } from "react";

function SumCalculator() {
    const [numbers, setNumbers] = useState([]); 
    const [currentNumber, setCurrentNumber] = useState("");
    const [totalSum, setTotalSum] = useState(0); 
    const handleInputChange = (e) => {
    setCurrentNumber(e.target.value);
    }
    const handleAddNumber = () => {setNumbers([...numbers, parseFloat(currentNumber)]);
    setCurrentNumber("");
    }

    useEffect(() => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        setTotalSum(sum);
    }, [numbers]);

   
    return (
        <div>
            <h2>Sum Calculator</h2>
            <input
                type="number"
                value={currentNumber}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <button onClick={handleAddNumber}>Add Number</button>
            <h1>Sum: {totalSum}</h1>
        </div>
    );
}

export default SumCalculator;