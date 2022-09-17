import {useState} from 'react';
import Form from './components/form';
import Member from './components/member';
import './App.css';

const membersData = [{
  id: 1,
  name: 'Troy Caselli',
  email: 'swordandtrowel1689@gmail.com',
  role: 'Project Manager',
  commitment: 'Full Time'
}];

const initialValues = {
  id: '',
  name: '',
  email: '',
  role: '',
  commitment: ''
};

function App() {
  const [members, setMembers] = useState(membersData);
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState('');

  const changeValues = evt => {
    setFormValues({...formValues, id: members.length + 1, [evt.target.name]: evt.target.value})
  }

  const submitForm = evt => {
    evt.preventDefault();
    if(!formValues.name || !formValues.email || !formValues.role || !formValues.commitment) {
      setError('*All fields must be filled out*')
    } else {
      setMembers([...members, formValues])
      setFormValues(initialValues);
      setError('');
    }
  }
  console.log(formValues);

  return (
    <div className="App">
      <Form changeValues={changeValues} formValues={formValues} submitForm={submitForm} error={error}/>
      <section>
        <h3>Members</h3>
        <div>
          {members.map(member => {
            return <Member key={member.id} member={member}/>;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
