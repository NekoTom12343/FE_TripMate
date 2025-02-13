import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import {
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";

const post = {
  id: "1",
  title: "A Wonderful Journey to Ho Chi Minh City",
  subtitle: "Relationship tips couples therapists are giving all the time",
  author: "Joanna Wellick",
  readTime: "2 minutes read",
  views: "1K views",
  category: "Aenean Eleifend",
  content: [
    {
      type: "heading",
      text: "Eu ridiculus fringilla aenean",
    },
    {
      type: "paragraph",
      text: "Eget aenean tellus venenatis. Donec odio tempus...",
    },
    {
      type: "list",
      items: [
        "Mollis lorem vitae varius.",
        "Felis laoreet justo aenean curabitur.",
        "Maecenas imperdiet vitae vidi.",
        "Dictum libero felis feugiat fringilla.",
        "Felis nec eget curabitur sapien.",
      ],
    },
    {
      type: "paragraph",
      text: "Enim dapibus ante sapien eleifend.",
    },
    {
      type: "image",
      src: "https://example.com/image1.jpg",
      alt: "Description of image",
    },
    {
      type: "heading",
      text: "Faucibus nullam luctus felis pretium donec",
    },
    {
      type: "paragraph",
      text: "Amet tempus viverra et libero nascetur id veni.",
    },
    {
      type: "image",
      src: "https://example.com/image2.jpg",
      alt: "Another description of image",
    },
  ],
};
const Header = styled(Paper)(({ theme }) => ({
  backgroundImage:
    "url(https://live.staticflickr.com/65535/53329298767_3c1a14858b_c.jpg)", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "white",
  padding: theme.spacing(2),
  position: "relative",
}));

const BlogPost = () => {
  return (
    <Container className="mx-auto px-4">
      <Header>
        <Box className="absolute inset-x-0 bottom-0" mb={2}>
          {/* Center align the text */}
          <Typography
            variant="h2"
            className="flex font-bold justify-center"
            fontFamily={"Urbanist"}
          >
            A Wonderful Journey to Ho Chi Minh City
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={25}
            className="flex justify-center"
            fontFamily={"Urbanist"}
          >
            Relationship tips couples therapists are giving all the time
          </Typography>
          <Typography variant="body2" className="flex justify-center">
            by Joanna Wellick
          </Typography>
        </Box>
      </Header>

      <Box mt={4} className="text-gray-700">
        {post.content.map((part, index) => {
          switch (part.type) {
            case "paragraph":
              return (
                <Typography key={index} variant="body1" paragraph>
                  {part.text}
                </Typography>
              );
            case "heading":
              return (
                <Typography
                  key={index}
                  variant="h5"
                  className="text-2xl font-semibold"
                >
                  {part.text}
                </Typography>
              );
            case "list":
              return (
                <ul key={index} className="list-disc list-inside">
                  {part.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            case "image":
              return (
                <Box key={index} mt={2}>
                  <img
                    src={part.src}
                    alt={part.alt}
                    className="w-full h-auto"
                  />
                </Box>
              );
            default:
              return null;
          }
        })}
      </Box>
    </Container>
  );
};

export default BlogPost;
