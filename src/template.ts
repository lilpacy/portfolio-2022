import {Nav} from "./components/nav";
import {Footer} from "./components/footer";

export const template = (children: string, options = { path: {home: "/", about: "/about"}} ) => `
  ${Nav(options?.path || {})}
  ${children}
  ${Footer()}
`;
