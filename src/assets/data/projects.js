import { v4 as uuidv4 } from 'uuid';
import StripeSubmenu from '../images/Stripe_Menu.png';
import ExpenseTracker from '../images/Expense_Tracker.png';
import weatherPic from '../images/Weather_App.png';
import drumKit from '../images/Drum_Kit.png';
import cockTails from '../images/Cocktails.png';
import creditCard from '../images/credit_card.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Expense Tracker App',
    desc: `An application to track the expenses of an individual.You can log in your expenses on daily basis here. The expense of previous years can be easily checked by changing the year and month feature.`,
    img: ExpenseTracker,
    link: 'https://rajakumar1995.github.io/csb-eooiy/',
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc: `A simple app made with nodeJs to check weather of a city.It gives temperature in Kelvin. Also, it gives virtual represntation of weather in the form of a picture.The app is deployed using HeroKu.`,
    img: weatherPic,
    link: 'https://weather-app-104.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Drum Kit',
    desc: `An application made with just JavaScript and CSS.In this application we produce vocals of different instruments.The app prouces different sound as per the key pressed from button or mouse for you. `,
    img: drumKit,
    link: 'https://rahulranjank.github.io/Drum-Kit/',
  },
  {
    id: uuidv4(),
    name: 'Stripe Submenus',
    desc: `An application to Check menu in a new way.It gives menu when we hover over a navlink.Earlier we used to get menu in the form of some vertical modal but here we had options to check menu in form Stripe.`,
    img: StripeSubmenu,
    link: 'https://stripe-menu-new.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Cocktails DB',
    desc: `An application to see list of cocktails in a store.We have used useContext API for it.There is also search functionality to get any particular items.We can search according to any type of drink also .`,
    img: cockTails,
    link: 'https://cocktail-db-rahul.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'List of Credit Cards',
    desc: `An application to see list of credit cards.We can add credit card and edit delete the credit card details using this site.We can also view the details of credit card in clicking the relevent button.`,
    img: creditCard,
    link: 'https://credit-card-list.netlify.app/',
  },
];

export default projects;
