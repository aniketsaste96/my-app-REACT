import { useState } from 'react';
import Button from '@mui/material/Button';

// import DeleteIcon from '@mui/icons-material/Delete';

// const like = 5;
//hook=useState -function - always start with word use
//it return an Array
//const [state.setState] = useState(Initial state)
// onClick camel case Very IMP
//inform react that like has changed=>Basically you need hook
//react will go and update like value on the screen
//setLike = like + 1 not ++ (Immutability)
//Here we are fiolling the principle of Immutability.
// let x = 100;
//1000 lines of code.....
//...
// console.log(x);  x may be diff because we are not using const
//to see value of x we have to read 1000 lines code
//if you use Const no need to look of 1000code.
export function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDisLike] = useState(0);
    return (
        <div>
            <Button onClick={() => { setLike(like + 1); }} variant="outlined">👍</Button>
            <h2>{like}</h2>
            <Button onClick={() => { setDisLike(dislike + 1); }} variant="outlined">👎</Button>
            <h2>{dislike}</h2>

        </div>
    );

}
