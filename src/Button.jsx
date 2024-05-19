
function Button(){
    
    const styles = {
        borderRadius: "5px",
        backgroundColor: "brown"       
    }

    // e is an event object

    const eventHandler =(e)=>{
        e.target.textContent = "OUCH!!";
    }
    return(
        <button style={styles} onClick={(e)=>eventHandler(e)}>Click me</button>
    );
}

export default Button