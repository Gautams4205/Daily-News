import React, { Component } from 'react'


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif" alt='Not Available'/>
      </div>
    )
  }
}

export default Spinner
