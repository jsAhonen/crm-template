import * as faker from 'faker'
import { Customer, Location, Worker } from './types'

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

const generateWorkers = (number = 10) => {
    let workers: Worker[] = []
    for (let i = 0; i < number; i++) {
        workers.push({
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
    return workers
}

const generateLocations = (number = 10) => {
    let locations: Location[] = []
    for (let i = 0; i < number; i++) {
        locations.push({
            id: i + 1,
            streetAddress: faker.address.streetAddress(),
            zipcode: faker.address.zipCode(),
            city: faker.address.city(),
            customer: i + 1,
        })
    }
    return locations
}

let data = {
    customers: generateCustomers(5),
    workers: generateWorkers(5),
    locations: generateLocations(5),
}

export default data