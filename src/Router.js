
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import Chat from "./screens/Chat";
import Main from './screens/Main';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightBlue, indigo, green, } from '@mui/material/colors';

//redux
import { useDispatch, useSelector } from 'react-redux';

//redux functions
import { setDimensions } from "./redux/reducers/dimensions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/chat/:chatid",
    element: <Chat />,
    //errorElement: <ErrorPage />,
  },
  {
    path:"*",
    element:<Navigate to="/" />
  }
]);

{/*
  <color name="Middle Blue Green" hex="84dcc6" r="132" g="220" b="198" />
  <color name="Columbia Blue" hex="d6edff" r="214" g="237" b="255" />
  <color name="White" hex="ffffff" r="255" g="255" b="255" />
  <color name="Blue Bell" hex="8b95c9" r="139" g="149" b="201" />
  <color name="Middle Green" hex="488a4d" r="72" g="138" b="77" />
*/}


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          divider: lightBlue,
          secondary:green ,
          background:{
            default:'#D6EDFF',
            paper:'#84DCC6',
            icon:"#434",
          },
          text: {
            primary: '#000',
            secondary: '#333',
          },
        }
      : {
          // palette values for dark mode
          primary: indigo,
          divider: indigo[700],
          background: {
            default: '#5941A9',
            paper: '#5941A9',
          },
          text: {
            primary: '#D4D4D4',
            secondary: '#D0D0D0',
          },
        }),
  },
});

function Router() {
  var mode = useSelector((state) => state.theme.theme);
  const darkModeTheme = createTheme(getDesignTokens(mode));
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setDimensions({width:window.innerWidth,height:window.innerHeight}))
    })
  });

  return (
      <ThemeProvider theme={darkModeTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
  )
}

export default Router;
