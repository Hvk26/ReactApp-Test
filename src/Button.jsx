
function Button(){
    
    const styles = {
        borderRadius: "5px",
        backgroundColor: "brown"       
    }

    const eventHandler = ()=>console.log("Ouch!!");
    return(
        <button style={styles} onClick={eventHandler}>Click me</button>
    );
}

export default Button