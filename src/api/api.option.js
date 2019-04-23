import request from 'superagent'

baseApiUrl = 'https://api.exchangeratesapi.io/latest?base=USD'

function option(){
  return request.get(`${this.baseApiUrl}`)
}

const ApiBases = {
  detail,
}

export default ApiBases