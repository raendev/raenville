import render from './render'

// can't import libraries in inline scripts, so let's add them all to window
window.render = render