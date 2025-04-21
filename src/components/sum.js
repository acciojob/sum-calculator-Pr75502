
import React, { useState, useEffect } from "react";

function SumCalculator() {
    const [numbers, setNumbers] = useState([]); 
    const [currentNumber, setCurrentNumber] = useState("");
    const [totalSum, setTotalSum] = useState(0); 
    useEffect(() => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        setTotalSum(sum);
    }, [numbers]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setCurrentNumber(value);

        if (!isNaN(parseFloat(value))) {
            setNumbers(prev => [...prev, parseFloat(value)]);
        }
    }

   
    return (
        <div>
            <h1>Sum Calculator</h1>
            <input
                type="number"
                value={currentNumber}
               onChange={handleInputChange}
                placeholder="Enter a number"
            />
           
            <p>Sum: {totalSum}</p>
        </div>
    );
}

export default SumCalculator;