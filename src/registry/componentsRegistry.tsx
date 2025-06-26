import GradientButton from "@/components/nurui/gradient-button";
import GradientButtonCode from "@/components/nurui/gradient-button.tsx?raw";
import GradientButtonDemoCode from "@/components/nurui/gradient-button-demo.tsx?raw";
import BorderAnimationButton from "@/components/nurui/border-animation-button";
import BorderAnimationButtonCode from "@/components/nurui/border-animation-button.tsx?raw";
import BorderAnimationButtonDemoCode from "@/components/nurui/border-animation-button-demo.tsx?raw";
import HoverShadowButton from "@/components/nurui/hover-shadow-button";
import HoverShadowButtonDemoCode from "@/components/nurui/hover-shadow-button-demo.tsx?raw";
import HoverShadowButtonCode from "@/components/nurui/hover-shadow-button.tsx?raw";
import { TextFallButtonDemo } from "@/components/nurui/text-fall-button-demo";
import TextFallButtonDemoCode from "@/components/nurui/text-fall-button-demo.tsx?raw";
import TextFallButtonCode from "@/components/nurui/text-fall-button.tsx?raw";
import MagnetButtonDemo from "@/components/nurui/magnet-button-demo";
import MagnetButtonDemoCode from "@/components/nurui/magnet-button-demo.tsx?raw";
import MagnetButtonCode from "@/components/nurui/magnet-button.tsx?raw";

type CodeEntry = {
  fileName: string;
  code: string;
};

type ComponentEntry = {
  preview: React.ReactNode;
  code: string;
  othersCode?: CodeEntry[];
};

export const Index: Record<string, ComponentEntry> = {
  gradientButton: {
    preview: <GradientButton />,
    code: GradientButtonDemoCode,
    othersCode: [{ fileName: "gradient-button", code: GradientButtonCode }],
  },
  borderAnimationButton: {
    preview: <BorderAnimationButton text="Contact me" />,
    code: BorderAnimationButtonDemoCode,
    othersCode: [
      { fileName: "border-animation-button", code: BorderAnimationButtonCode },
    ],
  },
  hoverShadowButton: {
    preview: <HoverShadowButton text="Subscribe" />,
    code: HoverShadowButtonDemoCode,
    othersCode: [
      { fileName: "hover-shadow-button", code: HoverShadowButtonCode },
    ],
  },
  textFallButton: {
    preview: <TextFallButtonDemo />,
    code: TextFallButtonDemoCode,
    othersCode: [{ fileName: "text-fall-button", code: TextFallButtonCode }],
  },
  magnetButton: {
    preview: <MagnetButtonDemo />,
    code: MagnetButtonDemoCode,
    othersCode: [{ fileName: "magnet-button", code: MagnetButtonCode }],
  },
};
