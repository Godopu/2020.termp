import {Item, getById, sampleItems, addItem} from "./db";

export const resolvers = {
    Query: {
        items: () => sampleItems,
        item: (_ : any, obj : Item) => {return getById(obj.id)}
    },
    Mutation: {
        addItem: (_ : any, obj : Item) => {return addItem(obj)}
    }
}
