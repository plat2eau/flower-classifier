'use strict';

const fs = require('fs')

fs.mkdir

module.exports = class TrainData {

    constructor() {

        console.log("Train data initialised");
        this.filePathArr = [];

    }

    addPath(path) {
        
        if (typeof path != "string") {
            console.log("File path value expected : \"string\" but found : " + typeof path);
            return;
        }
        else if (Array.isArray(path)) {
            for (const index in path) {
                this.filePathArr.push(path[index]);
            }
        }
        else {
            this.filePathArr.push(path);
        }
        console.log("Added path(s) to train data");

    }

    load() {

        var fileBufArr=[];
        this.filePathArr.forEach(path => {
            fs.readFile(path, (err, fileBuf) => {
                if(err){
                    throw err;
                }
                fileBufArr.push(fileBuf);
            });
        });
        return fileBufArr;

    }

}
