import theme from 'mdx-deck/themes'
import Provider from './Provider'

export default {
  ...theme,
  font: 'Chivo, Roboto, sans-serif',
  colors: {
    text: '#fff',
    background: '#007bff',
    link: '#007bff',
  },
  css: {
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '20px',
    },
    backgroundImage: 'linear-gradient(135deg, #007bff 0%, #161656 90%)',
  },
  quote: {
    fontSize: '14px',
    color: '#000',
    fontWeight: 'lighter',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 0px 20px rgba(0,0,0,.14)'
  },
  Provider
}
