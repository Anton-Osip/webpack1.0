import Person from './person'
import './styles/styles.css'
import './styles/style.scss'
import web from './images/webpack.png'

const Anton = new Person('Anton', 26, 'Minsk')

console.log(Anton)

document.querySelector('.img').src = web
