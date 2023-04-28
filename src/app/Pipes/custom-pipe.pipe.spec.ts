import { CustomPipePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  const pipe = new CustomPipePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('test if number is passed return number+3', () => {
    expect(pipe.transform(5)).toBe(8);
  });
  it('test if not a number is passed return error massage', () => {
    expect(pipe.transform('menna')).toEqual('Not a number');
  });
});
