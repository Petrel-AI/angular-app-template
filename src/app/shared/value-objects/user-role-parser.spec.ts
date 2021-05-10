import { UserRole } from '@models/enums';
import UserRoleParser from './user-role-parser';

describe('UserRoleParser', () => {
  const target = (role: string | null): UserRoleParser => {
    return new UserRoleParser(role);
  };

  it('.get should throw error for null and empty string values', () => {
    expect(() => target('')).toThrow();
    expect(() => target(null)).toThrow();
  });

  it('.get should return UserRole for case insensitive input data', () => {
    expect(target('Accountant').get()).toBe(UserRole.Accountant);
    expect(target('accountant').get()).toBe(UserRole.Accountant);
    expect(target('AcCoUntanT').get()).toBe(UserRole.Accountant);
  });

  it('.get should return UserRole.None for invalid input string', () => {
    expect(target('ololo').get()).toBe(UserRole.None);
  });

  it('.get should return UserRole if valid string passed', () => {
    expect(target('taxpayer').get()).toBe(UserRole.TaxPayer);
    expect(target('accountant').get()).toBe(UserRole.Accountant);
    expect(target('admin').get()).toBe(UserRole.Admin);
  });
});
