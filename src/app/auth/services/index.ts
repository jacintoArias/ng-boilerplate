import { Auth0Service } from './auth0.service';
import { TokenService } from './token.service';

export const services: any[] = [Auth0Service, TokenService];

export * from './auth0.service';
export * from './token.service';
