import * as migration_20250218_030524_initial from './20250218_030524_initial';
import * as migration_20250226_071151 from './20250226_071151';

export const migrations = [
  {
    up: migration_20250218_030524_initial.up,
    down: migration_20250218_030524_initial.down,
    name: '20250218_030524_initial',
  },
  {
    up: migration_20250226_071151.up,
    down: migration_20250226_071151.down,
    name: '20250226_071151'
  },
];
