import React, { Component } from 'react'
import Item from './Item'
import uuid from 'uuid'
import Select from 'react-select'

class ForeignExchange extends Component {
    state = {
      isEdit:false,
      currency:'100',
      defaultCurrency:[],
      selectedOption: null,
      theoptions:[],
      date: '',
    }

  baseApiUrlOptions = 'https://api.exchangeratesapi.io/latest?base=USD'
  baseApiUrl = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=SGD,GBP,EUR,IDR'

  componentDidMount(){
    // request.get(`${this.baseApiUrl}`).then(res =>{
    //   let data = res.body.rates
    //   let result = Object.keys(data).map(function(key) {
    //     return ({
    //       id:uuid(),
    //       date:res.body.date,
    //       price:data[key],
    //       typeCurrency:key
    //     })
    //   })
    //   this.setState({
    //     defaultCurrency : result.reverse(),
    //     date : res.body.date
    //   })
    // })

    // request.get(`${this.baseApiUrlOptions}`).then(res =>{
    //   let dataOptions = res.body.rates
    //   let resultOptions = Object.keys(dataOptions).map(function(key) {
    //     return ({
    //       value:dataOptions[key],
    //       label:key
    //     })
    //   })
    //   this.setState({
    //     theoptions:resultOptions
    //   })   
    // })
  }

  getDefaultData = () => {

  }

  handleChangeEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
    if(this.state.currency === '' || this.state.currency === '0'){
      this.setState({
        currency : '100'
      })
    }
  }
  
  handleChangeCurrency = (e) => {
    this.setState({
      currency : e.target.value
    })
  }

  handleChangeSelect = (selectedOption) => {
    this.setState({
      selectedOption:selectedOption 
    })
  }

  handleDelete = (id) => {
    let newItems = this.state.defaultCurrency.filter((item) => {
      return item.id !== id
    })
    this.setState({ defaultCurrency: newItems });
  }

  handleSubmit = () => {
    let item = {
      id:uuid(),
      date:this.state.date,
      price:this.state.selectedOption.value,
      typeCurrency:this.state.selectedOption.label
    }
    
    let a = this.state.defaultCurrency.filter((data) => {
      return data.typeCurrency === item.typeCurrency 
    })

    if(a.length < 1){
      let newState = this.state.defaultCurrency.concat(item)
      this.setState({ defaultCurrency: newState })
    }
  }
  
  render() {
    const selectedOption = this.state.selectedOption
    const options = this.state.theoptions    
    let currencyList = this.state.defaultCurrency.map((item) => {
      return(
          <Item key={item.id} item={item} handleDelete={this.handleDelete} currency={this.state.currency} />        
      )
    })
  
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
                        <h4 className="">
                        {this.state.isEdit ? <input className="form-control text-right" type="number" value={this.state.currency} onChange={this.handleChangeCurrency} onBlur={this.handleChangeEdit}/> : 
                          <div className="edit d-inline-block position-relative">
                            {this.state.currency}
                            <button onClick={this.handleChangeEdit}></button>
                          </div>                        
                        }
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body scrolled">
                    {currencyList}
                  </div>
                  <div className="card-footer">
                    <div className="input-group">
                      <Select 
                        className="form-control p-0 border-0" 
                        value={selectedOption} 
                        onChange={this.handleChangeSelect} 
                        options={options} 
                        placeholder="Choose currency" />
                      <div className="input-group-append">
                        <button onClick={this.handleSubmit} className="btn btn-dark">
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
    );
  }
}

export default ForeignExchange