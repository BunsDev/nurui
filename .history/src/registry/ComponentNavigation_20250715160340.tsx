import { TfiHelpAlt } from "react-icons/tfi";
import { TbCards, TbHandClick } from "react-icons/tb";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { RxComponent2, RxSection } from "react-icons/rx";
import { PiCursorClickDuotone } from "react-icons/pi";

const baseUrl = "/docs";

export const navigation = [
  // introduction
  {
    icon: <AiOutlineFileSearch />,
    title: "Introduction",
    href: `${baseUrl}/introduction`,
  },
  // installation
  {
    icon: <GrInstallOption />,
    title: "Installation",
    href: `${baseUrl}/installation`,
  },
  // {
  //   icon: <TbComponents />,
  //   title: "Components",
  //   href: `${baseUrl}/components`,
  // },
  // sections
  {
    icon: <RxSection />,
    title: "Sections",
    submenu: [
      { name: "Neobrutalism faq", href: `${baseUrl}/neobrutalism-faq` },
      { name: "Premium testimonial", href: `${baseUrl}/premium-testimonial` },
      { name: "animated pricing", href: `${baseUrl}/animated-pricing` },
      { name: "creative pricing", href: `${baseUrl}/creative-pricing` },
      { name: "grid feature", href: `${baseUrl}/grid-feature` },
    ],
  },
  // components
  {
    icon: <RxComponent2 />,
    title: "Components",
    submenu: [
      { name: "Project showcase", href: `${baseUrl}/project-showcase` },
      { name: "Story", href: `${baseUrl}/story` },
      { name: "following eye", href: `${baseUrl}/following-eye` },
    ],
  },
  // buttons
  {
    icon: <TbHandClick />,
    title: "Buttons",
    submenu: [
      { name: "Magnet", href: `${baseUrl}/magnet-button` },
      { name: "Gradient", href: `${baseUrl}/gradient-button` },
      { name: "Border Animation", href: `${baseUrl}/border-animation-button` },
      { name: "Hover Shadow", href: `${baseUrl}/hover-shadow-button` },
      { name: "Text Fall", href: `${baseUrl}/text-fall-button` },
      { name: "future", href: `${baseUrl}/future-button` },
    ],
  },
  // cards
  {
    icon: <TbCards />,
    title: "Cards",
    submenu: [
      { name: "playing card", href: `${baseUrl}/playing-card` },
      { name: "info card", href: `${baseUrl}/info-card` },
      { name: "wave card", href: `${baseUrl}/wave-card` },
      { name: "dynamic card", href: `${baseUrl}/dynamic-card` },
      { name: "spotlight card", href: `${baseUrl}/spotlight-card` },
      { name: "feature card", href: `${baseUrl}/feature-card` },
    ],
  },
  // forms
  {
    icon: <FaWpforms />,
    title: "Forms",
    submenu: [
      { name: "contact form", href: `${baseUrl}/contact-form` },
      { name: "gaming form", href: `${baseUrl}/gaming-form` },
      { name: "singin form", href: `${baseUrl}/singin-form` },
      { name: "flow form", href: `${baseUrl}/flow-form` },
    ],
  },
  {
    icon: <FaWpforms />,
    title: "Hero",
    submenu: [
      { name: "gradient hero", href: `${baseUrl}/gradient-hero` },
      { name: "waves hero", href: `${baseUrl}/waves-hero` },
    ],
  },
  // cursors
  {
    icon: <PiCursorClickDuotone />,
    title: "Cursors",
    submenu: [
      { name: "draw cursor", href: `${baseUrl}/draw-cursor` },
      { name: "matrix cursor", href: `${baseUrl}/matrix-cursor` },
      { name: "hacker cursor", href: `${baseUrl}/hacker-cursor` },
      { name: "terminal cursor", href: `${baseUrl}/terminal-cursor` },
      { name: "code cursor", href: `${baseUrl}/code-cursor` },
      { name: "money cursor", href: `${baseUrl}/money-cursor` },
      { name: "electric cursor", href: `${baseUrl}/electric-cursor` },
      { name: "ghost cursor", href: `${baseUrl}/ghost-cursor` },
      { name: "tech cursor", href: `${baseUrl}/tech-cursor` },
      { name: "fire cursor", href: `${baseUrl}/fire-cursor` },
    ],
  },
  // help
  {
    icon: <TfiHelpAlt />,
    title: "Help",
    href: `/contact-us`,
  },
];
