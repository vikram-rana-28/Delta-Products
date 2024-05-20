function handleClick(){
    console.log("Hello")
}

function handleMouseOver(){
    console.log("bye")
}

export default  function Button(){
    return(
        <div>
            <button onClick= {handleClick}>Click me!</button>
            <p onClick = {handleMouseOver}>This parah is for event demo</p>
        </div>
    );
}
