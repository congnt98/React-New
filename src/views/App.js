
import '../styles/App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './menu/nav';
// import Home from './Example/home';
// import Listuser from './Users/Listuser';
// import Detailuser from './Users/detailuser';
// import ListTodo from './todos/listTodo';
// import Todopro from './todopro/todopro';
// import Colorpick from './colorPick/colorPick';
import Routers from '../routers/router';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // showroiter = (Routers) => {
  //   if (Routers.length > 0) {
  //     var resuft = Routers.map((router, index) => {
  //       return (<Route key={index} path={router.path} element={router.main} />)
  //     })
  //   }
  // }
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="colorpick" element={<Colorpick />} /> */}
      </Routes>
      <Menu />
      <header className="App-header">
        <Routes>
          {/* <Route path="colorpick" element={<Colorpick />} />
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ListTodo />} />
          {/* <Route path="/todopro" element={<Todopro />} /> */}
          {/* <Route path="/user" element={<Listuser />} />
          <Route path="/user/:id" element={<Detailuser />} /> */}
          {
            Routers.map((router, index) => {
              return <Route key={index} path={router.path} element={router.element} />
            })
          }

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
    </BrowserRouter>

  );
}

export default App;
