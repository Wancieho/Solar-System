import { Engine as BabylonEngine } from 'babylonjs';
import { inject, injectable } from 'inversify';

import Canvas from '../canvas/canvas';

@injectable()
export default class Engine {
  public instance: BabylonEngine;

  constructor(
    @inject(Canvas) canvas: Canvas,
  ) {
    this.instance = new BabylonEngine(canvas.element, true, undefined, true);
  }
}
