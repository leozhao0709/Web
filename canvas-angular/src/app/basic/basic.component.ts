import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @ViewChild('canvas') canvasRef: ElementRef;
  private canvasContext: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit() {
    this.canvasContext = (this.canvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.imageFilter();
  }

  private imageFilter() {
    const image = new Image();
    image.src = '../../assets/images/amsterdam.jpg';
    image.onload = () => {
      this.canvasContext.drawImage(image, 180, 35);
      const imageData = this.canvasContext.getImageData(180, 35, 500, 365);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        imageData.data[i] = average; // Red
        imageData.data[i + 1] = average; // Green
        imageData.data[i + 2] = average; // Blue
        // imageData.data[i+3] = 240;   // Alpha
      }

      this.canvasContext.putImageData(imageData, 180, 35);
      this.canvasContext.clearRect(180, 35, 100, 20);
    };
  }

  private drawLines() {
    this.canvasContext.strokeStyle = 'red';
    this.canvasContext.lineWidth = 10;
    this.canvasContext.lineCap = 'square';
    this.canvasContext.lineJoin = 'round';

    // line shadow
    this.canvasContext.shadowColor = 'black';
    this.canvasContext.shadowOffsetX = 5;
    this.canvasContext.shadowOffsetY = 10;
    this.canvasContext.shadowBlur = 5;

    this.canvasContext.beginPath(); // reset the context state
    this.canvasContext.moveTo(30, 30); // starting point of (x, y)
    this.canvasContext.lineTo(80, 80); // end point a line (x, y)
    this.canvasContext.lineTo(130, 30);
    this.canvasContext.stroke(); // draw the line
  }
}
