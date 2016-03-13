var plastiq = require('plastiq');

module.exports = function (binding, vdom) {
  return plastiq.html.component(
    {
    },
    function () {
      var binding = plastiq.html.binding(b);
      var meta = binding.meta();
      var value = binding.get();
      var state = meta.animateVisible || (meta.animateVisible = {lastValue: value});

      if (state.lastValue != value) {
        state.animating = true;
      }

      if (state.animating) {

      }
    }
  )
};
