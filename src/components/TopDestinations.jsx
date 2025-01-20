import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const locationData = [
  {
    id: "hanoi",
    places: [
      {
        name: "Hoan Kiem Lake",
        image:
          "https://lilystravelagency.com/wp-content/uploads/2024/09/hoan-kiem-lake1.png",
      },
      {
        name: "Ho Chi Minh Mausoleum",
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/191007104451-05-ho-chi-minh-mausoleum.jpg?q=x_0,y_0,h_1080,w_1919,c_fill/w_800",
      },
      {
        name: "Temple of Literature",
        image:
          "https://www.travelvietnam.com/images/temple-of-literature-hanoi-entrance_6092b.jpg",
      },
      {
        name: "Old Quarter",
        image:
          "https://oldquartertravel.com/wp-content/uploads/2018/10/hanoi-old-quarter-1.jpg",
      },
      {
        name: "West Lake",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/H%E1%BB%93_T%C3%A2y_ho%C3%A0ng_h%C3%B4n_-_NKS.jpg/1200px-H%E1%BB%93_T%C3%A2y_ho%C3%A0ng_h%C3%B4n_-_NKS.jpg",
      },
      {
        name: "Tran Quoc Pagoda",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/35/Tran_Quoc_Buddhist_Pagoda%2C_Hanoi%2C_6th_century_%2824%29_%2837610879445%29.jpg",
      },
    ],
  },
  {
    id: "danang",
    places: [
      {
        name: "Dragon Bridge",
        image: "https://static.vinwonders.com/2022/04/cau-rong-da-nang-1-1.jpg",
      },
      {
        name: "My Khe Beach",
        image:
          "https://ik.imagekit.io/tvlk/blog/2023/06/IvLBx31o-image.png?tr=dpr-2,w-675",
      },
      {
        name: "Marble Mountains",
        image:
          "https://danangfantasticity.com/wp-content/uploads/2015/09/di-tich-cap-quoc-gia-dac-biet-danh-thang-ngu-hanh-son.jpg",
      },
      {
        name: "Ba Na Hills",
        image:
          "https://banahills.sunworld.vn/wp-content/uploads/2019/12/C%E1%BA%A7u-V%C3%A0ng_SW-BNH-38.jpg",
      },
      {
        name: "Son Tra Peninsula",
        image:
          "https://static.vinwonders.com/2022/09/Son-tra-peninsula-banner.jpg",
      },
      {
        name: "Han River",
        image:
          "https://duthuyendanang.com/wp-content/uploads/2021/08/song-han-da-nang-1024x569.jpg",
      },
    ],
  },
  {
    id: "hue",
    places: [
      {
        name: "Hue Imperial City",
        image:
          "https://silkpathhotel.com/wp-content/uploads/2023/11/silkpath-hue-imperial-citadel-1-scaled.jpg",
      },
      {
        name: "Perfume River",
        image:
          "https://vietnamdiscovery.com/wp-content/uploads/2020/01/Artist-Inspiration-of-Huong-River.jpg",
      },
      {
        name: "Thien Mu Pagoda",
        image: "https://static.vinwonders.com/production/thien-mu-pagoda-5.jpg",
      },
      {
        name: "Tomb of Khai Dinh",
        image:
          "https://lh3.googleusercontent.com/ci/AL18g_TZK5YTvGOmX4qqYErqTdmihhWswJiW4NovlIlBy0fsu03PnLI9wUDo6GjpgyG0H-6t0KAgsWI=s1200",
      },
      {
        name: "Trang Tien Bridge",
        image:
          "https://cdn1.vietnamtourism.org.vn/images/content/9f349e96f07ece9d7cce3d8761f57b77.jpg",
      },
      {
        name: "Dong Ba Market",
        image:
          "https://danangprivatecar.com/wp-content/uploads/2022/11/When-to-visit-Dong-Ba-market-in-Hue-.jpeg",
      },
    ],
  },
  {
    id: "hochiminh",
    places: [
      {
        name: "Ben Thanh Market",
        image:
          "https://www.visithcmc.vn/uploads/0000/6/2023/09/11/ben-thanh-market-thumb2.jpg",
      },
      {
        name: "Notre-Dame Cathedral Basilica of Saigon",
        image:
          "https://cdn.antoursvietnam.com/wp-content/uploads/2024/01/Notre-Dame-Cathedral-of-Saigon-A-complete-guide.jpg",
      },
      {
        name: "War Remnants Museum",
        image:
          "https://image-tc.galaxy.tf/wijpeg-bawjb6xdtejm9jy09buae13z0/war-remnants-museum.jpg",
      },
      {
        name: "Cu Chi Tunnels",
        image:
          "https://cdn.silverlandhotels.com/wp-content/uploads/2024/06/Cu-Chi-Tunnels-tour-from-Ho-Chi-Minh-City.jpg",
      },
      {
        name: "Bitexco Financial Tower",
        image:
          "https://lesrivesexperience.com/wp-content/uploads/2017/09/bitexco_tower2.jpg",
      },
      {
        name: "Saigon Opera House",
        image:
          "https://static.lunecenter.vn/media/2024-09-18/6e75ca3c-f55f-4bdc-ab6d-f42cb6f13207.jpeg",
      },
    ],
  },
  {
    id: "hoian",
    places: [
      {
        name: "Japanese Covered Bridge",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b8/2024_H%E1%BB%99i_An_-_Japanese_Covered_Bridge_%28Ch%C3%B9a_C%E1%BA%A7u%29_after_renovation_-_img_11.jpg",
      },
      {
        name: "Hoi An Ancient Town",
        image:
          "https://vietnam.travel/sites/default/files/inline-images/shutterstock_1448516303_resize.jpg",
      },
      {
        name: "Cua Dai Beach",
        image:
          "https://www.vietnamonline.com/media/uploads/froala_editor/images/Cua%20Dai%20Beach-min.jpg",
      },
      {
        name: "Tra Que Vegetable Village",
        image:
          "https://lh3.googleusercontent.com/proxy/wAHF6nM14rqte0sKd03hzbE_4n9vjHUamDpsDb5sO7c-pugNCbkoW9j8Q_orq38ixAtzGdA8ZP_oo0RSgJC-8_LCIcGAU3stfuOPK3b7dVx3_KFDacxcO29ryHekxOx5qB9YvdO2vhCLuws82k-D786puXHEAF6WxEqB6QqmEbxBmYnzU6bHXZQGtA1JfNP7nKgKX_IejsDpDQ0mrQQ",
      },
      {
        name: "Fukian Assembly Hall",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/14/45/d3/fujian-assembly-hall.jpg?w=1200&h=1200&s=1",
      },
      {
        name: "Thu Bon River",
        image:
          "https://vietnamdiscovery.com/wp-content/uploads/2020/11/Thu-Bon-River-Overview.jpg",
      },
    ],
  },
  {
    id: "dalat",
    places: [
      {
        name: "Xuan Huong Lake",
        image:
          "https://statics.vinwonders.com/xuan-huong-lake-02_1686058644.jpg",
      },
      {
        name: "Dalat Flower Garden",
        image:
          "https://dalat-tour.com/images/news/9d805eed15d59f1d8598e6c9a96cf22a.jpg",
      },
      {
        name: "Crazy House",
        image:
          "https://culturephamtravel.com/wp-content/uploads/2022/04/crazy-house-dalat-culture-pham-travel-1.jpg",
      },
      {
        name: "Lang Biang Mountain",
        image:
          "https://dalat-tour.com/images/news/a67b89db7d84473e6b3cb0c7467a4b85.jpg",
      },
      {
        name: "Datanla Waterfall",
        image:
          "https://lilystravelagency.com/wp-content/uploads/2024/12/datanla-waterfall.jpg",
      },
      {
        name: "Pongour Waterfall",
        image:
          "https://culturephamtravel.com/wp-content/uploads/2022/05/pongour-waterfall-dalat-culture-pham-travel-01.jpg",
      },
    ],
  },
];

