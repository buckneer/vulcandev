import {Document, model, Schema} from "mongoose";
import {nanoid} from "nanoid";

export interface ItemDocument extends Document {
    name: string,
    price: string,
    icon: string,
    category: string,
    itemNumber: number
}


const ItemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    icon: {type: String, required: false},
    itemNumber: {type: Number, required: true},
    category: {type: String, required: true}
})


const Item = model("Item", ItemSchema);

export default Item;
