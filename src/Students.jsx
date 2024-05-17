import PropTypes from 'prop-types'


//props are javascript object

function Student(props){
    const styles = {
        border: "5px red solid",
    }
    return(
        <div style ={styles}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.PropTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student