"use strict";
var _a, _b;
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["png"] = "png";
    ImageFormat["jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImageFormat.png)) {
            return this;
        }
        this.formats.push(ImageFormat.png);
    }
    addJpeg() {
        if (this.formats.includes(ImageFormat.jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.jpeg);
    }
    addResoltion(width, height) {
        this.resolutions.push({ width, height });
        return this;
    }
    build() {
        const res = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height,
                });
            }
        }
        return res;
    }
}
console.log((_b = (_a = new ImageBuilder().
    addJpeg()) === null || _a === void 0 ? void 0 : _a.addPng()) === null || _b === void 0 ? void 0 : _b.addResoltion(150, 254).addResoltion(354, 55).build());
