// import logo from './logo.svg';
import './App.css';
import logo from './hrm_logo.png';
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import qhrm from './hrm_login_image.png';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="row login_block">
        <div className="login_left col-md-5">
          <h3>
            World class Human Resource Management system.
          </h3>
          <p>QHRM is a comprehensive cloud-based HR Management solution with Android and IOS mobile app. 100% customized to comply with Myanmar goverment rules. It helps to manage critical activites like Leave. Attendance, Payroll, Perfomance, Recruitment, Travel etc</p>
          <span className="Qhrm_image"> <img src={qhrm} /> </span>

        </div>
        <div className="login_right col-md-7">
          <Form className="login_form">
            <img src={logo} className="mb-3" />

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text><i class="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="emailFormInputGroup" placeholder="Email" />
            </InputGroup>

            <InputGroup className="mb-3 mt-4">
              <InputGroup.Prepend>
                <InputGroup.Text><i class="fa fa-unlock" aria-hidden="true"></i></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="passwordFormInputGroup" placeholder="Pasword" className="input_password" />
              <i class="fa fa-eye eye-icon" aria-hidden="true"></i>
            </InputGroup>
            <div className="keep_login">
              <Form.Check
                type="checkbox"
                id="customControlAutosizing"
                label="Keep me logged in"
                custom
              />
              <a href="">Forgot Password?</a>
            </div>

            <Button variant="primary" type="submit">Login</Button>
            <Button variant="primary" type="submit">Sign in with Office 365</Button>
            <p className="copyright_text">Copyright &#169; QHRM. All Rights Reserved |  <a href="" className="privacy_policy">Privacy Policy </a></p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
