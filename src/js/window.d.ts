// tell TypeScript about the stuff we added to `window`
import render from './render'

declare global {
  interface Window {
    render: render;
    renderers: (() => {})[];
    state: { [key: string]: any };
  }
}
