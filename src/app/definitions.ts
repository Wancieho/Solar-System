import { Container } from 'inversify';
import 'reflect-metadata';

import App from './app';
import Canvas from './components/_core/canvas/canvas';
import Engine from './components/_core/engine/engine';
import Scene from './components/_core/scene/scene';
import CameraMan from './components/camera-man/camera-man';
import Earth from './components/solar-system/earth/earth';
import SolarSystem from './components/solar-system/solar-system';
import Sun from './components/solar-system/sun/sun';
import Universe from './components/universe/universe';

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf().inSingletonScope();
DIContainer.bind<Universe>(Universe).toSelf().inSingletonScope();
DIContainer.bind<Engine>(Engine).toSelf().inSingletonScope();
DIContainer.bind<Canvas>(Canvas).toSelf().inSingletonScope();
DIContainer.bind<Scene>(Scene).toSelf().inSingletonScope();
DIContainer.bind<CameraMan>(CameraMan).toSelf().inSingletonScope();

DIContainer.bind<SolarSystem>(SolarSystem).toSelf().inSingletonScope();
DIContainer.bind<Sun>(Sun).toSelf().inSingletonScope();
DIContainer.bind<Earth>(Earth).toSelf().inSingletonScope();

export default DIContainer;
