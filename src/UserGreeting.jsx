function UserGreeting(props){
    return(
        props.isLoggedIn ? <h1>welcome {props.username} eat the Sushi!!</h1> :
                           <h1>Please Login to eat Sushi!!</h1>
    );
}

export default UserGreeting