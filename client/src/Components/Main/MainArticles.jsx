import Button from "@mui/material/Button";

import styles from "../Main/Main.module.css";

import firstImg from "../../Images/Articles/first.png";
import secondImg from "../../Images/Articles/second.png";
import thirdImg from "../../Images/Articles/third.png";

const MainArticles = () => {
  const cardsData = [
    {
      id: 1,
      image: firstImg,
      title: "Card Title 1",
      subtitle: "This is a sample subtitle for card 1.",
      date: "01.12.2024",
    },
    {
      id: 2,
      image: secondImg,
      title: "Card Title 2",
      subtitle: "This is a sample subtitle for card 2.",
      date: "02.12.2024",
    },
    {
      id: 3,
      image: thirdImg,
      title: "Card Title 3",
      subtitle: "This is a sample subtitle for card 3.",
      date: "03.12.2024",
    },
  ];

  return (
    <div>
      <div className={styles.title}>Read our articles</div>
      <div className={styles.subtitle} style={{ maxWidth: "565px" }}>
        Harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis. On the other hand, we denounce with
        righteous.
      </div>

      <div className={styles.gridContainerArticles}>
        {cardsData.map((card) => (
          <div key={card} className={styles.cardArticles}>
            <img
              src={card.image}
              alt={"img"}
              className={styles.cardImageArticles}
            />
            <div className={styles.cardDateArticles}>{card.date}</div>
            <div className={styles.cardTitleArticles}>{card.title} </div>
            <div className={styles.cardSubtitleArticles}>{card.subtitle}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          href="/reviews"
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "150px",
            height: "52px",
            marginTop: "50px",
            alignItems: "center",
            textTransform: "none",
            marginBottom: "30px",
          }}
        >
          Read more...
        </Button>
      </div>
    </div>
  );
};

export default MainArticles;
