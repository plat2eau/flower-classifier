'use strict';

const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');

module.exports = class TrainData {

	constructor() {
		this.filePathArr = [];
	}

	addImage(path) {
		if (typeof path != "string") {
			console.log("File path value expected : \"string\" but found : " + typeof path);
			return false;
		} else if (Array.isArray(path)) {
			for (const index in path) {
				this.filePathArr.push(path[index]);
			}
			console.log("Added path array to train data...");
			return true;
		} else {
			this.filePathArr.push(path);
			console.log("Added path to train data...");
			return true;
		}
	}

	load() {

		let fileBufArr = [];

		this.filePathArr.forEach(path => {
			fs.readFile(path, (err, fileBuf) => {
				if (err) {
					throw err;
				}
				fileBufArr.push(fileBuf);
			});
		});
		console.log("Train Data loaded sucessfully");

		return fileBufArr;

	}

	async extractFeatures(url) {
		let iris = await tf.loadLayersModel(url);
		let layer = this.mobilenet.getLayer('conv_pw_13_relu');
		let irisFeatures = await tf.model({ inputs: iris.inputs, outputs: layer.output });
		return irisFeatures;
	}

	async loadModelUrl(url) {
		let iris = await tf.loadLayersModel(url);
		console.log("Iris initialised...");
		return iris
	}

}
