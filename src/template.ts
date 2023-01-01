import {Nav} from "./components/nav";
import {Footer} from "./components/footer";

export const template = (children: string) => `
  ${Nav()}
  ${children}
  ${Footer()}
`;
