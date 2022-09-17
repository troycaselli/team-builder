import './form.css';

export default function Form(props) {
    const {changeValues, formValues, submitForm, error} = props;

    return (
        <div className='formCard'>
            <h1>Team Members Form</h1>
            <form onSubmit={submitForm}>
                <div className='container'>
                <label>Name:</label>
                <input 
                    name='name'
                    value={formValues.name || ''}
                    type='text'
                    placeholder='John Smith'
                    onChange={changeValues} />
                </div>
                <div className='container'>
                <label>Email:</label>
                <input
                    name='email'
                    value={formValues.email || ''}
                    type='email'
                    placeholder='johnsmith@gmail.com'
                    onChange={changeValues} />
                </div>
                <div className='container'>
                <label>Role:</label>
                <select name='role' onChange={changeValues} value={formValues.role || ''}>
                    <option value=''>---Select---</option>
                    <option value='1'>Backend</option>
                    <option value='2'>Frontend</option>
                    <option value='3'>Fullstack</option>
                    <option value='4'>Data Science</option>
                </select>
                </div>
                <div className='container'>
                <label>Weekly Commitment:</label>
                <select name='commitment' onChange={changeValues} value={formValues.commitment || ''}>
                    <option>---Select---</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>None!</option>
                </select>
                </div>
                <div>
                <button className='submitButton'>Submit</button>
                {error && <h4 id='error'>{error}</h4>}
                </div>
            </form>
        </div>
    )
}