import { createGlobalStyle } from 'styled-components'

const CssBaseline = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  html{
    font-size: 16px;
   
  } 
  body {
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(103,58,183,1) 30%, rgba(126,87,194,1) 100%);
  }
  html, body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;

    height: 100%;
    > #root {
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }
`

export default CssBaseline
