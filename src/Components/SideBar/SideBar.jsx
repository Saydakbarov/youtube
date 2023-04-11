import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../../utilits/constants";



export default function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: "column",
      }}

    >
        {categories.map((value, index) => 
        
            <button className="category-btn" style={{
              background: value.name === selectedCategory && '#fc1503',
              color:"#fff"
            }}
              key={value.name}
              onClick={() => setSelectedCategory(value.name)}
            >
                <span style={{
                  color: value.name === selectedCategory ? "white" : "red",
                  marginRight:"15px"
                }}>{value.icon}</span>
                <span style={{
                  opacity: value.name === selectedCategory ? "1" :"0.8"
                }}>{value.name}</span>
            </button>
        )}
    </Stack>
  );
}
