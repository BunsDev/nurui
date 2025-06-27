"use client";
import React, { useState } from "react";
import PlayingCard from "./playing-card";

// Helper to parse the CSS variable string into an array of RGB arrays
function parseCanvasColors(cssVar: string): number[][] {
  const raw = cssVar.replace(/['"]/g, "");
  return raw
    .split(";")
    .map((group) => group.split(",").map((n) => parseInt(n.trim(), 10)))
    .filter((arr) => arr.length === 3);
}

// Get CSS variable as string
function getCssVar(varName: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
}

export default function PlayingCardDemo() {
  const [
    revealCanvasForPlayingCard,
    setRevealCanvasForPlayingCardForPlayingCard,
  ] = useState(false);

  // Read and parse color variables
  const [canvasColors, setCanvasColors] = useState(() =>
    parseCanvasColors(getCssVar("--playingcard-canvas-colors")),
  );
  const [canvasBg, setCanvasBg] = useState(() =>
    getCssVar("--playingcard-canvas-bg"),
  );

  // Optional: Update on theme change if your theme system triggers an event
  React.useEffect(() => {
    const update = () => {
      setCanvasColors(
        parseCanvasColors(getCssVar("--playingcard-canvas-colors")),
      );
      setCanvasBg(getCssVar("--playingcard-canvas-bg"));
    };
    window.addEventListener("themechange", update);
    return () => window.removeEventListener("themechange", update);
  }, []);

  return (
    <div style={{ maxWidth: 440, margin: "0 auto" }}>
      <div className="text-sm">
        Click on the card to show/hide dynamic background
      </div>
      <PlayingCard
        componentWidth="400px"
        aspectRatio="3/4"
        outerRounding="18px"
        innerRounding="18px"
        backgroundColor="var(--playingcard-bg)"
        foregroundColor="var(--playingcard-fg)"
        imageHeightPercentage={36}
        imageSrc="https://raw.githubusercontent.com/Northstrix/my-portfolio/refs/heads/main/public/playground-card-image.webp"
        imageAlt=""
        outlineColor="var(--playingcard-outline-color)"
        hoverOutlineColor="var(--playingcard-hover-outline-color)"
        textArray={["洪", "秀", "全"]}
        minWidth={200}
        maxWidth={400}
        minTextSize={16}
        maxTextSize={24}
        verticalPadding="20px"
        horizontalPadding="20px"
        manualLetterSpacing={-2}
        componentId="card-1"
        revealCanvas={revealCanvasForPlayingCard}
        onCardClicked={() =>
          setRevealCanvasForPlayingCardForPlayingCard((prev) => !prev)
        }
        textColorTransitionDelay="1s"
        textColorTransitionDuration="2.4s"
        revealCanvasBackgroundColor={canvasBg}
        revealCanvasColors={canvasColors}
        inscriptionColor="var(--playingcard-inscription-color)"
        inscriptionColorHovered="var(--playingcard-inscription-color-hover)"
      />
    </div>
  );
}
