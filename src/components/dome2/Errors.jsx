import React, { Component } from 'react'

export default class Errors extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            null.map((item,index) =>{
              <div key={index}>{item}</div>
            })
          }
        </ul>
      </div>
    )
  }
}
