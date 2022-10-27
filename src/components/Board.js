import React, { useState } from 'react'

import Letter from './Letter'

const Board = () => {

  return (
    <div className='board'>
      
      <div className='row'>
        <Letter letterPost={0} attemptValue={0} />
        <Letter letterPost={1} attemptValue={0} />
        <Letter letterPost={2} attemptValue={0} />
        <Letter letterPost={3} attemptValue={0} />
        <Letter letterPost={4} attemptValue={0} />
      </div>
      
      <div className='row'>
        <Letter letterPost={0} attemptValue={1} />
        <Letter letterPost={1} attemptValue={1} />
        <Letter letterPost={2} attemptValue={1} />
        <Letter letterPost={3} attemptValue={1} />
        <Letter letterPost={4} attemptValue={1} />
      </div>
      
      <div className='row'>
        <Letter letterPost={0} attemptValue={2} />
        <Letter letterPost={1} attemptValue={2} />
        <Letter letterPost={2} attemptValue={2} />
        <Letter letterPost={3} attemptValue={2} />
        <Letter letterPost={4} attemptValue={2} />
      </div>
      
      <div className='row'>
        <Letter letterPost={0} attemptValue={3} />
        <Letter letterPost={1} attemptValue={3} />
        <Letter letterPost={2} attemptValue={3} />
        <Letter letterPost={3} attemptValue={3} />
        <Letter letterPost={4} attemptValue={3} />
      </div>
      
      <div className='row'>
        <Letter letterPost={0} attemptValue={4} />
        <Letter letterPost={1} attemptValue={4} />
        <Letter letterPost={2} attemptValue={4} />
        <Letter letterPost={3} attemptValue={4} />
        <Letter letterPost={4} attemptValue={4} />
      </div>
      
      <div className='row'>
        <Letter letterPost={0} attemptValue={5} />
        <Letter letterPost={1} attemptValue={5} />
        <Letter letterPost={2} attemptValue={5} />
        <Letter letterPost={3} attemptValue={5} />
        <Letter letterPost={4} attemptValue={5} />
      </div>


    </div>
  )
}

export default Board