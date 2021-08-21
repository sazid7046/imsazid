import { createMuiTheme } from "@material-ui/core/styles";

const arcWhite =  "#F0EDEB";
const arcOrange = "#EA5E00";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcWhite,
      orange: arcOrange
    },
    primary: {
      main: arcWhite
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: " 'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      color: "#242323",
    },
    h1:{
      fontSize: '36px',
      fontWeight: 400,
      color: '#000000',
      // wordBreak: 'break-word'
    },    
    h6:{
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 400
    },
    body1:{
      fontSize: '18px',
      color: '#515151',
      fontWeight: 400,
    },


  }
});
