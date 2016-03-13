var plastiq = require('plastiq');
var ease = require('ease-component');

module.exports = function(b, options) {
  var binding = plastiq.html.binding(b);
  var meta = binding.meta();
  var value = binding.get();
  var state = meta.animate || (meta.animate = {lastValue: value});

  if (state.render === plastiq.html.currentRender) {
    return state.value;
  }

  var justStarted = false;

  if (state.lastValue != value) {
    state.startTime = Date.now();
    state.position = 0;

    if (state.animating) {
      state.fromValue = state.value;
    } else {
      state.fromValue = state.lastValue;
    }
    state.animating = true;
    state.value = state.fromValue;

    state.lastValue = value;
    justStarted = true;
  }

  if (state.animating) {
    var refresh = plastiq.html.refresh;
    plastiq.html.currentRender.finished.then(function () {
      refresh();
    });

    if (!justStarted) {
      if (state.position < 1) {
        var duration = options && options.duration || 300;
        var easing = options && options.easing || 'in-out-quint';

        state.position = (Date.now() - state.startTime) / duration;
        state.value = state.fromValue + ease[easing](state.position) * (value - state.fromValue);
      } else {
        state.animating = false;
        state.value = value;
        state.lastValue = value;
      }
    }

    state.render = plastiq.html.currentRender;

    return state.value;
  } else {
    return state.lastValue;
  }
};
