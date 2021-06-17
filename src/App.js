
import './App.css';
import Navi from './Layouts/Navi';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Layouts/Dashboard';
import JobAdvertRegister from './Pages/JobAdvertRegister';
import JobAdEmployeeCheck from './Pages/JobAdEmployeeCheck';


function App() {
  return (
    <div className="App">

<Navi/>
      {/* <Container className="main">
<Dashboard/>
</Container> */}
{/* <JobAdvertRegister>

</JobAdvertRegister> */}
<JobAdEmployeeCheck></JobAdEmployeeCheck>
    </div>
  );
}

export default App;
