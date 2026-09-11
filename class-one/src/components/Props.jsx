import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} className="card-image" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.bio}</p>
        </div>
    );
}

Student.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string
};

export default Student;