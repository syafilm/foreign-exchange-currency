import request from 'superagent'

const baseApiUrl = 'https://api.exchangeratesapi.io/latest?base=USD'

function option() {
  return request.get(`${baseApiUrl}`)
}

const ApiOptions = {
  option,
}

export default ApiOptions
