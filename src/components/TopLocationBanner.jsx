import { Typography } from "@mui/material";

const locationData = [
  {
    id: "hanoi",
    name: "HA NOI CAPITAL",
    image:
      "https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-ha-Noi-dep-chat-luong-cao.jpg",
  },
  {
    id: "hochiminh",
    name: "HO CHI MINH CITY ",
    image:
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/12/19/hcml-3.jpg",
  },
  {
    id: "danang",
    name: "DA NANG CITY",
    image:
      "https://www.sandybeachdanang.com/uploads/image/images/4-Cau-Rong-Han-Cau-Thuan-Phuoc.jpg",
  },
  {
    id: "hoian",
    name: "HOI AN ANCIENT TOWN",
    image: "https://cdn.vietnam.vn/wp-content/uploads/2023/03/Hoi-An-2.jpg",
  },
  {
    id: "nhatrang",
    name: "Nha Trang",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Nha_Trang_beach%2C_Vietnam.jpg",
  },
  {
    id: "hue",
    name: "HUE ACIENT CAPITAL",
    image:
      "https://anhdepbonphuong.com/wp-content/uploads/2024/03/anh-hue-dep-tho-kinh-thanh-hue-02.jpg",
  },
  {
    id: "cantho",
    name: "Cần Thơ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Can_Tho_Bridge.jpg",
  },
  {
    id: "vungtau",
    name: "Vũng Tàu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Vung_Tau%2C_Vietnam.jpg",
  },
  {
    id: "dalat",
    name: "Đà Lạt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Xuan_Huong_Lake.jpg",
  },
  {
    id: "phuquoc",
    name: "Phú Quốc",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Phu_Quoc_beach.jpg",
  },
];

export default function TopLocationBanner({ locationId }) {
  const location = locationData.find((location) => location.id === locationId);
  return (
    <div className="flex relative group">
      <img
        src={location.image}
        alt={location.name}
        className="object-cover w-full h-[850px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[#FFF] pointer-events-none"></div>

      <Typography
        className="absolute inset-x-0 bottom-0 text-center"
        sx={{
          marginBottom: "40px",
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#2D84F7",
          fontFamily: "Urbanist",
          fontSize: "150px",
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "normal",
          color: "transparent", // Makes the fill transparent so only the stroke is visible
          display: "inline-block", // Ensures inline behavior
        }}
      >
        {location.name}
      </Typography>
    </div>
  );
}
