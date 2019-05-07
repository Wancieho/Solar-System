import { Color3, Mesh, PointLight, StandardMaterial, Texture, Vector3 } from 'babylonjs';
import { inject, injectable } from 'inversify';

import texture from '../../../assets/sun.jpg';
import { config } from '../../../config';
import Scene from '../../_core/scene/scene';

@injectable()
export default class Sun {

  private scene: Scene;

  constructor(
    @inject(Scene) scene: Scene,
  ) {
    this.scene = scene;
  }

  public generate(): void {
    const mesh: Mesh = Mesh.CreateSphere('sun', 64, 695510 / config.scale.size, this.scene.instance);
    mesh.position = new Vector3(0, 0, 0);
    mesh.receiveShadows = true;

    const material: StandardMaterial = new StandardMaterial('material', this.scene.instance);
    material.diffuseTexture = new Texture(texture, this.scene.instance);
    material.backFaceCulling = false;
    material.emissiveColor = new Color3(1, 1, 1);
    mesh.material = material;

    const sun = new PointLight(
      'sun',
      new Vector3(0, 0, 0),
      this.scene.instance);
    sun.position = new Vector3(0, 0, 0);
    sun.intensity = 1;
  }

}
