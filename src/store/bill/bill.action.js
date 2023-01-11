import { BILL_ACTION_TYPES } from "./bill.types";

export const addBill = (bills, dataToAdd) => {
    const newBillList = [...bills, dataToAdd];
    return {
        type: BILL_ACTION_TYPES.ADD_BILL,
        payload: newBillList
    }
}