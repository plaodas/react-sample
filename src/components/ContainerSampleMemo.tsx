import React,{useState, memo} from "react";

type FizzProps = {
    isFizz:boolean,
}

const Fizz = (props:FizzProps) => {
    const {isFizz} = props
    console.log(`Fizzが再描画, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz': ''}</span>
}

type BuzzProps = {
    isBuzz:boolean,
    onClick: ()=>void,
}


const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz, onClick} = props
    console.log(`Buzzが再描画, isBuzz=${isBuzz}`)
    return (
        <span onClick={onClick}>{isBuzz ? 'Buzz': ''}</span>
    )
})

const ParentMemo = ()=>{
    const [count, setCount] = useState(1)
    const isFizz = count % 3 ===0
    const isBuzz = count % 5 ===0

    const onBuzzClick = ()=>{
        console.log(`BuzzClicked! isBuzz=${isBuzz}`)
    }
    

    console.log(`Parentが再描画, count=${count}`)

    return (
        <div>
            <button onClick={()=>setCount((c)=>c+1)}>+1</button>
            <p>{`COUNT:${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>
    )
}

export default ParentMemo