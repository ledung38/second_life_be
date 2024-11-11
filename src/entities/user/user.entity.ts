import { EntityNameConst } from 'src/constant/entity-name';
import { Gender } from 'src/constant/enum-common';
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
    name: 'email',
    type: 'varchar',
    nullable: true,
    unique: true,
  })
  email: string;

  @DBColumn({
    name: 'phone_number',
    type: 'int',
    nullable: true,
  })
  phoneNumber: number;

  @DBColumn({
    name: 'date_of_birth',
    type: 'date',
    nullable: true,
  })
  dateOfBirth: string;

  @DBColumn({
    name: 'description',
    type: 'varchar',
    nullable: true,
  })
  description: string;

  @DBColumn({
    name: 'gender',
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender;

  @DBColumn({
    name: 'address',
    type: 'varchar',
    nullable: true,
  })
  fullAddress: string;

  @DBColumn({
    name: 'house_street',
    type: 'varchar',
    nullable: true,
  })
  houseStreet: string;

  @DBColumn({
    name: 'ward',
    type: 'varchar',
    nullable: true,
  })
  ward: string;

  @DBColumn({
    name: 'district',
    type: 'varchar',
    nullable: true,
  })
  district: string;

  @DBColumn({
    name: 'city',
    type: 'varchar',
    nullable: true,
  })
  city: string;

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
