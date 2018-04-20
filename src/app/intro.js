import _ from 'lodash'
import { ymd } from 'utils'

document.querySelector('#intro').innerHTML = _.isArray('string') + ' ' + ymd(new Date())
