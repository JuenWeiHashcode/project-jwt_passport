import { PlayerMiddleware } from './player.middleware';

describe('PlayerMiddleware', () => {
  it('should be defined', () => {
    expect(new PlayerMiddleware()).toBeDefined();
  });
});
