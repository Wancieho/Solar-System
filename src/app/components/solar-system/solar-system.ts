import { inject, injectable } from 'inversify';

import Earth from './earth/earth';
import Sun from './sun/sun';

import { Color3, Mesh, StandardMaterial, Texture, Vector3 } from 'babylonjs';
import texture from '../../assets/stars.jpg';
import Scene from '../_core/scene/scene';

@injectable()
export default class SolarSystem {

  public earth: Earth;

  private sun: Sun;
  private scene: Scene;

  constructor(
    @inject(Sun) sun: Sun,
    @inject(Earth) earth: Earth,

    @inject(Scene) scene: Scene,
  ) {
    this.sun = sun;
    this.earth = earth;

    this.scene = scene;
  }

  public generate(): void {
    this.sun.generate();
    this.earth.generate();

    const skybox: Mesh = Mesh.CreateSphere('skybox', 32, 2000, this.scene.instance);
    skybox.position = new Vector3(0, 0, 0);
    skybox.receiveShadows = true;
    skybox.infiniteDistance = true;

    const skyboxMaterial: StandardMaterial = new StandardMaterial('skyboxMaterial', this.scene.instance);
    skyboxMaterial.diffuseTexture = new Texture(texture, this.scene.instance);
    skyboxMaterial.emissiveColor = new Color3(0.7, 0.7, 0.7);
    skyboxMaterial.backFaceCulling = false;
    skybox.material = skyboxMaterial;
  }

}
