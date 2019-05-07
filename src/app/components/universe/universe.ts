import { inject, injectable } from 'inversify';

import CameraMan from '../camera-man/camera-man';
import SolarSystem from '../solar-system/solar-system';

@injectable()
export default class Universe {

  private cameraMan: CameraMan;
  private solarSystem: SolarSystem;

  constructor(
    @inject(CameraMan) cameraMan: CameraMan,
    @inject(SolarSystem) solarSystem: SolarSystem,
  ) {
    this.cameraMan = cameraMan;
    this.solarSystem = solarSystem;
  }

  public generate(): void {
    this.solarSystem.generate();
    this.cameraMan.generate();

    this.cameraMan.setTarget(this.solarSystem.earth.getPosition());
  }

}
