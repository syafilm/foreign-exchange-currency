import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  handleDelete = () => {
    const {
      item,
      handleDelete,
    } = this.props

    /* eslint-disable */
    const confirm = window.confirm('Are you sure want to delete this record ?')
    /* eslint-enable */
    if (confirm) {
      const { id } = item
      handleDelete(id)
    } else {
      /* eslint-disable */
      console.log('You pressed Cancel!')
      /* eslint-enable */
    }
  }

  calculateCurrency = (item, currency) => Math.round((item.price * currency) * 100) / 100

  render() {
    const {
      item,
      currency,
    } = this.props

    return (
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
              <i>
                1 USD  =
                {item.typeCurrency}
                {' '}
                {this.calculateCurrency(item, currency)}
              </i>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-delete"
            onClick={this.handleDelete}
          >
            <span className="d-block"> - </span>
          </button>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
  currency: PropTypes.string,
  handleDelete: PropTypes.func,
}

Item.defaultProps = {
  item: {},
  currency: '100',
  handleDelete: null,
}

export default Item
