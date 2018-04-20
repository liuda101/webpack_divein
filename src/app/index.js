import { ymd } from 'utils'

export default function () {
  document.querySelector('#title').innerHTML = ymd(new Date())
}
