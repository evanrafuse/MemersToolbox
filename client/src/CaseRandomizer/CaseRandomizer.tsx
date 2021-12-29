import React from 'react';

const CaseRandomizer = () => {
    
    const [caseText, setCaseText] = React.useState<String>("");

    const caseChange = (e:any) => {
            // How this works:
            // split creates an array of substrings for each letter
            // for loop iterates over that array
            // A random number is generated within a range of 1 to 10 and rounded to a whole number
            // The modulo operator checks if it's an even or odd number
            // the if statement makes even numbers lowercase and odd numbers uppercase
            // the join collapses the array into one string again
            let changeArray:String[] = e.target.value.split('');
            for(let i=0; i<changeArray.length; i++) {
                let randomNumb = Math.round(Math.random() * (10 - 1) + 1)
                if (randomNumb % 2 == 0) {
                    changeArray[i] = changeArray[i].toLowerCase();
                } else {
                    changeArray[i] = changeArray[i].toUpperCase();
                }
            };
            setCaseText(changeArray.join(''));
    }

    return(
        <div>
            <h3>Randomized Case Text - Evan Rafuse</h3>
            <input type="text" onChange={caseChange} maxLength={400}></input>
            <div>{caseText}</div>
        </div>
    );
}

export default CaseRandomizer;