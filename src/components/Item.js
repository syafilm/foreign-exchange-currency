import React, { Component } from 'react'

class Item extends Component {
  handleDelete = () => {
    const {
      item,
      handleDelete
    } = this.props

    const confirm = window.confirm("Are you sure want to delete this record ?")
    if (confirm) {
      const id = item.id
      handleDelete(id)
    } else {
      console.log('You pressed Cancel!')
    }
  }

  calculateCurrency = (item, currency) => {
    return Math.round((item.price * currency) * 100) / 100
  }

  render(){
    const {
      item,
      currency,
    } = this.props

    return(
      <div className="card my-3">
        <div className="card-header border-0 position-relative">
          <div className="row">
            <div className="col-3">
              <h5>
                {item.typeCurrency}
              </h5>
            </div>
            <div className="col-9 text-right">
              <h5>
                {this.calculateCurrency(item, currency)}
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <i>1 USD  = {item.typeCurrency} {this.calculateCurrency(item, currency)}</i>
            </div>
          </div>
          <button className="btn btn-delete" onClick={this.handleDelete}>
            <span className="d-block"> - </span>
          </button>
        </div>
      </div>
    )
  }
}

export default Item