setTimeout(function() {
  let input = document.querySelector('input[name="tbSmsKod"]');
  if (input) {
    input.parentNode.replaceChild(input.cloneNode(true), input);
  }
}, 500);
