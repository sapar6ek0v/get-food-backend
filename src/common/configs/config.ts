import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: parseInt(process.env.PORT),
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
    secret: process.env.SECRET,
    expiresIn: process.env.EXPIRES_IN,
    refreshIn: process.env.REFRESH_IN,
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
