enum ImageFormat {
  png = "png",
  jpeg = "jpeg",
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];
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

  addResoltion(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }
  build(): IImageConversion[] {
    const res: IImageConversion[] = [];
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

console.log(new ImageBuilder().
addJpeg()
?.addPng()
?.addResoltion(150,254)
.addResoltion(354,55)
.build());