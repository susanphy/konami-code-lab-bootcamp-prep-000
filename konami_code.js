const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
code.addEventListener('click, function(event){alert('I was clicked')}')

  for (let i = 0, l = code.length; i < l; i++) {
    triggerKeyDown(code[i])
  }
}
