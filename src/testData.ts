import * as faker from 'faker'
import { Customer } from './types'

const generateCustomers = (number = 10) => {
    let customers: Customer[] = []
    for (let i = 0; i < number; i++) {
        customers.push({
            id: i + 1,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            streetAddress: faker.address.streetAddress(),
            zipcode: faker.address.zipCode(),
            city: faker.address.city()
        })
    }
    return customers
}

let data = {
    customers: generateCustomers(5)
}

export default data