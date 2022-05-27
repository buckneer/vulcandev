import {number, object, string} from "yup";

export const itemSchema = object({
    body: object({
        itemName: string().required("Item Id is required"),
        username: string().required("Username is required"),
        itemNumber: number().required("Item Number is required")
    }),
})

export const createItemSchema = object({
    body: object({
        name: string().required("Name is required"),
        itemNumber: number().required("Item Number is required"),
        price: string().required("Price is required"),
        icon: string().required("Image url is required"),
        category: string().required("Category is required"),
        adminSecret: string().required("Admin secret is required")
    })
})

export const deleteItemSchema = object({
    body: object({
        name: string().required("Name is required"),
        adminSecret: string().required("Admin secret is required")
    })
})

