import {useState} from 'react';
import Form from './components/form';
import Member from './components/member';
import './App.css';

const membersData = [{
  id: 1,
  name: 'Troy Caselli',
  email: 'swordandtrowel1689@gmail.com',
  role: 'project manager',
  commitment: 'full time'
},
{
  id: 2,
  name: 'John Caselli',
  email: 'swordandtrowel1689@gmail.com',
  role: 'project manager',
  commitment: 'full time'
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

  const changeValues = evt => {
    setFormValues({...formValues, id: members.length + 1, [evt.target.name]: evt.target.value})
  }

  const submitForm = evt => {
    evt.preventDefault();
    // setMembers(...members, formValues)
  }
  console.log(formValues)
  console.log(members)

  return (
    <div className="App">
      <Form changeValues={changeValues} formValues={formValues} submitForm={submitForm}/>
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
