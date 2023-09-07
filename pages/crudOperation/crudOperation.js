import Container from "@mui/material/Container";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Add from "@mui/icons-material/Add";
import OutlinedInput from "@mui/material/OutlinedInput";
import Card from "@/components/Card";
import Typography from "@mui/material/Typography";
import Layout from "@/layout/Layout";

export default function CrudOperation() {
    const [myArray, setmyArray] = useState([{ title: "Add data", id: 0 }, { title: "Edit data", id: 1 }, { title: "Delete data", id: 2 }])
    const [inputData, setinputData] = useState('');

    const handleInputs = (e) => {
        setinputData(e.target.value)
    }
    const randomNum = () => {
        return Math.random()
    }
    const handleSubmit = () => {
        if (inputData !== "") {
            setmyArray([...myArray, { title: inputData, id: randomNum() }])
        }
        setinputData('')

    }
    console.log("ADDED", myArray);

    const deleteHandler = (id) => {
        const index = myArray.findIndex(item => item.id === id)
        myArray.splice(index, 1)
        setmyArray([...myArray])
    }

    return (
        <Layout title={"Crud Operation"}>
            <FormControl sx={{ m: 1, width: '50%' }} variant="outlined" >
                <OutlinedInput
                    type="text"
                    placeholder="Type here..."
                    value={inputData}
                    onChange={(e) => { handleInputs(e) }}

                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleSubmit}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                                type="submit"
                            >
                                <Add />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Stack sx={{ width: "100%", alignItems: "center", gap: "3px" }}>
                {
                    myArray?.map((item) => {
                        return (
                            <Card key={item.id} text={item.title} onClickDlt={() => { deleteHandler(item.id) }} id={item.id} myArray={myArray} setmyArray={setmyArray} Array={myArray} />)
                    })
                }
            </Stack>
        </Layout>
    );
}
