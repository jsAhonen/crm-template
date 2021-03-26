import * as faker from 'faker'
import { Customer, Location, Order, Worker } from './types'

const numberOfCustomers = 5
const numberOfWorkers = 5
const numberOfLocations = 5
const numberOfOrders = 5

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

const generateOrders = (number = 10) => {
    let orders: Order[] = []
    for (let i = 0; i < number; i++) {
        orders.push({
            id: i + 1,
            date: faker.date.soon(),
            title: faker.lorem.words(3),
            status: faker.random.arrayElement(["UNHANDLED", "ACCEPTED", "DECLINED", "COMPLETED", "PAID"]),
            description: faker.lorem.paragraph(),
            location: faker.random.number(numberOfLocations),
            workers: [faker.random.number(numberOfWorkers), faker.random.number(numberOfWorkers)],
                })
    }
    return orders
}

let data = {
    customers: generateCustomers(numberOfCustomers),
    workers: generateWorkers(numberOfWorkers),
    locations: generateLocations(numberOfLocations),
    orders: generateOrders(numberOfOrders)
}

export default data