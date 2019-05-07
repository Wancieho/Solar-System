import { inject, injectable } from 'inversify';

import Universe from './components/universe/universe';

@injectable()
export default class App {
  constructor(
    @inject(Universe) universe: Universe,
  ) {
    universe.generate();
  }
}
