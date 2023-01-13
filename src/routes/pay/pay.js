import React, { useState } from 'react'
import "./pay.css"
import { useSelector, useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { editBudget } from "../../store/bill/bill.action";

const Pay = () => {
  const [edit, setEdit] = useState(false)
  const [editBudgetValue, setEditBudgetValue] = useState("")

  const dispatch = useDispatch()
  const { bills, monthlyBudget } = useSelector((state) => state.bills)

  const totalBills = bills.reduce((tot, bill) => tot + parseInt(bill.amount), 0)
  const billSorted = bills.sort((a, b) => a.amount - b.amount);
  let count = 0;
  let totalBiilToPay = 0
  for (let i = 0; i < billSorted.length; i++) {
    if (totalBiilToPay < monthlyBudget) {
      totalBiilToPay += parseInt(billSorted[i].amount);
      billSorted[i].paid = true;
      count++;
    }
    else {
      totalBiilToPay -= parseInt(billSorted[i - 1].amount);
      break;
    }
  }

  const handleEdit = () => {
    setEdit(true)
    setEditBudgetValue(monthlyBudget)
  }

  const handleSave = () => {
    dispatch(editBudget(editBudgetValue));
    setEdit(false)
  }

  return (
    <>
      <div className="monthly-budget">
        <h3>Monthly Budget :
          {edit ? <TextField
            type="number"
            defaultValue={monthlyBudget}
            variant="filled"
            size="small"
            onChange={(e) => setEditBudgetValue(e.target.value)}
          />
            : `₹${monthlyBudget}`}

          {edit ? <SaveAsIcon className='save' onClick={handleSave} />
            : <EditIcon className="edit" onClick={handleEdit} fontSize="small" />}
        </h3>
      </div>
      <table className="paid-bills-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th className="date-head">Date</th>
          </tr>
        </thead>
        <tbody>
          {billSorted.map((bill, index) => (
            <tr key={bill.id} className={index + 1 < count ? "highlight" : ""}>
              <td>{bill.description}</td>
              <td>{bill.category}</td>
              <td>₹ {bill.amount}</td>
              <td className="bill-date">{bill.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount">
        <strong>Total Amount to be paid:</strong> ₹{totalBiilToPay}
        {bills.length - count !== 0 ?
          <p className="remaining-amount">(Add ₹{totalBills - totalBiilToPay} to your monthly budget to pay remaining {bills.length + 1 - count} bills)</p>
          : null}
      </div>
    </>
  );
}

export default Pay