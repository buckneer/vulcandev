import {Document, model, Schema} from "mongoose";
import {nanoid} from "nanoid";
import {db} from "../db/mysqlConnect";
import {OkPacket, RowDataPacket} from "mysql2";

export interface BasicItem {
    id: number
}

export interface Item extends BasicItem {
    name: string,
    price: string,
    icon: string,
    category: string,
    itemNumber: string
}

export const createNewItem = (item: Item, callback: Function) => {
    const query = "INSERT INTO items(name, price, icon, category, item_number) VALUES (?, ?, ?, ?, ?)";

    try {
        db.query(query, [
            item.name,
            item.price,
            item.icon,
            item.category,
            item.itemNumber],
            (err, result) => {
                if (err) {callback(err)}
                const insertId = (<OkPacket> result).insertId;
                if(insertId == null) {
                    callback(new Error("Problem inserting into db"))
                }
                callback(null, item.name);
        })
    } catch (e: any) {
        throw new Error(e);
    }
}

export function getItems(callback: Function) {
    const query = "SELECT * FROM items";

    try {
      db.query(query, (err, result) => {
          if (err) {callback(err)}
          const rows = <RowDataPacket[]> result;
          const items: Item[] = [];
          rows.forEach(row => {
             const item: Item = {
                 id: row.id,
                 name: row.name,
                 price: row.price,
                 icon: row.icon,
                 category: row.category,
                 itemNumber: row.item_number
             }

             items.push(item)
          });
          callback(null, items);
      })
    } catch (e: any) {
        throw new Error(e);
    }
}

export function deleteOne(name: string, callback: Function) {
    const query = "DELETE FROM items WHERE name=?";

    try {
        db.query(query, [name], (err, result) => {
            if(err) {callback(err)}
            callback(null)
        })
    } catch (e: any) {
        throw new Error(e);
    }

}


