import SidebarComponent from './components/SidebarComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx'
import './style/main.scss';

function App() {
  return (
    <div className='ms_app container-fluid'>
      <div className="row">
        <SidebarComponent/>
        <HomeComponent/>
      </div>
    </div>
  );
}

export default App;
