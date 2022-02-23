import logo from './logo.svg';
import '../styles/App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './menu/nav';
import Home from './Example/home';
import Listuser from './Users/Listuser';
import Detailuser from './Users/detailuser';
import MyCompponent from './Example/MyComponent';
import ListTodo from './todos/listTodo';
import Todopro from './todopro/todopro';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Colorpick from './colorPick/colorPick';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="colorpick" element={<Colorpick />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<MyCompponent />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/todopro" element={<Todopro />} />
            <Route path="/user" element={<Listuser />} />

            <Route path="/user/:id" element={<Detailuser />} />
          </Routes>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>

  );
}

export default App;
