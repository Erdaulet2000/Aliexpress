import { MatchPasswordDirective } from './match-password.directive';

describe('MatchPasswordDirective', () => {
  it('should create an instance', () => {
    let directive: MatchPasswordDirective;
    // @ts-ignore
    directive = new MatchPasswordDirective();
    expect(directive).toBeTruthy();
  });
});
