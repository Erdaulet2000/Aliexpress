import { PasswordPatternDirective } from './password-pattern.directive';

describe('PasswordPatternDirective', () => {
  it('should create an instance', () => {
    let directive: PasswordPatternDirective;
    // @ts-ignore
    directive = new PasswordPatternDirective();
    expect(directive).toBeTruthy();
  });
});
