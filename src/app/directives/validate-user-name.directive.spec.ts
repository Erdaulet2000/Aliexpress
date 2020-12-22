import { ValidateUserNameDirective } from './validate-user-name.directive';

describe('ValidateUserNameDirective', () => {
  it('should create an instance', () => {
    let directive: ValidateUserNameDirective;
    // @ts-ignore
    directive = new ValidateUserNameDirective();
    expect(directive).toBeTruthy();
  });
});
