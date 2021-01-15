import React, { useState, useEffect } from 'react'
import './style.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import leftArrow from '../images/carousel-arrow-left.png'
import rightArrow from '../images/carousel-arrow-right.png'
import image1 from '../images/gatorade.png'
import image2 from '../images/orbitvenice.png'
import image3 from '../images/pomodoro.png'
import image4 from '../images/soberana.png'
import image5 from '../images/temptations.png'
import image6 from '../images/whackamole.png'


function App () {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    infinate: true,
    pauseOnHover: true,
    speed: 500,
    fade: true,
    asNavFor: '.slider-nav',
    lazyLoad: 'progressive',
    arrows: true,
    nextArrow: (
      <div className='next-slick-arrow' style={{ opacity: '100% !important' }}>
        <img src={rightArrow} height='30px' alt='' style={{ opacity: '100% !important' }} />
      </div>
    ),
    prevArrow: (
      <div className='prev-slick-arrow' style={{ opacity: '100% !important' }}> 
        <img src={leftArrow} height='30px' alt='' style={{ opacity: '100% !important' }} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  }

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    speed: 500,
    focusOnSelect: true,
    centerPadding: '10px',
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 0
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 0
        }
      }
    ]
  }

  const slidesData = [
    {
      id: 1,
      title: 'Gatorade',
      label: 'Dolorem officiis temporibus.',
      image: image1
    }, {
      id: 2,
      title: 'Orbit',
      label: 'Officia non provident dolor esse et neque.',
      image: image2
    }, {
      id: 3,
      title: 'Pomodoro',
      label: 'Ut recusandae vel vitae molestiae id soluta.',
      image: image3
    }, {
      id: 4,
      title: 'Soberana',
      label: 'Qui vel consequatur recusandae illo repellendus.',
      image: image4
    }, {
      id: 5,
      title: 'Temptations',
      label: 'Placeat odit velit itaque voluptatem.',
      image: image5
    }, {
      id: 6,
      title: 'Whack-a-mole',
      label: 'Adipisci officiis repudiandae.',
      image: image6
    }
  ]

  return (

    <div className='App'>

      <div className='slider-wrapper'>

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {slidesData.map((slide) =>

            <div className='slick-slide' key={slide.id}>
              <h2 className='slick-slide-title'>{slide.title}</h2>
              <div className='image-container'>
                <img className='slick-slide-image' src={`${slide.image}`} alt='' />
              </div>
              {/* <label className='slick-slide-label'>{slide.label}</label> */}
            </div>

          )}

        </Slider>
        <div className='thumbnail-slider-wrap'>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>
              <div className='thumbnail-image-container'>
                <div className='slick-slide-thumbnails' key={slide.id}>
                  <img className='slick-slide-thumbnail-image' src={`${slide.image}`} alt='' />
                </div>
              </div>
            )}

          </Slider>
        </div>
      </div>

    </div>
  )
}

export default App
