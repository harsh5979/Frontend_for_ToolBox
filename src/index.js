// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var component = document.getElementById('demo');

    // Check if the component exists
    if (component) {
      var isClickInsideComponent = component.contains(event.target);

      if (!isClickInsideComponent) {
        // Action to perform when clicked outside the component
        component.style.display = 'none'; // For example, hide the component
      }
    }
  });
});
