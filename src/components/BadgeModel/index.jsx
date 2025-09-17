import React from "react";
import { HiSparkles } from "react-icons/hi2";

import {
  Button,
  FullscreenOverlay,
  RotatingBadge,
  Subtitle,
  Title,
} from "./styledComponents";

const BadgeModal = ({ open, onClose, badge }) => {
  if (!open || !badge) return null;

  return (
    <FullscreenOverlay>
      <Button onClick={onClose}>⬅ Back</Button>
      {/* <h3>Dear User,</h3> */}
      <Title>Congratulations</Title>
      <div>
        <Subtitle style={{ position: "relative" }}>「 {badge.name} 」</Subtitle>
        <HiSparkles
          style={{
            position: "absolute",
            color: "#fff",
            right: "40%",
            bottom: "65%",
            height: "30px",
            width: "30px",
          }}
        />
        <HiSparkles
          style={{
            position: "absolute",
            color: "#fff",
            right: "58%",
            bottom: "60%",
            height: "30px",
            width: "30px",
          }}
        />
        <HiSparkles
          style={{
            position: "absolute",
            color: "#fff",
            right: "58%",
            bottom: "40%",
            height: "50px",
            width: "50px",
          }}
        />
        <HiSparkles
          style={{
            position: "absolute",
            color: "#fff",
            right: "42%",
            bottom: "35%",
            height: "30px",
            width: "30px",
          }}
        />
      </div>

      <RotatingBadge src={badge.img} alt={badge.name} />

      <Subtitle>{badge.desc}</Subtitle>
    </FullscreenOverlay>
  );
};

export default BadgeModal;
