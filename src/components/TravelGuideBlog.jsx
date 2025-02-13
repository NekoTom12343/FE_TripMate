import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";

const post = [
  {
    id: "4",
    title: "Da Nang: The Coastal Gem of Central Vietnam",
    headerImage:
      "https://bangkokattractions.com/wp-content/uploads/2023/03/da-nang.jpg",
    description: "Relationship tips couples therapists are giving all the time",
    author: "Joanna Wellick",
    readTime: "2 minutes read",
    views: "1K views",
    category: "Aenean Eleifend",
    content: [
      {
        type: "heading",
        text: "The Coastal Gem of Central Vietnam",
      },
      {
        type: "paragraph",
        text: "For history enthusiasts, Da Nang offers numerous sites that tell the story of Vietnam’s past. The War Remnants Museum provides a sobering look at the impact of the Vietnam War, while the Cu Chi Tunnels, located just outside the city, allow visitors to explore the underground network used by the Viet Cong during the war. The city is also home to several pagodas",
      },
      {
        type: "paragraph",
        text: "Da Nang is a paradise for food lovers. From street vendors to high-end restaurants, the city offers an array of delicious dishes. Pho (Vietnamese noodle soup), banh mi (Vietnamese sandwich), and com tam (broken rice with grilled pork) are just a few of the must-try foods. The city’s coffee culture is also worth exploring, with numerous cafes serving traditional Vietnamese coffee, often enjoyed with sweetened condensed milk.",
      },
      {
        type: "paragraph",
        text: "One of the most striking features of Da Nang is its contrast between the old and the new. The cityscape is a mix of French colonial buildings, traditional markets, and modern skyscrapers. Landmarks such as the Notre-Dame Cathedral Basilica of Saigon and the Central Post Office showcase the city’s colonial past, while places like the Bitexco Financial Tower represent its rapid modernization.",
      },
      {
        type: "paragraph",
        text: "Da Nang is a paradise for food lovers. From street vendors to high-end restaurants, the city offers an array of delicious dishes. Pho (Vietnamese noodle soup), banh mi (Vietnamese sandwich), and com tam (broken rice with grilled pork) are just a few of the must-try foods. The city’s coffee culture is also worth exploring, with numerous cafes serving traditional Vietnamese coffee, often enjoyed with sweetened condensed milk.",
      },
      {
        type: "heading",
        text: "A Thriving Economy",
      },
      {
        type: "image",
        src: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/48/2025/01/22090037/Cu%CC%80-Lao-Cha%CC%80m-%C4%90a%CC%80-Na%CC%86%CC%83ng-featured-image.png",
        alt: "Another description of image",
      },
      {
        type: "paragraph",
        text: "As the tourism center of Vietnam, Da Nang is a hub for business and innovation. The city attracts both local and international companies, making it a vital player in the country’s economic growth. The real estate, finance, and technology sectors are booming, and the city continues to develop at a rapid pace.",
      },
      {
        type: "paragraph",
        text: "One of the most striking features of Da Nang is its contrast between the old and the new. The cityscape is a mix of French colonial buildings, traditional markets, and modern skyscrapers. Landmarks such as the Notre-Dame Cathedral Basilica of Saigon and the Central Post Office showcase the city’s colonial past, while places like the Bitexco Financial Tower represent its rapid modernization.",
      },
    ],
  },
  {
    id: "5",
    title: "A Wonderful Journey to Ho Chi Minh City",
    headerImage:
      "https://live.staticflickr.com/65535/53329298767_3c1a14858b_c.jpg",
    description: "Relationship tips couples therapists are giving all the time",
    author: "Joanna Wellick",
    readTime: "2 minutes read",
    views: "1K views",
    category: "Aenean Eleifend",
    content: [
      {
        type: "heading",
        text: "Ho Chi Minh City: The Beating Heart of Vietnam",
      },
      {
        type: "paragraph",
        text: "For history enthusiasts, Ho Chi Minh City offers numerous sites that tell the story of Vietnam’s past. The War Remnants Museum provides a sobering look at the impact of the Vietnam War, while the Cu Chi Tunnels, located just outside the city, allow visitors to explore the underground network used by the Viet Cong during the war. The city is also home to several pagodas",
      },
      {
        type: "paragraph",
        text: "Ho Chi Minh City is a paradise for food lovers. From street vendors to high-end restaurants, the city offers an array of delicious dishes. Pho (Vietnamese noodle soup), banh mi (Vietnamese sandwich), and com tam (broken rice with grilled pork) are just a few of the must-try foods. The city’s coffee culture is also worth exploring, with numerous cafes serving traditional Vietnamese coffee, often enjoyed with sweetened condensed milk.",
      },
      {
        type: "paragraph",
        text: "One of the most striking features of Ho Chi Minh City is its contrast between the old and the new. The cityscape is a mix of French colonial buildings, traditional markets, and modern skyscrapers. Landmarks such as the Notre-Dame Cathedral Basilica of Saigon and the Central Post Office showcase the city’s colonial past, while places like the Bitexco Financial Tower represent its rapid modernization.",
      },
      {
        type: "paragraph",
        text: "Ho Chi Minh City is a paradise for food lovers. From street vendors to high-end restaurants, the city offers an array of delicious dishes. Pho (Vietnamese noodle soup), banh mi (Vietnamese sandwich), and com tam (broken rice with grilled pork) are just a few of the must-try foods. The city’s coffee culture is also worth exploring, with numerous cafes serving traditional Vietnamese coffee, often enjoyed with sweetened condensed milk.",
      },
      {
        type: "heading",
        text: "A Thriving Economy",
      },
      {
        type: "image",
        src: "https://content.r9cdn.net/rimg/dimg/f0/b1/54455949-city-18144-167c85df43f.jpg?width=1366&height=768&xhint=1159&yhint=754&crop=true",
        alt: "Another description of image",
      },
      {
        type: "paragraph",
        text: "As the economic center of Vietnam, Ho Chi Minh City is a hub for business and innovation. The city attracts both local and international companies, making it a vital player in the country’s economic growth. The real estate, finance, and technology sectors are booming, and the city continues to develop at a rapid pace.",
      },
      {
        type: "paragraph",
        text: "One of the most striking features of Ho Chi Minh City is its contrast between the old and the new. The cityscape is a mix of French colonial buildings, traditional markets, and modern skyscrapers. Landmarks such as the Notre-Dame Cathedral Basilica of Saigon and the Central Post Office showcase the city’s colonial past, while places like the Bitexco Financial Tower represent its rapid modernization.",
      },
    ],
  },
];