export default function TopDestinations({ locationId }) {
  const [option, setOption] = useState("");
  const places = locationData.find((location) => location.id === locationId);
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F5F9FF",
        textAlign: "left",
        fontFamily: "Urbanist",
      }}
    >
      <div className="mt-10 mb-10 mx-10 space-y-16">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Urbanist",
            fontSize: "24.758px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            letterSpacing: "2.971px",
            color: "#2D84F7",
          }}
        >
          01 / TOP SIGHTS & LOCATIONS
        </Typography>
        <div className="flex justify-between">
          <Typography
            className="w-1/2"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "74px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              letterSpacing: "2.971px",
              color: "#000",
            }}
          >
            Top Destinations for your Travel Plans
          </Typography>
          <div className="w-1/5 space-y-5">
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "24.758px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "2.971px",
                color: "#000",
              }}
            >
              Filter Options
            </Typography>
            <FormControl fullWidth>
              <Select
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "80px",
                }}
                value={option}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Select an option
                </MenuItem>
                <MenuItem value={10}>Popular</MenuItem>
                <MenuItem value={20}>Newest</MenuItem>
                <MenuItem value={30}>Cheapest</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          rowSpacing={12}
        >
          {places.places.map((place, index) => (
            <Grid item size={{ md: 4, xs: 4 }} key={index}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  minHeight: {
                    xl: "400px",
                    md: "280px",
                  },
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${place.image})`,
                }}
              ></Box>
              <Typography
                sx={{
                  marginTop: "20px",
                  color: "#000",
                  fontFamily: "Urbanist",
                  fontWeight: "700",
                  width: "100%",
                  lineHeight: "normal",
                  fontSize: "37.137px",
                }}
              >
                {place.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="outlined"
          sx={{
            height: "70px",
            width: "30%",
            borderRadius: "40px",
            textTransform: "none",
            padding: "0px 30px",
            fontSize: "1rem",
            left: "35%",
            fontFamily: "Urbanist",
            fontWeight: "600",
            lineHeight: "normal",
            fontSize: "25px",
            fontStyle: "normal",
          }}
        >
          View All Top Attractions
        </Button>
      </div>
    </div>
  );
}
