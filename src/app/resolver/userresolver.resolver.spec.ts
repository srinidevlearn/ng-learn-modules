import { TestBed } from '@angular/core/testing';

import { UserresolverResolver } from './userresolver.resolver';

describe('UserresolverResolver', () => {
  let resolver: UserresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
