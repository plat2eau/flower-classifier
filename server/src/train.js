'use strict';
const TrainData = require("./data.js");
const tf = require('@tensorflow/tfjs-node');



module.exports = class Iris {
    constructor() {
        this.trainData = new TrainData();
        // trainData.addImage("./Firefox_wallpaper.png");
    }

    async load () {
        this.model = await this.trainData.loadModelUrl("https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json");
    }

}