import React, { useState, useEffect } from 'react'
import './style.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import leftArrow from '../images/carousel-arrow-left.png'
import rightArrow from '../images/carousel-arrow-right.png'

function App () {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })

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
      <div>
        <div className='next-slick-arrow'> <img src={rightArrow} height='30px' alt='' /></div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className='prev-slick-arrow'> <img src={leftArrow} height='30px' alt='' /></div>
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
      title: 'repellendus id ullam',
      label: 'Dolorem officiis temporibus.'
    }, {
      id: 2,
      title: 'excepturi consequatur est',
      label: 'Officia non provident dolor esse et neque.'
    }, {
      id: 3,
      title: 'eius doloribus blanditiis',
      label: 'Ut recusandae vel vitae molestiae id soluta.'
    }, {
      id: 4,
      title: 'nihil voluptates delectus',
      label: 'Qui vel consequatur recusandae illo repellendus.'
    }, {
      id: 5,
      title: 'nemo dolorem necessitatibus',
      label: 'Placeat odit velit itaque voluptatem.'
    }, {
      id: 6,
      title: 'dolorem quibusdam quasi',
      label: 'Adipisci officiis repudiandae.'
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
              <img className='slick-slide-image' src={`https://picsum.photos/800/400?img=${slide.id}`} alt='' />
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

              <div className='slick-slide' key={slide.id}>
                <img className='slick-slide-image' src={`https://picsum.photos/800/400?img=${slide.id}`} alt='' />
              </div>

            )}

          </Slider>
        </div>
      </div>

    </div>
  )
}

export default App
