import { Database } from '@/database';

describe('TestDatabase', () => {
  it('should initialize', () => {
    const db = new Database();
    expect(db).toBeInstanceOf(Database);
  });
});
