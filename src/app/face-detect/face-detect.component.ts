import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MscsFaceApiService} from "../mscs-face-api.service";

@Component({
  selector: 'face-detect',
  templateUrl: './face-detect.component.html',
  styleUrls: ['./face-detect.component.scss']
})
export class FaceDetectComponent implements OnInit {
  @ViewChild('imageSource') imageSource: ElementRef;
  public imageUrl: string = '';
  public facesData: any;
  public error: any;
  public invalidImage: boolean = false;
  constructor(private faceApiService: MscsFaceApiService) { }

  ngOnInit() {
    this.imageUrl = 'https://thumbor.forbes.com/thumbor/1280x868/smart/https%3A%2F%2Fblogs-images.forbes.com%2Fkerryadolan%2Ffiles%2F2017%2F03%2F0316_billionaires-collage-2017-1200x840.jpg';
  }

  public detect(): void {
    if (this.invalidImage) { return null; }
    this.faceApiService.Detect(this.imageUrl).toPromise().then(
      _faceData => { this.facesData = _faceData },
      _error => { this.error = _error.error.error}
    )
  }

  public reset(): void {
    this.facesData = null;
    this.error = null;
  }

  public refreshImageSource(): void {
    this.invalidImage = false;
    this.getSize();
  }

  public disableDetect(): void {
    this.invalidImage = true;
  }

  public getSize(): any {
    return {
      width: this.imageSource.nativeElement.naturalWidth,
      height: this.imageSource.nativeElement.naturalHeight
    }
  }

  public getClientSizeRatio(): any {
    let naturalSize = this.getSize();
    return {
      width: this.imageSource.nativeElement.clientWidth / naturalSize.width,
      height: this.imageSource.nativeElement.clientHeight / naturalSize.height
    }
  }

  public getEmotion(emotions: any): string {
    let emotion: string = '';
    let score: number = 0;

    Object.keys(emotions).forEach( _emotion => {
      if (score < emotions[_emotion]) {
        emotion = _emotion;
        score = emotions[_emotion];
      }
    });

    return emotion;
  }

}
