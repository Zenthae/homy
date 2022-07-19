import { Database } from '@/database';

export class Controller {
  private database: Database;

  constructor() {
    this.database = new Database();
  }
}
