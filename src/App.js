import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllVisitors from './components/ViewAllVisitors';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddVisitor/>} />
        <Route path='/viewall' element={<ViewAllVisitors/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
