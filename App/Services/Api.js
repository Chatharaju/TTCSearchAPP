// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
// const create = (baseURL = 'https://api.github.com/') => {
const create = (baseURL = 'http://webservices.nextbus.com/service/') => {
  const api = apisauce.create({
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})

  const getRouteList = (rValue) => api.get('publicXMLFeed', { command: 'routeConfig', a: 'sf-muni', r: rValue})

  return {
    getRoot,
    getRate,
    getUser,
    getRouteList
  }
}
export default {
  create
}
