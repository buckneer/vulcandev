import {CategoryType} from "../services/item/category.type";


export interface Item {
    _id: string,
    name: string,
    price: string,
    icon: string,
    category: CategoryType['name'],
    itemNumber: number
}

export interface ItemScheme {
    itemName: string,
    username: string,
    itemNumber: number
}

export interface AddItemSchema {
    name: string,
    price: string,
    icon: string,
    category: string,
    adminSecret: string,
    itemNumber: number
}
