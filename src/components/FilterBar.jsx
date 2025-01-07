import React from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function FilterBar({ filterRef }) {
  const categories = [
    {
      label: "Account Type",
      options: ["Individual", "Business", "Tour Operator"],
    },
    {
      label: "Gender",
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Departure location",
      options: ["New York", "Los Angeles", "Chicago", "Miami"],
    },
    {
      label: "Place to go",
      options: ["Beach", "Mountain", "City", "Countryside"],
    },
    {
      label: "Vehicle",
      options: ["Car", "Bike", "Bus", "Plane"],
    },
    {
      label: "Type of tourism",
      options: ["Adventure", "Relaxation", "Cultural", "Eco-tourism"],
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState(
    categories.reduce((acc, category) => {
      acc[category.label] = "";
      return acc;
    }, {})
  );
  const handleChange = (label, event) => {
    setSelectedOptions({
      ...selectedOptions,
      [label]: event.target.value,
    });
    console.log(selectedOptions);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(selectedOptions);
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F5F9FF",
        textAlign: "left",
        fontFamily: "Urbanist",
      }}
      ref={filterRef}
    >
      <div className="mt-10 mx-10 space-y-16">
        <Typography
          variant="h3"
          style={{ color: "#2979FF", fontWeight: "bold", marginBottom: "20px" }}
        >
          Looking for TRIP MATEs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item size={{ xs: 2, md: 2, sm: 2 }} key={index}>
              <FormControl fullWidth variant="outlined" className="space-y-6">
                <Typography
                  sx={{
                    color: "rgb(41, 121, 255)",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                  }}
                >
                  {category.label}
                </Typography>
                <Select
                  displayEmpty
                  size="medium"
                  value={selectedOptions[category.label]}
                  onChange={(event) => handleChange(category.label, event)}
                >
                  <MenuItem disabled value="">
                    <em>Select an option</em>
                  </MenuItem>
                  {category.options.map((option, optionIndex) => (
                    <MenuItem key={optionIndex} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}

          <Grid item xs={12} sm={12} md={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              onClick={handleSearch}
              startIcon={<SearchIcon sx={{ width: "30px", height: "30px" }} />}
              sx={{
                height: "100%",
                fontSize: "1.2rem",
                minHeight: "60px",
                minWidth: "218px",
                borderRadius: "40px",
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "#2979FF",
                "&:hover": {
                  backgroundColor: "#1565C0",
                },
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FilterBar;
