import ShadowAnimationButton from "../../common/ShadowAnimationButton";
import {
  MdMessage,
  MdOutlineHistoryToggleOff,
  MdOutlineMessage,
} from "react-icons/md";
import LabelWithIcon from "../../common/LabelWithIcon";
import { FiPhoneCall } from "react-icons/fi";
import BackgroundGridBeam from "../../common/background-grid-beam/BackgroundGridBeam";
import AnimatedGradientText from "../../common/animated-gradient-button/AnimatedGradientText";
import MessengerIcon from "../../icons/MessangerIcon";
import { WhatsappIcon } from "../../icons/WhatsappIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import DiscordIcon from "../../icons/DiscordIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import SnapChatIcon from "../../icons/SnapChatIcon";
import ViberIcon from "../../icons/ViberIcon";
import SlackIcon from "../../icons/SlackIcon";
import SkypeIcon from "../../icons/SkypeIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import LineIcon from "../../icons/LineIcon";
import EmailIcon from "../../icons/EmailIcon";
import YahooIcon from "../../icons/YahooIcon";
import OutlookIcon from "../../icons/OutlookIcon";
import { AnimatedTooltip } from "../../common/AnimatedTooltip";
import CollMode from "../../common/ui/cool-mode/CollMode";
import { GrSend } from "react-icons/gr";
import RatingStars from "@/components/common/RatingStars";
import UberIcon from "@/components/icons/UberIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import MetaIcon from "@/components/icons/MetaIcon";
import NotionIcon from "@/components/icons/NotionIcon";
import MailChimpIcon from "@/components/icons/MailChimpIcon";
import LinearIcon from "@/components/icons/LinearIcon";

const HeroSection = () => {
  return (
    <BackgroundGridBeam>
      <section className="flex justify-evenly px-4 md:px-20 pt-7 md:pt-12 lg:pt-20 pb-7 md:pb-4 lg:pb-10 ">
        {/* left side icons */}
        <div className="hidden 2xl:flex gap-x-4 h-96 w-60 icon-animation">
          <div className="flex flex-col justify-around relative right-4">
            <TelegramIcon className="relative left-6 icon-animation5" />
            <LineIcon className="icon-animation6" />
            <EmailIcon className="relative left-6 icon-animation7" />
          </div>
          <div className="flex flex-col justify-center gap-12 relative left-3">
            <WhatsappIcon className="icon-animation3" />
            <InstagramIcon className="icon-animation4" />
          </div>
          <div className="flex flex-col justify-between">
            <MessengerIcon className="icon-animation1" />
            <DiscordIcon className="icon-animation2" />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col items-center gap-y-4 md:gap-y-6 lg::gap-y-7 text-center text-[var(--text-primary-color)]">
          <AnimatedGradientText
            title={"Introducing Magic UI"}
            textGradient="bg-[var(--black-color)] dark:bg-gradient-to-r from-[var(--secondary-color)] via-[var(--primary-color)] to-[var(--secondary-color)]"
            borderGradient="bg-gradient-to-r from-[#80EEB4] dark:from-[#80EEB4]/60 via-[#3CA2FA] dark:via-[#3CA2FA]/100 to-[#80EEB4] dark:to-[#80EEB4]/60"
          />
          {/* title */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-5xl 2xl:text-7xl max-w-[62rem] font-bold uppercase leading-[1.1] text-balance">
            All of Your social apps in One{" "}
            <span className="text-[var(--primary-color)]">Place!</span>
          </h1>
          {/* description */}
          <p className="lg:text-xl max-w-2xl text-[var(--opacity-text-color)] text-balance">
            Built on the CSS grid foundation, the Advanced Columns plugin is the
            most powerful and flexible layout builder block for WordPress.
          </p>

          {/* features */}
          <div className="bg-[var(--glass-color)] shadow-lg dark:shadow-none px-6 py-3 rounded-2xl hidden md:flex items-center gap-7">
            {[
              { icon: <MdOutlineMessage />, label: "All message" },
              { icon: <FiPhoneCall />, label: "All call" },
              { icon: <MdMessage />, label: "All status" },
              { icon: <MdOutlineHistoryToggleOff />, label: "All post" },
            ].map(({ icon, label }, i) => (
              <LabelWithIcon key={i} icon={icon} label={label} />
            ))}
          </div>

          {/* action & offer & avatar & rating */}
          <div className="flex flex-col items-center gap-3">
            <CollMode
              options={{
                particle: [
                  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740288776/instagram_wtta6a.png",
                  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740288886/facebook_qaxwo5.png",
                  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740288990/whatsapp_epyaq3.png",
                  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740289075/snapchat_pseu9j.png",
                  "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740289165/discord_wixqob.png",
                ],
              }}
            >
              <ShadowAnimationButton title="Get Started" icon={<GrSend />} />
            </CollMode>

            <p className="flex items-center gap-1 font-bold">
              <span className="text-[var(--primary-color)]">
                Hurry!! $39 OFF
              </span>{" "}
              for 10 users
            </p>

            <div className="flex flex-col md:flex-row items-center pt-4 md:pt-6">
              <AnimatedTooltip items={people} />
              <div className="flex flex-col items-center md:items-start gap-1 mt-5 md:mt-0 md:ml-5">
                <RatingStars />
                <p className="ml-3 text-[var(--opacity-text-color)] font-semibold">
                  Join{" "}
                  <span className="text-[var(--text-primary-color)]">
                    2,183
                  </span>{" "}
                  Users worldwide
                </p>
              </div>
            </div>
          </div>

          {/* trusted by */}
          <div className="pt-16 hidden md:block">
            <p className="font-semibold text-[18px] -mb-4">Trusted by</p>
            <div className="flex items-center gap-x-8 ">
              <UberIcon />
              <SpotifyIcon />
              <MetaIcon />
              <NotionIcon />
              <MailChimpIcon />
              <LinearIcon />
            </div>
          </div>
        </div>
        {/* right side icons */}
        <div className="hidden 2xl:flex gap-x-4 h-96 w-60 icon-animation mr-8">
          <div className="flex flex-col justify-between">
            <FacebookIcon className="icon-animation8" />
            <YahooIcon className="icon-animation9" />
          </div>
          <div className="flex flex-col justify-center gap-12 relative right-3">
            <SnapChatIcon className="icon-animation10" />
            <ViberIcon className="icon-animation11" />
          </div>
          <div className="flex flex-col justify-around relative right-2">
            <SlackIcon className="icon-animation12" />
            <OutlookIcon className="icon-animation13 relative left-7" />
            <SkypeIcon className="icon-animation14" />
          </div>
        </div>
      </section>
    </BackgroundGridBeam>
  );
};

export default HeroSection;

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];
