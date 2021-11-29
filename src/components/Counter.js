import React,{useState} from 'react'

function Counter() {
    const [num, setNum] = useState(0);

    const incNum = () =>{
        setNum( num + 1 );
    }

    const decNum = () =>{
        if(num > 0){
            setNum( num - 1 );
        }else{
            alert("sorry, zero limit reached");
            setNum(0);
        }
    };
    
    return (
        <>
        <div className="main_div">
            <h1> {num} </h1>
            <button className="button" onClick={incNum}>Increment</button>
            <button className="button" onClick={decNum}>Decrement</button>
            
        </div>
        </>
    )
}

export default Counter