import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AS_Partner } from './partner';

@Entity()
export class Organization{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column({
        type:"varchar"
    })
    organization_name: string

    @Column({
        type : "varchar"
    })
    organization_id: string

    // @OneToMany(()=>AS_Partner,(partner)=>partner.orgs)
    // partners: AS_Partner[];
}