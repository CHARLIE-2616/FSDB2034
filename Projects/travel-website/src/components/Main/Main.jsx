import React,{useEffect} from 'react'
import './Main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

import img from '../../Assets/IMG (1).jpg'
import img2 from '../../Assets/IMG (2).jpg'
import img3 from '../../Assets/IMG (3).jpg'
import img4 from '../../Assets/IMG (4).jpg'
import img5 from '../../Assets/IMG (5).jpg'
import img6 from '../../Assets/IMG (6).jpg'
import img7 from '../../Assets/IMG (7).jpg'
import img8 from '../../Assets/IMG (8).jpg'
import img9 from '../../Assets/IMG (9).jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'French Polynesia',
    grade: 'CULTURAL RELAX',
    fees: '₹3,50,000',
    description: 'Bora Bora, a paradise in French Polynesia, is renowned for its turquoise waters, overwater bungalows, and breathtaking coral reefs. A perfect destination for relaxation and water activities.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Cusco Region, Peru',
    grade: 'CULTURAL RELAX',
    fees: '₹2,50,000',
    description: 'Machu Picchu is a historic Inca city nestled in the Andes Mountains. Known for its archaeological significance, it offers stunning views and insight into ancient civilization.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Angkor Wat',
    location: 'Siem Reap, Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '₹50,000',
    description: 'Angkor Wat is the largest religious monument in the world. This iconic temple complex in Cambodia is a symbol of Khmer architecture and spirituality, attracting millions of visitors annually.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Taj Mahal',
    location: 'Agra, India',
    grade: 'CULTURAL RELAX',
    fees: '₹30,000',
    description: 'The Taj Mahal, an ivory-white marble mausoleum, is a symbol of love and an architectural masterpiece. Located in Agra, it is one of the most famous landmarks in India.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Guanajuato, Mexico',
    grade: 'CULTURAL RELAX',
    fees: '₹2,00,000',
    description: 'Guanajuato is a vibrant city known for its colorful colonial houses, underground streets, and rich history. It is a UNESCO World Heritage Site, famous for its cultural festivals.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '₹60,000',
    description: 'Bali Island is a tropical paradise in Indonesia, known for its lush landscapes, iconic rice terraces, and serene beaches. It offers a mix of adventure, culture, and relaxation.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Cinque Terre',
    location: 'Liguria, Italy',
    grade: 'CULTURAL RELAX',
    fees: '₹3,50,000',
    description: 'Cinque Terre, a picturesque coastal region in Italy, is famous for its colorful villages perched on cliffs. It is a haven for hiking, seafood, and breathtaking views of the Mediterranean.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Cappadocia',
    location: 'Central Anatolia, Turkey',
    grade: 'CULTURAL RELAX',
    fees: '₹2,00,000',
    description: 'Cappadocia, in Turkey, is known for its unique landscapes, fairy chimneys, and ancient cave dwellings. Hot air balloon rides offer stunning views of this surreal region.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Great Barrier Reef',
    location: 'Queensland, Australia',
    grade: 'CULTURAL RELAX',
    fees: '₹4,00,000',
    description: 'The Great Barrier Reef, off Australia\'s coast, is the world\'s largest coral reef system. A UNESCO World Heritage site, it is a prime destination for diving and marine exploration.'
  }
];


const Main = () => {

  useEffect(()=> {
    Aos.init({duration:2000})
  },[])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Main