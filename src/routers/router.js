
import Todopro from '../views/todopro/todopro';
import Colorpick from "../views/colorPick/colorPick";
import Home from "../views/Example/home";
import Listuser from "../views/Users/Listuser";
import Detailuser from "../views/Users/detailuser";


const Routers = [
    {
        path: '/',
        exact: true,
        element: <Home />

    },
    {
        path: '/todopro',
        exact: true,
        element: <Todopro />

    },
    {
        path: '/colorpick',
        exact: true,
        element: <Colorpick />

    },
    {
        path: '/user',
        exact: true,
        element: <Listuser />,
        // children: [
        //     {
        //         path: ':id',
        //         exact: true,
        //         element: <Detailuser />
        //     }
        // ]

    },
    {
        path: 'user/:id',
        exact: true,
        element: <Detailuser />

    },
];
export default Routers