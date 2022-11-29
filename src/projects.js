import sinstagramImg from '../src/assets/sinstagram.png'
import blazeImg from '../src/assets/blaze.png'
import waldowImg from '../src/assets/waldow.png'

const projects = [
  {
    id: 0,
    title: 'Sinstagram',
    description:
      'Fully functional photo sharing social media app to share your moments with friends and family in real-time.',
    live: 'https://sinstagram.netlify.app/',
    repo: 'https://github.com/kenizaya/sinstagram',
    type: 'FULL STACK',
    languages: 'React | Firebase | Tailwind CSS',
    image: sinstagramImg,
  },
  {
    id: 1,
    title: 'Blaze',
    description:
      'Fashion e-commerce store with multiple filters, integrated with auth and Stripe to keep you up with the trends.',
    live: 'https://blaze-fashion.netlify.app/',
    repo: 'https://github.com/kenizaya/blaze',
    type: 'WEB APP',
    languages: 'React | Auth | Serverless Functions | Stripe',
    image: blazeImg,
  },
  {
    id: 2,
    title: 'Waldow',
    description:
      "Photo tagging puzzle game inspired by where's waldo with multiple levels to compete against the best.  ",
    live: 'https://kenizaya.github.io/waldow/',
    repo: 'https://github.com/kenizaya/waldow',
    type: 'WEB APP',
    languages: 'React | Firebase | Javascript',
    image: waldowImg,
  },
]

export default projects
