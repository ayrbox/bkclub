import theme from 'mdx-deck/themes'
import Provider from './Provider'

export default {
  ...theme,
  font: 'Chivo, Roboto, sans-serif',
  colors: {
    text: '#fff',
    background: '#007bff',
    link: '#0ff',
  },
  css: {
    fontSize: '20px',
    backgroundImage: 'linear-gradient(135deg, #007bff 0%, #161656 90%)',
  },
  Provider
}
