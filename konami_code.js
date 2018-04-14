const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var bod = document.querySelector('body')
  bod.addEventListener('keydown', function(e){
    for(var i = 0; i < code.length; i++){
      if (e.which === code[i]){
        alert("Congratulation")
      }
    }
 })
}