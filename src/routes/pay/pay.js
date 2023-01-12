import React from 'react'
import "./pay.css"
import { useSelector } from 'react-redux';

const Pay = () => {
  const { bills } = useSelector((state) => state.bills)
  const billSorted = bills.sort((a, b) => a.amount - b.amount);
  let count = 0;
  let total = 0
  for (let i = 0; i < billSorted.length; i++) {
    if (total <= 5000) {
      total += parseInt(billSorted[i].amount);
      billSorted[i].paid = true;
      count++;
    }
    else{
      break;
    }
  }


  return (
    <>
      <table className="paid-bills-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {billSorted.map((bill, index) => (
            <tr key={bill.id} className={index < count ? "highlight" : ""}>
              <td>{bill.description}</td>
              <td>{bill.category}</td>
              <td>₹ {bill.amount}</td>
              <td>{bill.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount">
        <strong>Total Amount to be paid:</strong> ₹{total}
        <p className="remaining-amount">(Add extra amount to your monthly budget to pay remaining {bills.length -count} bills)</p>
      </div>
    </>
  );
}

export default Pay