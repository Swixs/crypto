import Button from "@mui/material/Button";

import styles from "../Main/Main.module.css";
import userLogo from "../../Images/User/LogoUser.png";

const MainReviews = () => {
  return (
    <div>
      <div className={styles.blockReviews}>
        <div className={styles.reviewsTitle}>What our customers are saying</div>
        <div className={styles.reviewsSubtitle}>
          Find out why our clients trust us with their investments by reading
          their success stories in our testimonials section.
        </div>

        <div className={styles.containerReview}>
          <div className={styles.cardReview}>
            <div className={styles.cardContentReview}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </div>
            <div className={styles.cardUserReview}>
              <img
                src={userLogo}
                alt="User logo"
                className={styles.cardImageReview}
              />
              <div className={styles.cardDetailsReview}>
                <div className={styles.cardTitleReview}>Savannah Nguyen</div>
                <div className={styles.cardDataReview}>11:30 - 19.05.2024</div>
              </div>
            </div>
          </div>
          <div className={styles.cardReview}>
            <div className={styles.cardContentReview}>
              “Ut labore et dolore magna aliqua. Et harum quidem rerum facilis
              est et expedita distinctio. Nam libero tempore, cum soluta nobis.
              On the other hand, we denounce.”
            </div>
            <div className={styles.cardUserReview}>
              <img
                src={userLogo}
                alt="User logo"
                className={styles.cardImageReview}
              />
              <div className={styles.cardDetailsReview}>
                <div className={styles.cardTitleReview}>Bessie Cooper</div>
                <div className={styles.cardDataReview}>11:30 - 19.05.2024</div>
              </div>
            </div>
          </div>
          <div className={styles.cardReview}>
            <div className={styles.cardContentReview}>
              “Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et.”
            </div>
            <div className={styles.cardUserReview}>
              <img
                src={userLogo}
                alt="User logo"
                className={styles.cardImageReview}
              />
              <div className={styles.cardDetailsReview}>
                <div className={styles.cardTitleReview}>Darrell Steward</div>
                <div className={styles.cardDataReview}>11:30 - 19.05.2024</div>
              </div>
            </div>
          </div>
          <div className={styles.cardReview}>
            <div className={styles.cardContentReview}>
              “Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis. On the other hand, we denounce.”
            </div>
            <div className={styles.cardUserReview}>
              <img
                src={userLogo}
                alt="User logo"
                className={styles.cardImageReview}
              />
              <div className={styles.cardDetailsReview}>
                <div className={styles.cardTitleReview}>Dianne Russell</div>
                <div className={styles.cardDataReview}>11:30 - 19.05.2024</div>
              </div>
            </div>
          </div>
          <div className={styles.cardReview}>
            <div className={styles.cardContentReview}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </div>
            <div className={styles.cardUserReview}>
              <img
                src={userLogo}
                alt="User logo"
                className={styles.cardImageReview}
              />
              <div className={styles.cardDetailsReview}>
                <div className={styles.cardTitleReview}>Devon Lane</div>
                <div className={styles.cardDataReview}>11:30 - 19.05.2024</div>
              </div>
            </div>
          </div>
          <div className={styles.cardReview}>
            <div className={styles.cardContentReview}>
              “Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain“
            </div>
            <div className={styles.cardUserReview}>
              <img
                src={userLogo}
                alt="User logo"
                className={styles.cardImageReview}
              />
              <div className={styles.cardDetailsReview}>
                <div className={styles.cardTitleReview}>Darlene Robertson</div>
                <div className={styles.cardDataReview}>11:30 - 19.05.2024</div>
              </div>
            </div>
          </div>
        </div>

        <Button
          href="/reviews"
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "150px",
            height: "52px",
            marginTop: "50px",
          }}
        >
          More reviews
        </Button>
      </div>
    </div>
  );
};

export default MainReviews;
