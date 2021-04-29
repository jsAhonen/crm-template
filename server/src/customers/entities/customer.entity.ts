import {PrimaryGeneratedColumn, Column} from 'typeorm'

export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    email: string;
    
    @Column()
    telephone: string;
    
    @Column()
    streetAddress: string;
    
    @Column()
    zipcode: string;
    
    @Column()
    city: string;
    
}
