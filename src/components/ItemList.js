import React, { Component } from 'react'

class ItemList extends Component {
  
  handleDelete = () => {    
    let confirm = window.confirm("Are you sure want to delete this record ?");
    if (confirm) {
        let id = this.props.item.id
        this.props.handleDelete(id)
    } else {
        console.log('You pressed Cancel!')
    }
  }

  render(){
    return(
      <div className="card my-3">
        <div className="card-header border-0 position-relative">
          <div className="row">
            <div className="col-3">
              <h5>
                {this.props.item.typeCurrency}
              </h5>
            </div>
            <div className="col-9 text-right">
              <h5>          
                {Math.round((this.props.item.price * this.props.currency) * 100) / 100}            
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <i>1 USD  = {this.props.item.typeCurrency} {Math.round((this.props.item.price) * 100) / 100}</i>
            </div>
          </div>
          <button className="btn btn-delete" onClick={this.handleDelete}><span className="d-block">-</span></button>
        </div>
      </div>
    )
  }
}

export default ItemList