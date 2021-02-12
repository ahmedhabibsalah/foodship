import product1 from '../../images/chicken.jpg';
import product2 from '../../images/London_broil.jpg';
import product3 from '../../images/fish.jpg';
import dessert1 from '../../images/molten-cake.jpg';
import dessert2 from '../../images/icecream.jpg';
import dessert3 from '../../images/Dessert-Tacos.jpg';
import dessert4 from '../../images/strawberry-shortcake.jpg';
import dessert5 from '../../images/sweet-couscous.jpg';

export const productData = [
    {
        img:dessert1,
        alt:'cake',
        name: 'Molten Cake',
        desc:'Molten chocolate cakes',
        price: '50 ج.م',
        button: 'Add to Cart'
    },
    {
        img:dessert2,
        alt:'cake',
        name:'Ice Cream',
        desc:'Vanilla ice cream',
        price:'30 ج.م',
        button: 'Add to Cart'
    },
    {
        img:dessert3,
        alt:'tacos',
        name:'Strawberry Tacos',
        desc:'Fresh Strawberry Breakfast Tacos ',
        price: '35 ج.م',
        button: 'Add to Cart'
    },
    {
        img:dessert4,
        alt: 'cake',
        name: 'Strawberry shortcake',
        desc:'A fluffy vanilla cake',
        price:'25 ج.م',
        button:'Add to Cart'
    },
    {
        img:dessert5,
        name:'Sweet Couscous',
        desc:'Sweet Couscous',
        price:'40 ج.م',
        button:'Add to Cart',
        alt:'couscous',
    },
]

export const productDataTwo = [
    {
        img:product1,
        name:"Chicken Meal",
        desc:"Healthy Chicken Meal",
        price:'60 ج.م',
        button:'Add to Cart',
        alt:'meats',
    
    },
    {
        img:product2,
        name:"Steak Meal",
        desc:'slice of meat cut from a fleshy part of a beef carcass.',
        price:'60 ج.م',
        button:'Add to Cart',
        alt:'meats'
    },
    {
        img:product3,
        name:"Fish Meal",
        desc:'salmon steak',
        price:'60 ج.م',
        button:'Add to Cart',
        alt:'meats'
    },
]