import './nav.scss'
export const Nav = (options: {home: string, about: string}) => `
  <nav class="mb-10">
    <ul class="flex w-full items-center gap-4 p-4">
      <li class="link">
        <a href="${options.home}">
          Home
        </a>
      </li>
      <li class="link">
        <a href="${options.about}">
          About
        </a>
      </li>
    </ul>
  </nav>`
