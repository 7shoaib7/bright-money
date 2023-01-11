import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { addBill } from "../../store/bill/bill.action";
import { v4 as uuidv4 } from 'uuid';
import BillTable from "../../components/billTable/billTable"
import "./home.css";


const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [dateVal, setDateVal] = useState("");
  const [data, setData] = useState({
    description: '',
    category: '',
    amount: '',
    date: ''
  })

  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.bills)

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setData({
      description: '',
      category: '',
      amount: '',
      date: ''
    })
    setDateVal("")
    setOpen(false);
  }


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setData({
      ...data,
      date: newDate
    })
    setDateVal(newDate);
  };

  const handleAdd = () => {
    dispatch(addBill(bills, { ...data, id: uuidv4() }))
    setData({
      description: '',
      category: '',
      amount: '',
      date: ''
    })
    setDateVal("")
    setOpen(false);
  }

  return (
    <>
      <div className="home">
        <div className="add-bill">
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            className="add-bill-btn"
            onClick={handleOpen}
          >
            New Bill
          </Button>
        </div>
        <BillTable />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className="add-bill-modal">
          <h4>Add Bill Details</h4>
          <TextField
            label="Description"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "1rem", color: "#17c95f" }}
            name="description"
            value={data.description}
            onChange={handleInput}
          />
          <TextField
            label="Amount ₹"
            type="number"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "1rem", color: "#17c95f" }}
            name="amount"
            value={data.amount}
            onChange={handleInput}
          />
          <Select
            id="demo-select-small"
            labelId="demo-select-small"
            label="Category"
            size="small"
            sx={{ marginTop: "1rem", color: "#17c95f" }}
            fullWidth
            name="category"
            value={data.category}
            onChange={handleInput}
            displayEmpty
          >
            <MenuItem value="">
              Category
            </MenuItem>
            <MenuItem value="Utility">Utility</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Food & Dining">Food & Dining</MenuItem>
            <MenuItem value="Personal Care">Personal Care</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
          <input
            type="date"
            value={dateVal}
            onChange={handleDateChange}
            name="date"
            className="date-input"
          />
          <div className="add-bill-modal-btns">
            <Button variant="contained" color="success" sx={{ marginRight: "1rem" }} size="small" onClick={handleAdd}>
              ADD
            </Button>
            <Button variant="outlined" color="error" size='small' onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Home