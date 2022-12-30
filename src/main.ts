import './style.scss'
import typescriptLogo from './typescript.svg'
import {setupCounter} from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-wrap">
    <div class="w-full flex justify-center items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
    <h1 class="text-3xl font-bold underline w-full">Vite + TypeScript</h1>
    <div class="card w-full">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs w-full">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
