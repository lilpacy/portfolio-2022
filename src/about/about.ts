import '../style.scss'
import './about.sass'
import {Nav} from "../components/nav";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Nav()}
  </div>
`
