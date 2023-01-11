import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import "./billTable.css";

const BillTable = () => {
const bills = useSelector((state) => state.bills.bills)
    
  return (
    <table className="bill-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill) => (
          <tr key={bill.id}>
            <td>{bill.description}</td>
            <td>{bill.category}</td>
            <td>{bill.amount}</td>
            <td>{bill.date}</td>
            <td>
            <Button variant="contained" color="success" sx={{ marginRight: "1rem" }} size="small">
              Edit
            </Button>
            <Button variant="outlined" color="error" size='small'>
              Delete
            </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BillTable;
