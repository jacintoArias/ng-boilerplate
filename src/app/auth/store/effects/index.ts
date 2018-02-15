import { SessionEffects } from './session.effects';
import { UserEffects } from './user.effects';

export const effects: any[] = [SessionEffects, UserEffects];

export * from './session.effects';
export * from './user.effects';
