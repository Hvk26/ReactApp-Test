
function Button(){
    
    const styles = {
        borderRadius: "5px",
        backgroundColor: "brown"       
    }

    const eventHandler = ()=>console.log("Ouch!!");

    const eventHandler2 =(name)=>{
        console.log(`${name} don't click me`);
    }
    return(
        <button style={styles} onClick={()=>eventHandler2("HVK")}>Click me</button>
    );
}

export default Button