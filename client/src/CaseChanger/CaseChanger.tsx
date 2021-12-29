import React from 'react';

const CaseChanger = () => {
    
    const [caseText, setCaseText] = React.useState<String>("");

    const caseChange = (e:any) => {
            let toChange:string = e.target.value;
            // How this works:
            // split creates an array of substrings for each letter
            // map iterates over that array
            // The modulo operator checks if it's an even or odd number
            // the ternary operator makes odd numbers lowercase and even numbers uppercase
            // the join collapses the array into one string again
            toChange = toChange.split('').map((letter, i) => i % 2 == 0 ? letter.toLowerCase() : letter.toUpperCase()).join('');
            setCaseText(toChange);
    }

    return(
        <div>
            <h3>Alternating Case Text - Evan Rafuse</h3>
            <input type="text" onChange={caseChange} maxLength={400}></input>
            <div>{caseText}</div>
        </div>
    );
}

export default CaseChanger;