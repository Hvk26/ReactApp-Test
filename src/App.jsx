import UserGreeting from './UserGreeting.jsx'

function App() {
 return(
    <>
        <UserGreeting isLoggedIn = {true} username = "Harsh"/>
        <UserGreeting isLoggedIn = {false} username = "Mohit"/>
    </>
 );
}

export default App
