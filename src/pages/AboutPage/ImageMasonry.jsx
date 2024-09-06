import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import cultureA from "../../assets/images/cultureImg5.jpg";
import cultureB from "../../assets/images/cultureImage1.jpg";
import cultureC from "../../assets/images/cultureImg2.JPG";
import cultureD from "../../assets/images/cultureImg3.jpg";
import cultureE from "../../assets/images/cultureImg.jpg";

export default function ImageMasonry() {
  return (
    <Box sx={{ width: { md: "80%" }, minHeight: 829 }}>
      <Masonry columns={3} spacing={1}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={item.img}
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "5px",
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: cultureA,
    title: "Fern",
  },
  {
    img: cultureB,
    title: "Snacks",
  },
  {
    img: cultureC,
    title: "Mushrooms",
  },
  {
    img: cultureD,
    title: "Tower",
  },
  {
    img: cultureE,
    title: "Tower",
  },
];
