import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default class ThumbnailSlider extends React.Component {
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
					...
        </Splide>

        <Splide options={secondaryOptions} ref={this.secondaryRef}>
					...
        </Splide>
      </div>
    )
  }
}
