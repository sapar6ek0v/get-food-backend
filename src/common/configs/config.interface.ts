export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  swagger: SwaggerConfig;
  security: SecurityConfig;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
  tags: string;
}

export interface SecurityConfig {
  secret: string;
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}
