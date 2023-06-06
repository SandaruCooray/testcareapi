import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gallery')
export class GalleryEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  public passportNo: string;

  @Column({ nullable: false })
  public imgPath: string;

  @Column({ nullable: false, type: 'date' })
  public regDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
