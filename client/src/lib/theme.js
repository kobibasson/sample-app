import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    //   primary: {
    //       main: '#ffffff'
    //   },
    //   secondary: {
    //       main: '#ffffff'
    //   },
      type: 'dark',
  },
  overrides: {
    MuiInput: {
        underline: {
          '&:before': {
            borderBottomColor: "#ffffff",
          },
          '&:after': {
            borderBottomColor: "#ffffff"
          },
        },
      },
  }
})

export default theme