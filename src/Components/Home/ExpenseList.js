import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

function ExpenseList(props) {
  const expenses = props.expense;

  const EditExpense = (obj)=>{
    props.edit(obj)
  }

  const DeleteExpense  = async (id)=>{
    console.log(id)
    const response = await fetch(`https://react-api-test-d5c70-default-rtdb.firebaseio.com/Expense/${id}.json`,{
        method:'DELETE'
    })
    if(response.ok){
        props.reload()
    }
  }

  return (
    <Container>
        <Table striped hover size="sm" variant="dark">
            <thead>
                <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Catagory</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {
        expenses.map((obj) => {
            return (
            <tr key={obj.key}>
                <td>{obj.value.Amount}</td>
                <td>{obj.value.Description}</td>
                <td>{obj.value.Catagory}</td>
                <td><Button onClick={EditExpense.bind(null,obj)}>Edit</Button></td>
                <td><span onClick={DeleteExpense.bind(null,obj.key)}> <Trash/></span>   </td>
            </tr>
            );
        })
        }
            </tbody>
        </Table>
    </Container>
    
  );
}

export default ExpenseList;
