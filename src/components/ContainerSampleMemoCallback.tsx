import React,{useState, useCallback, memo} from "react";

type ButtonProps = {
    onClick: () => void,
}

const DecrementButton = (props:ButtonProps) =>{
    const {onClick} = props

    console.log("DecrementButton clicked")

    return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = memo<ButtonProps>((props:ButtonProps) =>{
    const {onClick} = props

    console.log("IncrementButton clicked")

    return <button onClick={onClick}>Increment</button>
})

const DoubleButton = memo<ButtonProps>((props:ButtonProps) =>{
    const {onClick} = props

    console.log("DoubleButton clicked")

    return <button onClick={onClick}>Double</button>
})



const ParentMemoCallback = ()=>{
    const [count, setCount] = useState(0)

    const decrement = ()=>{
        setCount((c)=> c-1 )
    }
    const increment = ()=>{
        setCount((c)=> c+1 )
    }
    const double = useCallback(()=>{
        setCount((c)=> 2*c )
    },[])
    

    console.log(`Parentが再描画, count=${count}`)

    return (
        <div>
            <p>{`COUNT:${count}`}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}

export default ParentMemoCallback