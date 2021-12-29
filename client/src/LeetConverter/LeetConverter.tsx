import React from 'react';

const LeetConverter = () => {
    
    const [caseText, setCaseText] = React.useState<String>("");

    const caseChange = (e:any) => {
        let toChange:string = e.target.value;
        
        // How this works:
        // The (i*) means case insensitive
        // the g means Global (I could have just used replace all but this is fine)
        // the i means case insensitive
        // the m means multiline
        // Several of these Regex Could/Should be combined

        // Step 1: Regex for adding &
        let regExAnd:RegExp = /and/gim;
        let regExAnned:RegExp = /anned/gim;
        let regExAnt:RegExp = /ant/gim;
        toChange = toChange.replace(regExAnd, "&").replace(regExAnned, "&").replace(regExAnt, "&");

        // Step 2: Regex for adding xor
        let regExCker:RegExp = /cker/gim;
        let regExCkor:RegExp = /ckor/gim;
        let regExCore:RegExp = /core/gim;
        toChange = toChange.replace(regExCker, "xor").replace(regExCkor, "xor").replace(regExCore, "xor");

        // Step 3: Regex for 'd
        let regExEd:RegExp = /ed/gim;
        toChange = toChange.replace(regExEd, "'d");

        // Step 4: converting letters to numbers
        let regExZero:RegExp = /o/gim;
        let regExOne:RegExp = /l/gim;
        let regExThree:RegExp = /e/gim;
        let regExFour:RegExp = /a/gim;
        let regExFive:RegExp = /s/gim;
        let regExSix:RegExp = /g/gim;
        let regExSeven:RegExp = /t/gim;
        let regExEight:RegExp = /b/gim;
        let regExNine:RegExp = /p/gim;
        toChange = toChange.replace(regExZero, "0").replace(regExOne, "1").replace(regExThree, "3").replace(regExFour, "4").replace(regExFive, "5").replace(regExSix, "6").replace(regExSeven, "7").replace(regExEight, "8").replace(regExNine, "9");
        setCaseText(toChange);
    }

    return(
        <div>
            <h3>L337 C0NV3R73R - Evan Rafuse</h3>
            <input type="text" onChange={caseChange} maxLength={400}></input>
            <div>{caseText}</div>
        </div>
    );
}

export default LeetConverter;