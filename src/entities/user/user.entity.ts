import { EntityNameConst } from 'src/constant/entity-name';
import { DBColumn } from 'src/decorator/swagger.decorator';
import { StringUtil } from 'src/utils/string';
import { BeforeInsert, BeforeUpdate, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractTimeEntity } from '../entity.interface';
import { Role } from '../role/role.entity';
import { Upload } from '../upload/upload.entity';
import { UserLog } from './user-log.entity';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity(EntityNameConst.USER)
export class User extends AbstractTimeEntity {
  @DBColumn({
    name: 'username',
    type: 'varchar',
    nullable: true,
    unique: true,
  })
  username: string;

  @DBColumn({
    name: 'password',
    type: 'varchar',
    nullable: true,
  })
  password: string;

  @DBColumn({
    name: 'name',
    type: 'varchar',
    nullable: true,
  })
  name: string;

  @DBColumn({
    name: 'avatar',
    type: 'varchar',
    nullable: true,
  })
  avatar: string;

  @DBColumn({
    name: 'cover_photo',
    type: 'varchar',
    nullable: true,
  })
  coverPhoto: string;

  @DBColumn({
    name: 'facebook_url',
    type: 'varchar',
    nullable: true,
  })
  facebookUrl: string;

  @DBColumn({ type: 'boolean', name: 'is_super_admin', default: false })
  isSupperAdmin: boolean;

  @DBColumn({ type: 'int', name: 'role_id', nullable: true })
  roleId: number;

  @DBColumn({ name: 'slug', type: 'varchar', nullable: true })
  slug: string;
  // RELATIONSHIP
  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToMany(() => Upload, (upload) => upload.creator)
  uploads: Upload[];

  @OneToMany(() => UserLog, (userLog) => userLog.user)
  userLogs: UserLog[];

  @BeforeInsert()
  handleBeforeInsert() {
    this.slug = StringUtil.createSlug(this.name);
  }

  @BeforeUpdate()
  handleBeforeUpdate() {
    this.slug = StringUtil.createSlug(this.name);
  }
}
