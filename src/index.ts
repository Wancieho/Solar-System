import { inject, injectable } from 'inversify';
import DIContainer from './app/definitions';

import App from './app/app';

@injectable()
export default class Init {
  constructor(
    @inject(App) app: App,
  ) { }
}

DIContainer.resolve<Init>(Init);
