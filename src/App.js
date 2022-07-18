import RequestBlock from './components/RequestBlock/RequestBlock';
import DeliveryList from './components/DeliveryList/DeliveryList';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import EditRequest from './components/pages/EditRequest';
import './App.scss';



const App = () => {
  return (
    <div className="App">
      <h1 className='app-name'>Delivery application</h1>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-request/:id" element={<EditRequest />} />
      </Routes>
      {/* <RequestBlock /> */}
      {/* <DeliveryList /> */}
    </div>
  );
}

export default App;
