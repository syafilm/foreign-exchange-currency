import React, { Component } from 'react'
import { Item } from 'components'
import { ApiBases, ApiOptions } from 'api'
import uuid from 'uuid'
import Select from 'react-select'

class ForeignExchange extends Component {
  state = {
    isEdit: false,
    currency: '100',
    defaultCurrency: [],
    selectedOption: null,
    theoptions: [],
    date: '',
  }

  componentDidMount() {
    this.getDefaultData()
  }

  getDefaultData = async () => {
    await ApiBases.detail().then((response) => {
      const result = this.mapData(response)
      this.setState({
        defaultCurrency: result.reverse(),
        date: response.body.date,
      })
    })

    await ApiOptions.option().then((response) => {
      const resultOptions = this.mapDataOption(response)
      this.setState({
        theoptions: resultOptions,
      })
    })
  }

  mapData = (response) => {
    const data = response.body.rates
    const result = Object.keys(data).map(key => ({
      id: uuid(),
      date: response.body.date,
      price: data[key],
      typeCurrency: key,
    }))
    return result
  }

  mapDataOption = (response) => {
    const dataOptions = response.body.rates
    const result = Object.keys(dataOptions).map(key => ({
      value: dataOptions[key],
      label: key,
    }))
    return result
  }

  handleChangeEdit = () => {
    const {
      isEdit,
      currency,
    } = this.state

    this.setState({
      isEdit: !isEdit,
    })

    if (currency === '' || currency === '0') {
      this.setState({
        currency: '100',
      })
    }
  }

  handleChangeCurrency = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleChangeSelect = (selectedOption) => {
    this.setState({
      selectedOption,
    })
  }

  handleDelete = (id) => {
    const {
      defaultCurrency,
    } = this.state

    const newItems = defaultCurrency.filter(item => item.id !== id)
    this.setState({ defaultCurrency: newItems })
  }

  handleSubmit = () => {
    const {
      date,
      selectedOption,
      defaultCurrency,
    } = this.state

    const item = {
      id: uuid(),
      date,
      price: selectedOption.value,
      typeCurrency: selectedOption.label,
    }

    const filterCurrency = defaultCurrency.filter(data => data.typeCurrency === item.typeCurrency)

    if (filterCurrency.length < 1) {
      const newState = defaultCurrency.concat(item)
      this.setState({ defaultCurrency: newState })
    }
  }

  renderNominal = () => {
    const {
      isEdit,
      currency,
    } = this.state

    return (
      <h4 className="">
        {isEdit ? (
          <input
            className="form-control text-right"
            type="number"
            value={currency}
            name="currency"
            onChange={this.handleChangeCurrency}
            onBlur={this.handleChangeEdit}
          />
        ) : (
          <div className="edit d-inline-block position-relative">
            {currency}
            <button type="button" onClick={this.handleChangeEdit} />
          </div>
        )}
      </h4>
    )
  }

  renderCurrencyList = () => {
    const {
      defaultCurrency,
      currency,
    } = this.state

    return (
      defaultCurrency.map(item => (
        <Item
          key={item.id}
          item={item}
          handleDelete={this.handleDelete}
          currency={currency}
        />
      ))
    )
  }

  render() {
    const {
      selectedOption,
      theoptions,
    } = this.state

    return (
      <section className="h-100">
        <div className="h-100 container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-sm-5">
              <div className="d-block h-100 align-items-center">
                <h3 className="mb-4 text-center">Foreign Exchange Currency</h3>
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-12">
                        <span>United States Dollar</span>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col-6 text-left">
                        <div className="d-flex align-items-center h-100">
                          <h4 className="">
                            USD
                          </h4>
                        </div>
                      </div>
                      <div className="col-6 text-right">
                        {this.renderNominal()}
                      </div>
                    </div>
                  </div>
                  <div className="card-body scrolled">
                    {this.renderCurrencyList()}
                  </div>
                  <div className="card-footer">
                    <div className="input-group">
                      <Select
                        className="form-control p-0 border-0"
                        value={selectedOption}
                        onChange={this.handleChangeSelect}
                        options={theoptions}
                        placeholder="Choose currency"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          onClick={this.handleSubmit}
                          className="btn btn-dark"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ForeignExchange
