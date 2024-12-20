
import './App.css'
import pfp from './assets/pfp.jpeg';
import Header from './components/Header';

function App() {

  return (
    <>
      <div>
        <Header />
        <a target="_blank" rel="noopener">
          <img src={pfp} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to my portfolio.</h1>
      <div className="card">
        <div>
          
        </div>
      </div>
    </>
  )
}

export default App
