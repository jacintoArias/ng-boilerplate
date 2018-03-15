import { AuthGuard } from './auth.guard';
import { UserPreloadGuard } from './user-preload.guard';

export const guards: any[] = [AuthGuard, UserPreloadGuard];

export * from './auth.guard';
export * from './user-preload.guard';
