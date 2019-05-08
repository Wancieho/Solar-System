import { Color3, Mesh, StandardMaterial, Texture, Vector3 } from 'babylonjs';
import { inject, injectable } from 'inversify';

import texture from '../../../assets/earth.jpg';
import { config } from '../../../config';
import Scene from '../../_core/scene/scene';

@injectable()
export default class Earth {

  public mesh: Mesh;
  private scene: Scene;

  constructor(
    @inject(Scene) scene: Scene,
  ) {
    this.scene = scene;
    this.mesh = Mesh.CreateSphere('earth', 32, 6371 / config.scale.size * config.proportion.size, this.scene.instance);
  }

  public generate(): void {
    this.mesh.position = new Vector3(0, 0, config.oneAu / config.scale.distance);
    this.mesh.receiveShadows = true;

    const material: any = new StandardMaterial('material', this.scene.instance);
    material.diffuseTexture = new Texture(texture, this.scene.instance);
    material.diffuseTexture.uOffset = 0.3;
    material.diffuseTexture.vScale = -1;
    material.emissiveColor = new Color3(0.05, 0.05, 0.05);
    material.specularColor = new Color3(0, 0, 0);
    this.mesh.material = material;
  }

  public getPosition(): Vector3 {
    return this.mesh.position;
  }

}
