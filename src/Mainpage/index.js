import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import './style.css'
import img1 from '../images/dunkin.png'
import img2 from '../images/bestfiends.png'

// class Mainpage extends Component {
//   render () {
//     return (
//       <div className='mainpage-container'>
//         <h1>Enter Splide Carousel here :)</h1>
//         <Splide>
//           <SplideSlide>
//             <img src='https://i.imgur.com/WuvAk1m.png' alt='Image 1' height='400px' />
//           </SplideSlide>
//           <SplideSlide>
//             <img src='https://i.imgur.com/b0k8X1n.png' alt='Image 2' height='400px' />
//           </SplideSlide>
//         </Splide>
//         <div id='secondary-slider' className='splide'>
//           <div className='splide__track'>
//             <ul className='splide__list'>
//               <li className='splide__slide'>
//                 <img src='https://i.imgur.com/b0k8X1n.png' />
//               </li>
//               <li className='splide__slide'>
//                 <img src='https://i.imgur.com/b0k8X1n.png' />
//               </li>
//               <li className='splide__slide'>
//                 <img src='https://i.imgur.com/b0k8X1n.png' />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Mainpage

export default class Mainpage extends React.Component {
  constructor (props) {
    super(props)

    this.primaryRef = React.createRef()
    this.secondaryRef = React.createRef()
  }

  componentDidMount () {
    // Set the sync target right after the component is mounted.
    this.primaryRef.current.sync(this.secondaryRef.current.splide)
  }

  render () {
    const primaryOptions = {
      type: 'loop',
      width: 800,
      perPage: 2,
      perMove: 1,
      gap: '1rem',
      pagination: false
    }

    const secondaryOptions = {
      type: 'slide',
      rewind: true,
      width: 800,
      gap: '1rem',
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: 'center',
      isNavigation: true,
      updateOnMove: true
    }

    return (
      <div>
        <Splide options={primaryOptions} ref={this.primaryRef}>
          <SplideSlide>
            <img src={img1} alt='' height='400px' />
          </SplideSlide>
          <SplideSlide>
            <img src={img2} alt='' height='400px' />
          </SplideSlide>
        </Splide>

        <Splide options={secondaryOptions} ref={this.secondaryRef}>
          <div id='secondary-slider' className='splide'>
            <div className='splide__track'>
              <ul className='splide__list'>
                <li className='splide__slide'>
                  <img src={img1} alt='' />
                </li>
                <li className='splide__slide'>
                  <img src={img2} alt='' />
                </li>
                <li className='splide__slide'>
                  <img src={img2} alt='' />
                </li>
              </ul>
            </div>
          </div>
        </Splide>
      </div>
    )
  }
}