const TravelGuideBlog = ({ guideId }) => {
  const guide = post.find((guide) => guide.id === guideId);
  const Header = styled(Paper)(({ theme }) => ({
    backgroundImage: `url(${guide.headerImage})`, // Replace with your image URL
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

  return (
    <Container className="mx-auto px-4">
      <Header>
        <Box className="absolute inset-x-0 bottom-0" mb={2}>
          {/* Center align the text */}
          <Typography
            variant="h2"
            className=" font-bold text-center"
            fontFamily={"Urbanist"}
          >
            {guide.title}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={25}
            className="flex justify-center"
            fontFamily={"Urbanist"}
          >
            {guide.description}
          </Typography>
          <Typography variant="body2" className="flex justify-center">
            by Joanna Wellick
          </Typography>
        </Box>
      </Header>

      <Box mt={10} className="text-gray-700">
        {guide.content.map((part, index) => {
          switch (part.type) {
            case "paragraph":
              return (
                <Typography
                  sx={{ marginLeft: "50px", marginTop: "20px" }}
                  key={index}
                  variant="body1"
                  paragraph
                >
                  {part.text}
                </Typography>
              );
            case "heading":
              return (
                <Typography
                  key={index}
                  variant="h4"
                  sx={{ fontWeight: 700, fontFamily: "Urbanist" }}
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
                <Box key={index} mt={5}>
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

export default TravelGuideBlog;
