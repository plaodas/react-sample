const Hello = () => {
    const onClick =()=>{
        alert('hello')
    }
    const text = 'Hello react'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )

}
export default Hello