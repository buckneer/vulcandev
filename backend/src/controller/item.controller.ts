import {get, omit} from "lodash";
// import {addItem, buyItem, deleteItem, getAllItems, getItemsByCategory} from "../service/item.service";
import {Request, Response} from "express";
// import Store, {ItemDocument} from "../model/item.model";
import log from "../logger";
import {addItem, authenticate, buyItem, deleteItem, getAllItems} from "../service/item.service";
import {deleteOne, getItems, Item} from "../model/item.model";
//
//

export async function handleBuyItem(req: Request, res: Response) {

    try {
        let username = req.body.username;
        let itemName = req.body.itemName;
        let itemNumber = req.body.itemNumber;


        let newId = buyItem(itemName, username, itemNumber)

        if(newId == null) {
            return res.status(501).send()
        }

        // let {user, valid} = await buyItem(itemId, username);

        return res.send({message: "Item bought successfully"});
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}
//
export async function getAllItemsHandler(req: Request, res: Response) {
    try {
        // let items = await getAllItems();

        getItems((err: Error, result: Item[]) => {
            if(err) throw new Error(err.message);
            return res.send(result);
        })




        // return res.send(items);
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}

//
export async function addItemHandler(req: Request, res: Response) {
    try {
        let newItem = {
            id: 1,
            name: req.body.name,
            price: req.body.price,
            icon: req.body.icon,
            itemNumber: req.body.itemNumber,
            category: req.body.category
        }

        let item = addItem(newItem, req.body.adminSecret);


        if(item == null) {
            return res.send({"message": "Problem inserting your item"})

        }

        return res.send({"name": newItem.name});


    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}

export async function deleteItemHandler(req: Request, res: Response) {
    try {

        let adminSecret = req.body.adminSecret;
        let name = req.body.name;


        if(adminSecret !== process.env.ADMIN_PASSWORD as string) return res.send({"message": "You're not admin"});

        deleteOne(name, (err: Error) => {
            if(err) throw new Error(err.message);
        })

        return res.sendStatus(200)

    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}

export async function handleAuth(req: Request, res: Response) {
    try {
        let adminSecret = req.body.adminSecret;
        let admin = await authenticate(adminSecret);
        if(admin) {
            return res.send({message: "admin"})
        } else {
            return res.send({"message": "You're not admin"})
        }
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}
