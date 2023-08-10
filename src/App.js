import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import WarehouseListing from './Components/WarehouseListing';
import Home from './Components/home';
import AddWarehouse from './Components/AddWarehouse';
import EditWarehouse from './Components/EditWarehouse';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WarehouseDetails from './Components/WarehouseDetails';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>

          {/* <div className='header'>
            <Link to={'/'}>Stock Area</Link>
          </div> */}
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/warehouse' element={<WarehouseListing></WarehouseListing>}></Route>
            <Route path='/warehouse/add/' element={<AddWarehouse></AddWarehouse>}></Route>
            <Route path='/warehouse/:id' element={<WarehouseDetails></WarehouseDetails>}></Route>
            <Route path='/warehouse/edit/:id' element={<EditWarehouse></EditWarehouse>}></Route>
          </Routes>

        </BrowserRouter>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
