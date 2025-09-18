import React from "react";

import {
  Button,
  Description,
  FullscreenOverlay,
  RotatingBadge,
  Subtitle,
  Title,
  Polygon,
  RotatingContainer,
} from "./styledComponents";

import star from "../../assets/star.png";
import polygon from "../../assets/polygon.png";

const BadgeModal = ({ open, onClose, badge }) => {
  if (!open || !badge) return null;

  return (
    <FullscreenOverlay>
      <Title>Congratulations</Title>
      <div style={{ position: "relative", marginTop: 60, marginBottom: 40 }}>
        <RotatingContainer>
          <Polygon src={polygon} alt="polygon background" />
          <RotatingBadge src={badge.img} alt={badge.name} />
        </RotatingContainer>{" "}
        <img
          src={star}
          alt="star"
          style={{
            height: "22px",
            width: "22px",
            position: "absolute",
            top: "30%",
            left: "90%",
            zIndex: 1,
          }}
        />
        <img
          src={star}
          alt="star"
          style={{
            height: "48px",
            width: "48px",
            position: "absolute",
            top: "61%",
            left: "-8%",
            zIndex: 1,
          }}
        />
      </div>
      <Subtitle> {badge.name}</Subtitle>
      <Description>{badge.desc}</Description>
      <Button
        onClick={onClose}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Back to Profile
      </Button>
    </FullscreenOverlay>
  );
};

export default BadgeModal;
