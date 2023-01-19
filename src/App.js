import SidebarComponent from './components/SidebarComponent.jsx';
import './style/main.scss';

function App() {
  return (
    <div className='ms_app'>
      <div className="row">
        <div className="col-2">
          <SidebarComponent/>
        </div>
        <div className="col-10">
          <h1>React Fotoalbum</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
