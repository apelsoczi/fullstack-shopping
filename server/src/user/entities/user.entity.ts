import { 
    Entity,
    Column,
    PrimaryColumn 
} from 'typeorm';

@Entity({ name: 'users' })
export class User {

  @Column({ type: 'uuid', unique: true })
  id: string;

  @PrimaryColumn({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  first: string;

  @Column({ type: 'text' })
  last: string;

  constructor(
    id: string,
    username: string,
    password: string,
    first: string,
    last: string
  ) {
    this.id = id
    this.username = username;
    this.password = password;
    this.first = first;
    this.last = last;
  }

}