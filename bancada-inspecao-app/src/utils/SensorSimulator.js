// src/utils/SensorSimulator.js
export default class SensorSimulator {
	constructor(onData, interval = 100) {
	  this.onData = onData;
	  this.interval = interval;
	  this.angle = 0;
	  this.timer = null;
	}
  
	start() {
	  if (this.timer) return;
	  this.timer = setInterval(() => {
		const valor = Math.random() * 100; // simulando tensão de 0 a 100
		this.onData({ angulo: this.angle, valor });
		this.angle = (this.angle + 1) % 360;
	  }, this.interval);
	}
  
	stop() {
	  clearInterval(this.timer);
	  this.timer = null;
	}
  }
  