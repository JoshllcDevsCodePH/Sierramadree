import { Box, Card, Typography } from "@mui/material";
import { Balance } from "../Balance";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export type UpgradePageProps = {
  count: number;
};

export const UpgradePage: FC<UpgradePageProps> = ({ count }) => {
  const navigate = useNavigate();

  // Image paths and names for combo and upgrade sections
  const comboImages = [
    { name: "Combo 1", image: "/combo1.png" },
    { name: "Combo 2", image: "/combo2.png" },
    { name: "Combo 3", image: "/combo3.png" },
  ];

  const upgrades = [
    { name: "Tukmol", cost: "5,000", image: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/14164044/mutant-975x1024-1.jpeg" },
    { name: "Monggoloid", cost: "100,000", image: "https://wallpaperbat.com/img/735370-boringstone-an-nft-magazine.jpg" },
    { name: "Tarantado", cost: "5,000", image: "https://i.pinimg.com/originals/2f/0f/b1/2f0fb1caf873a793f50b627dc95b7b4a.jpg" },
    { name: "Gago", cost: "100,000", image: "https://i.pinimg.com/736x/09/32/8e/09328e373960083b77c842beb838fc65.jpg" },
    { name: "Taknaydamo", cost: "5,000", image: "https://blockmedia.com/wp-content/uploads/2022/04/mono-1024x1024.jpg" },
    { name: "Shabu", cost: "100,000", image: "https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png" },
    { name: "Butu", cost: "5,000", image: "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2022/03/17154007/create-characters-with-traits-for-nft-art-collection-_3_-768x766.jpg" },
    { name: "Salagpi", cost: "100,000", image: "https://publish.one37pm.net/wp-content/uploads/2021/07/image-2.png?fit=750%2C750" },
    { name: "Salot", cost: "5,000", image: "https://wallpapercave.com/wp/wp10537345.png" },
    { name: "Burat", cost: "100,000", image: "https://i.seadn.io/gae/_MvwHtPIbahDuNKtXHqvyWzrWDlDrH1a20WATiOQ8v2A7kbkeBR31Jz533g9zORLRySBJiH0JEHHzHVVNmldHepyoirYORyrNgooizU?auto=format&w=3840" },
  ];

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(0deg, rgba(185, 123, 0, 0.74) -70.7%, #000 35.94%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "white",
          minHeight: "100vh",
          padding: "20px",
          borderRadius: "10px",
          margin: "auto",
          maxWidth: "600px",
          position: "relative", // Added position relative to position the back button absolutely
        }}
      >
        <Balance count={count} />
        <Typography sx={{ marginTop: "10px" }}>Your balance</Typography>

        {/* Combo Section */}
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "left", marginBottom: "10px" }}>
            Combo Section
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            {comboImages.map((combo, index) => (
              <Card
                key={index}
                sx={{
                  width: "80px",
                  height: "120px",
                  margin: "5px",
                  borderRadius: "5px",
                  border: "1px solid yellow",
                  backgroundColor: "transparent",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "yellow",
                    color: "black",
                  },
                }}
              >
                <img
                  src={combo.image}
                  alt={combo.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }}
                />
              </Card>
            ))}
          </Box>
        </Box>

        {/* Upgrade Card Section */}
        <Box sx={{ width: "100%", marginTop: "20px", borderRadius: "10px", textAlign: "center" }}>
          <Typography variant="h5" sx={{ textAlign: "left", marginBottom: "10px" }}>
            Upgrade Card Section
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns grid
              gap: "10px",
              justifyContent: "center", // center items horizontally
            }}
          >
            {upgrades.map((upgrade, index) => (
              <Card
                key={index}
                sx={{
                  width: "130px", // Adjusted width to 130px
                  height: "200px",
                  padding: "0",
                  margin: "5px", // Added margin of 5px
                  backgroundColor: "transparent",
                  border: "1px solid yellow",
                  color: "white",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "yellow",
                    color: "black",
                  },
                }}
              >
                <img
                  src={upgrade.image}
                  alt={upgrade.name}
                  style={{ width: "100%", height: "calc(100% - 50px)", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
                />
                <Box
                  sx={{
                    height: "50px", // Adjusted height to 50px
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.25)", // Changed background color
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 0 10px 10px",
                    padding: "5px",
                    fontSize: "12px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    {upgrade.name}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    {upgrade.cost}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
