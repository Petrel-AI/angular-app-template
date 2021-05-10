import { ApplicationUser } from '@models/application-user';
import Assertion from '@shared/validation/assertion';
import { UserRole } from '@models/enums';

export class ApplicationUserExtended {
  readonly fullName: string;
  readonly rolesAsString: Array<string> = [];

  get id(): number {
    return this.instance.id;
  }

  get firstName(): string | null {
    return this.instance.firstName;
  }

  get lastName(): string | null {
    return this.instance.lastName;
  }

  get email(): string | null {
    return this.instance.email;
  }

  get emailConfirmed(): boolean {
    return this.instance.emailConfirmed;
  }

  get identityId(): number | null {
    return this.instance.identityId;
  }

  get updatedAt(): Date {
    return this.instance.updatedAt;
  }

  get isActive(): boolean {
    return this.instance.deletedAt == null;
  }

  get roles(): Array<UserRole> {
    return this.instance.roles;
  }

  constructor(public readonly instance: ApplicationUser) {
    Assertion.notNull(instance, 'instance', ApplicationUserExtended.name);

    this.fullName = `${instance.firstName} ${instance.lastName}`;
    instance.roles.forEach(role => {
      this.rolesAsString.push(UserRole[role]);
    });
  }

  hasRole(role: UserRole): boolean {
    return this.instance.roles.includes(role);
  }

  hasRoleOrFail(role: UserRole): void {
    if (!this.hasRole(role)) {
      throw Error('You have no permission to execute this operation');
    }
  }
}
