import {useState} from 'react';
import Form from './components/form';
import Member from './components/member';
import './App.css';

const membersData = [{
  name: 'Troy Caselli',
  email: 'swordandtrowel1689@gmail.com',
  role: 'project manager',
  commitment: 'full time'
},
{
  name: 'John Caselli',
  email: 'swordandtrowel1689@gmail.com',
  role: 'project manager',
  commitment: 'full time'
}];

function App() {
  const [members, setMembers] = useState(membersData);
console.log(members);
  return (
    <div className="App">
      <Form />
      <section>
        <h3>Members</h3>
        <div>
          {members.map(member => {
            return <Member member={member}/>;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
