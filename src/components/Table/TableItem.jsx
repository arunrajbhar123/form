import React,{useRef} from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Button,
} from '@chakra-ui/react';
import {v4} from 'uuid';


const TableItem = ({handlesalarysort,infoData,handleDelete,handlefilterdepartment}) => {
 const handlefilter =(e)=>{
let {value}=e.target;
handlefilterdepartment(value)
 }
 const handlesort=(e)=>{
let {value}=e.target;
handlesalarysort(value)
 }


  return (
    <div>

<TableContainer>
  <Table variant='simple'>
    <TableCaption>React Forms</TableCaption>
    <Thead>
      <Tr>
        <Th>Name
          
        </Th>
        <Th>Age</Th>
        <Th isNumeric>Department
        <select  id="" onChange={(e)=> handlefilter(e)}>
            <option value=""></option>
            <option name="mern" value="Mern">Mern</option>
           <option name="java" value="Java">Java</option>
            <option name="python" value="Python">python</option>
          </select>
        </Th>
        <Th>Salary
          <select name="" id="" onChange={(e)=> handlesort(e)}>
            <option value=""></option>
            <option value="highlow">High to Low</option>
            <option value="lowhigh">Low to High</option>
          </select>
        </Th>
        <Th>Marital State</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>

    {infoData.map((el,index)=>(
      <Tr key={index}>
        <Td>{el.name}</Td>
        <Td>{el.age}</Td>
        <Td isNumeric>{el.department}</Td>
        <Td>{el.salary}</Td>
        <Td>{el.status}</Td>
      
        <Td><Button onClick={()=>handleDelete(index)}>Delete</Button></Td>
      </Tr>
    ))}

      
      
    </Tbody>
    
  </Table>
</TableContainer>





    </div>
  )
}

export default TableItem