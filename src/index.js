// require('dotenv').config()


document.addEventListener('click', function (event) {
  var component = document.getElementById('demo');
  var isClickInsideComponent = component.contains(event.target);

  if (!isClickInsideComponent) {
    // Action to perform when clicked outside the component
    component.style.display = 'none'; // For example, hide the component

  }
}
)