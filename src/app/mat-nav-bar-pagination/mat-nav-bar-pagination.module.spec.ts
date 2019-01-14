import { MatNavBarPaginationModule } from './mat-nav-bar-pagination.module';

describe('MatNavBarPaginationModule', () => {
  let matNavBarPaginationModule: MatNavBarPaginationModule;

  beforeEach(() => {
    matNavBarPaginationModule = new MatNavBarPaginationModule();
  });

  it('should create an instance', () => {
    expect(matNavBarPaginationModule).toBeTruthy();
  });
});
