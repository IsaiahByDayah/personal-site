import * as migration_20250218_030524_initial from './20250218_030524_initial';

export const migrations = [
  {
    up: migration_20250218_030524_initial.up,
    down: migration_20250218_030524_initial.down,
    name: '20250218_030524_initial'
  },
];
