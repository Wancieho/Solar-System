import { injectable } from 'inversify';

@injectable()
export default class Canvas {
  public element: HTMLCanvasElement = document.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
}
