/** @jsx plastiq.html */
var plastiq = require('plastiq');
var animate = require('./animate');

class App {
  constructor() {
    this.haha = 0;
    this.easing = 'in-out-quad';
    this.duration = 3000;
  }
  
  render() {
    var haha = animate([this, 'haha'], {duration: this.duration, easing: this.easing});
    return <div>
      <h1 style={{backgroundColor: 'red', display: 'inline-block', width: haha * 10 + 'px'}}>{Math.round(haha)}</h1>
      <div>
        <button onclick={() => this.haha = 0}>0</button>
        <button onclick={() => this.haha = 100}>100</button>
        <input type="range" min="100" max="5000" binding={[this, 'duration']} />
        {this.duration}
        <select binding={[this, 'easing']}>
          <option value="in-quad">in-quad</option>
          <option value="out-quad">out-quad</option>
          <option value="in-out-quad">in-out-quad</option>
          <option value="in-cube">in-cube</option>
          <option value="out-cube">out-cube</option>
          <option value="in-out-cube">in-out-cube</option>
          <option value="in-quart">in-quart</option>
          <option value="out-quart">out-quart</option>
          <option value="in-out-quart">in-out-quart</option>
          <option value="in-quint">in-quint</option>
          <option value="out-quint">out-quint</option>
          <option value="in-out-quint">in-out-quint</option>
          <option value="in-sine">in-sine</option>
          <option value="out-sine">out-sine</option>
          <option value="in-out-sine">in-out-sine</option>
          <option value="in-expo">in-expo</option>
          <option value="out-expo">out-expo</option>
          <option value="in-out-expo">in-out-expo</option>
          <option value="in-circ">in-circ</option>
          <option value="out-circ">out-circ</option>
          <option value="in-out-circ">in-out-circ</option>
          <option value="in-back">in-back</option>
          <option value="out-back">out-back</option>
          <option value="in-out-back">in-out-back</option>
          <option value="in-bounce">in-bounce</option>
          <option value="out-bounce">out-bounce</option>
          <option value="in-out-bounce">in-out-bounce</option>
        </select>
      </div>
    </div>;
  }
}

plastiq.append(document.body, new App());
