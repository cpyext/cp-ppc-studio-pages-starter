import { HexColor } from "@yext/studio";

export interface PPCHeroBannerItemProps {
  name?: string;
  backgroundImage?: string;
  backgroundColor?: HexColor;
}

export const initialProps: PPCHeroBannerItemProps = {
  name: "name",
  backgroundImage:
    "https://d2n98vq36tw7n9.cloudfront.net/s3fs-public/background_and_gradient/header-pattern.svg",
  backgroundColor: "#2b74d0",
};

const PPCHeroBanner = ({
  name,
  backgroundImage,
  backgroundColor,
}: PPCHeroBannerItemProps) => {
  return (
    <div
      className={`w-full relative`}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <img
        className={` h-[300px] w-full bg-contain bg-no-repeat bg-right`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        alt=""
      />
      <h1 className="absolute top-20 left-20 text-5xl w-2/5 text-white font-medium leading-normal">
        {name}
      </h1>
      <div className="py-2 flex justify-center text-center text-white uppercase text-sm font-semibold">
        Home - {name}
      </div>
    </div>
  );
};

export default PPCHeroBanner;
