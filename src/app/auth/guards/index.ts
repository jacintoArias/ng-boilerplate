import { AuthGuard } from './auth.guard';
import { UserLoadedGuard } from './user-loaded.guard';

export const guards: any[] = [AuthGuard, UserLoadedGuard];

export * from './auth.guard';
export * from './user-loaded.guard';
