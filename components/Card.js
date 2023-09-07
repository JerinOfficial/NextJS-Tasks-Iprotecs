import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Edit from "@mui/icons-material/Edit";
import { Done } from "@mui/icons-material";

export default function Card({ text, onClickDlt, setmyArray, Array, id }) {

    const [boolean, setboolean] = useState(false)
    const [content, setContent] = useState(text);

    const editHandler = () => {
        if (!boolean) {
            setboolean(true)
        } else {
            const data = Array.find(item => item.id === id)
            data.title = content
            // console.log(data, "DATAS");
            setmyArray([...Array])
            setboolean(false)
        }
    }

    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
                bgcolor: "lavender",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            {boolean ? <input
                style={{
                    padding: "10px",
                    minWidth: "150px",
                    border: "1px solid black",
                    borderRadius: "4px"
                }}
                defaultValue={content}
                onChange={(e) => { setContent(e.target.value) }}
            />
                :
                <div>{content}</div>}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "235px",
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        color: "green",
                        border: "1px solid green",
                        width: "49%",
                        "&:hover": { background: "rgba(183, 183, 183, 0.297)", border: "1px solid green" },
                    }}

                    startIcon={boolean === true ? <Done /> : <Edit />}
                    onClick={editHandler}
                >
                    {boolean === true ? "Save" : "Edit"}
                </Button>
                <Button sx={{ width: "49%", }} variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={onClickDlt}>
                    Delete
                </Button>
            </Box>
        </Stack>
    );
}
