import { faker } from "@faker-js/faker";

faker.seed(123);

export const data  =[...Array(50)].map(item => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.url(),
    rating: faker.helpers.arrayElement([1,2,3,4,5]),
    idealFor: faker.helpers.arrayElement(["men", "women", "children"]),
    detail: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    product: faker.commerce.product(),
    bankOffer: faker.datatype.boolean()
}))