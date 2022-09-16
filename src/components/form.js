import './form.css';

export default function Form(props) {

    return (
        <div>
            <h1>Team Members Form</h1>
            <form>
                <div className='container'>
                <label>Name:</label>
                <input type='text' placeholder='John Smith' />
                </div>
                <div className='container'>
                <label>Email:</label>
                <input type='email' placeholder='johnsmith@gmail.com' />
                </div>
                <div className='container'>
                <label>Role:</label>
                <select>
                <option>---Select---</option>
                    <option>Backend</option>
                    <option>Frontend</option>
                    <option>Fullstack</option>
                    <option>Data Science</option>
                </select>
                </div>
                <div className='container'>
                <label>Weekly Commitment:</label>
                <select>
                    <option>---Select---</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>None!</option>
                </select>
                </div>
                <div>
                <button className='submitButton'>Submit</button>
                </div>
            </form>
        </div>
    )
}