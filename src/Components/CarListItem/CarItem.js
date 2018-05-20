import React, {Component} from 'react'
import '../CarListItem/CarImg/CarImg.css'
import fullsize from '../img/car-fullsize.jpg'
import compact from '../img/car-compact.jpg'
import minivan from '../img/car-minivan.jpg'
import SUV from '../img/car-SUV.jpg'
import CarRentButton from "./CarRentButton/CarRentButton";

const options = {
  minivan: {
    label: 'MINIVAN ',
    imageUrl: minivan
  },
  suv: {
    label: 'SUV ',
    imageUrl: SUV
  },
  compact: {
    label: 'COMPACT ',
    imageUrl: compact
  },
  fullsize: {
    label: 'FULLSIZE ',
    imageUrl: fullsize
  }

};

class CarItem extends Component {
  render() {
    const {car} = this.props
    console.log('CarItem render (this.props.car)', car)
    if(typeof car === 'undefined') {
      return (<div></div>)
    }
    return (
      <div key={car.id} className="CarType">
        <img src={(options[car.carbody] || {}).imageUrl || SUV} alt="car-compact" className="CarImg"/>
        <div className="CarInfo">
          <p>
            <strong>{(options[car.carbody] || {}).label || 'Car Undefined'}</strong>
            <span>{car.make}, {car.model}, {car.productionYear}</span>
          </p>
          {car.features.length === 0 ? '' : <p><strong>Features:</strong> {car.features.join(', ')}</p>}
        </div>
        <CarRentButton carId={car.id}/>

      </div>
    )
  }
}

export default CarItem