import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 8080,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'GetFood API',
    description: 'GetFood API description',
    version: '1.0',
    path: 'api',
    tags: 'GetFood',
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
