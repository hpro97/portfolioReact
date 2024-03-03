// git add . && git commit -m "first commit" && git push

import './App.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes'
import header from '../components/header'
import footer from '../components/footer'

function App() {
  return (
    <Router>
      <div className="App">
        {header}
        <Routes />
        {footer}
      </div>
    </Router>
  );
};

export default App
