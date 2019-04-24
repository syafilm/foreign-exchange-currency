import request from 'superagent'

const baseApiUrl = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=SGD,GBP,EUR,IDR'

function detail() {
  return request.get(`${baseApiUrl}`)
}

const ApiBases = {
  detail,
}

export default ApiBases
