import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Sidebar className='sidebar' />
      <div className="main">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
