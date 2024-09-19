import { RoleCode } from 'src/constant/role-code';
import { Role } from 'src/entities/role/role.entity';

export const RoleData: Partial<Role>[] = [
  {
    code: RoleCode.ADMIN,
    name: 'Administrators on system',
  },
  {
    code: RoleCode.User,
    name: 'User on system',
  },
  {
    code: RoleCode.ADMIN_CODE_SERVICE,
    name: 'Code server administrators on system',
  },
];
