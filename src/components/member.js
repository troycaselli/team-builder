import './member.css';

export default function Member(props) {
    const {member} = props;

    return (
        <div className='card'>
            <h5>{member.name.toUpperCase()}</h5>
            <div className='info'>
                <p>{member.email}</p>
                <p>{member.role}</p>
                <p>{member.commitment}</p>
            </div>
        </div>
    )
}