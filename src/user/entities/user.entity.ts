import { 
    Entity,
    Column,
    PrimaryColumn 
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
    
  @PrimaryColumn({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  first: string;

  @Column({ type: 'text' })
  last: string;

  constructor(
    username: string,
    password: string,
    first: string,
    last: string
  ) {
    this.username = username;
    this.password = password;
    this.first = first;
    this.last = last;
  }

}