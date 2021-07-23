export default async function render() {
  return Promise.all(window.renderers.map(fn => fn()))
}