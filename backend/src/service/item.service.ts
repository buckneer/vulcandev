
import log from "../logger";
import {create, StoreItem} from "../model/storeitem.model";
import "dotenv/config"
import {createNewItem, deleteOne, getItems, Item} from "../model/item.model";

export async function getAllItems() {
    let items : Item[] = []
    getItems((err: Error, result: Item[]) => {
        if(err) return null;
        console.log(result)
        items = [...result]
    })

    return items;
}


export async function authenticate(adminSecret: string) {
    try {
        return adminSecret === process.env.ADMIN_PASSWORD as string;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function addItem(input: Item, adminSecret: string) {


    if(adminSecret !== process.env.ADMIN_PASSWORD as string) return null;

    createNewItem(input, (err: Error, result: Item) => {
        if(err) return null;
        return result;
    })
}

export async function deleteItem(name: string, adminSecret: string) {
    if(adminSecret === process.env.ADMIN_PASSWORD as string) return null;
    // return await Item.deleteOne({name: itemName});
    deleteOne(name, (err: any) => {
        if(err) return null;
    })
}

export async function buyItem(itemName: string, username: string, itemNumber: number) {

    let newStoreItem : StoreItem = {
        id: 1,
        username: username,
        item_name: itemName,
        payment_method: "paypal",
        item_number: itemNumber
    }

    create(newStoreItem, (err: Error, itemId: number) => {
        if (err) {
            return null;
        }
        if (itemId == null) {
            return null;
        }

        return itemId
    })




}

