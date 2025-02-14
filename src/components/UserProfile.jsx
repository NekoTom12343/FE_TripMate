import {
  Avatar,
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  Paper,
  Button,
  IconButton,
  Modal,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Edit } from "@mui/icons-material";

// Example JSON data
const initialUserData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  sex: "Male",
  location: "Da Nang",
  dateOfBirth: "1995-01-01", // Use ISO format for date
  phoneNumber: "+1234567890",
  description:
    "I am on Tripmate to find some friends who can travel to Sapa with me. I have a keen interest in coffee, food, culture, and music. I have visited Australia, Cambodia, Hong Kong, Indonesia, Japan, Laos, Macao, Malaysia, Philippines, Singapore, Thailand, and Viet Nam.",
  coverImage:
    "https://bcp.cdnchinhphu.vn/344443456812359680/2022/2/18/hoi-an-vietnam-alexisjetsets-14-e1537782506571-16451770994361576239537.jpg", // Example cover image URL
  avatar: "https://via.placeholder.com/150", // Example avatar image URL
};

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState(2);
  const [userData, setUserData] = useState(initialUserData);
  const [openModal, setOpenModal] = useState(false);
  const [editField, setEditField] = useState("");
  const [editValue, setEditValue] = useState("");

  const handleOpenModal = (field) => {
    setEditField(field);
    setEditValue(userData[field]);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    setUserData({ ...userData, [editField]: editValue });
    handleCloseModal();
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, coverImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const getFieldLabel = (field) => {
    switch (field) {
      case "sex":
        return "Sex";
      case "location":
        return "Location";
      case "dateOfBirth":
        return "Date of Birth";
      case "phoneNumber":
        return "Phone Number";
      case "description":
        return "Description";
      default:
        return field;
    }
  };

  return (
    <div className="w-4/5 mx-auto mb-20">
      <Box className="relative" sx={{ height: 500 }}>
        <Box
          className="relative h-full rounded-br-3xl rounded-bl-3xl mb-4"
          sx={{
            backgroundImage: `url(${userData.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="upload-cover-image"
            type="file"
            onChange={handleCoverImageChange}
          />
          <label htmlFor="upload-cover-image">
            <Button
              size="large"
              variant="contained"
              component="span"
              className="bottom-5 right-5"
              sx={{ position: "absolute", textTransform: "none" }}
            >
              Upload new cover
            </Button>
          </label>
          <Avatar
            alt={userData.name}
            src={userData.avatar}
            sx={{
              width: 200,
              height: 200,
              border: "3px solid #2772D6",
              position: "absolute",
              bottom: -90,
              transform: "translateX(-50%)",
              left: "50%",
            }}
          />
        </Box>
      </Box>
      <Box className="relative text-center mt-24">
        <Typography variant="h5">{userData.name}</Typography>
        <Typography variant="body1" className="text-gray-600">
          {userData.email}
        </Typography>
      </Box>

      <Container maxWidth="lg" className="relative z-10">
        <div className="flex flex-col items-center">
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            className="mt-8"
          >
            <Tab label="Matched" />
            <Tab label="Your post" />
            <Tab label="Profile" />
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Paper
            className="p-4"
            sx={{ borderRadius: "20px", border: "1px solid #2772D6" }}
          >
            <div className="flex justify-between items-center mb-4">
              <Typography
                variant="h5"
                fontFamily={"Urbanist"}
                fontWeight={"bold"}
                className="mb-4"
              >
                Picture
              </Typography>
              <Typography variant="body2" color="primary">
                All
              </Typography>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200" />
              ))}
            </div>
          </Paper>

          <div className="md:col-span-2 space-y-6">
            <Paper
              className="p-6"
              sx={{ borderRadius: "20px", border: "1px solid #2772D6" }}
            >
              <div className="flex justify-between items-center">
                <Typography
                  variant="h5"
                  fontFamily={"Urbanist"}
                  fontWeight={"bold"}
                  className="mb-4"
                >
                  Overview
                </Typography>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Typography>Sex:</Typography>
                    <Typography>{userData.sex}</Typography>
                  </div>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal("sex")}
                  >
                    <Edit />
                  </IconButton>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Typography>Location:</Typography>
                    <Typography>{userData.location}</Typography>
                  </div>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal("location")}
                  >
                    <Edit />
                  </IconButton>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Typography>Date of Birth:</Typography>
                    <Typography>{userData.dateOfBirth}</Typography>
                  </div>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal("dateOfBirth")}
                  >
                    <Edit />
                  </IconButton>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Typography>Phone Number:</Typography>
                    <Typography>{userData.phoneNumber}</Typography>
                  </div>
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenModal("phoneNumber")}
                  >
                    <Edit />
                  </IconButton>
                </div>
              </div>
            </Paper>

            <Paper
              className="p-6"
              sx={{ borderRadius: "20px", border: "1px solid #2772D6" }}
            >
              <div className="flex justify-between items-center">
                <Typography
                  variant="h5"
                  className="mb-4"
                  fontFamily={"Urbanist"}
                  fontWeight={"bold"}
                >
                  About me
                </Typography>
                <IconButton
                  color="primary"
                  onClick={() => handleOpenModal("description")}
                >
                  <Edit />
                </IconButton>
              </div>
              <div className="space-y-6">
                <div>
                  <Typography variant="body1">
                    {userData.description}
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </Container>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Edit {getFieldLabel(editField)}
          </Typography>
          {editField === "sex" ? (
            <Select
              fullWidth
              variant="outlined"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          ) : editField === "dateOfBirth" ? (
            <TextField
              fullWidth
              variant="outlined"
              type="date"
              label={`New ${getFieldLabel(editField)}`}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          ) : (
            <TextField
              fullWidth
              variant="outlined"
              label={`New ${getFieldLabel(editField)}`}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              multiline={editField === "description"}
              rows={editField === "description" ? 4 : 1}
            />
          )}
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleCloseModal} sx={{ mr: 2 }}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
