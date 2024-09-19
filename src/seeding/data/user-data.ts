import { User } from 'src/entities/user/user.entity';

export const DefaultAdminData: Partial<User>[] = [
  {
    username: 'dungdev38',
    password: 'U2FsdGVkX1+lo2/uuJyMB9rAHHcGrNXaalSLcrWBoUg=',
    name: 'Le Huu Dung',
    isSupperAdmin: true,
  },
  {
    username: 'dev_admin',
    password: 'U2FsdGVkX1+lo2/uuJyMB9rAHHcGrNXaalSLcrWBoUg=',
    name: 'Dev Admin',
  },
  {
    username: 'test_admin',
    password: 'U2FsdGVkX1+lo2/uuJyMB9rAHHcGrNXaalSLcrWBoUg=',
    name: 'Test Admin',
  },
];

export const adminCodeServiceData: Partial<User>[] = [
  {
    username: 'admin_code_service',
    password: 'U2FsdGVkX1+lo2/uuJyMB9rAHHcGrNXaalSLcrWBoUg=',
    name: 'Code Server Admin',
  },
];
