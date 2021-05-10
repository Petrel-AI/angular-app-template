import { UserRole } from './enums';
import { BaseModel } from './base.model';

export class ApplicationUser extends BaseModel<ApplicationUser> {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  roles: Array<UserRole>;
  emailConfirmed: boolean;
  identityId: number | null;
  deletedAt: Date | null;
}
