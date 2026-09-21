
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      <header className="App-header">
        {
          showEmployees ? (
            <>
            <Employee name = "Dashi" role = "Engineer"/>
            <Employee/>
            </>
          
          ) : <p>
           <h2>Not Found</h2> 
          </p>
        }
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
