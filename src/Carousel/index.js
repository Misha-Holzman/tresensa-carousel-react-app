import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { createSlides } from '../SplideSlides'
import './style.css'
import img1 from '../images/dunkin.png'
import img2 from '../images/bestfiends.png'

export default class Carousel extends React.Component {
  constructor (props) {
    super(props)

    this.primaryRef = React.createRef()
    this.secondaryRef = React.createRef()
  }

  /**
   * Set the sync target right after the component is mounted.
   */
  componentDidMount () {
    this.primaryRef.current.sync(this.secondaryRef.current.splide)
  }

  /**
   * Render slides.
   * @return {ReactNode[]}
   */
  renderSlides () {
    return createSlides().map(slide => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ))
  };

  /**
   * Render the component.
   *
   * @return {ReactNode} - React component.
  */
  render () {
    const primaryOptions = {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      gap: '1rem',
      pagination: false
    }

    const secondaryOptions = {
      type: 'slide',
      rewind: true,
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
      <div className='wrapper'>

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
