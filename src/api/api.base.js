import request from 'superagent'

baseApiUrl = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=SGD,GBP,EUR,IDR'

function detail(){
  return request.get(`${this.baseApiUrl}`)
}

const ApiBases = {
  detail,
}

export default ApiBases