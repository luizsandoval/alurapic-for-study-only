import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit{
  constructor(
    private _element: ElementRef<any>,
    private _platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this._platformDetector.isPlatformBrowser &&
      this._element.nativeElement.click();
  }
}
