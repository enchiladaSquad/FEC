import 'regenerator-runtime/runtime';

describe('antipattern test', () => {
  it('should not exist, but the JestConfig refuses to exclude it', () => {
    expect(true).toBe(true);
  });
});
