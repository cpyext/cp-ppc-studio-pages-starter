import { CtaProps } from "./Cta";

export interface GridItemProps {
  image?: string;
  title?: string;
  description?: string;
  CTA?: CtaProps;
}

export const initialProps: GridItemProps = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png",
  title: "name",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur culpa obcaecati magni sed doloribus perspiciatis ut, officiis debitis recusandae amet omnis sit quo in, accusamus cumque adipisci minus qui!",
};

const PPCGridItem = ({ image, title, description }: GridItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      {image && (
        <img
          src={image}
          className={`${
            image && title && description
              ? `max-h-[150px] max-w-[275px]`
              : `w-full`
          }`}
        />
      )}
      {title && <p className="text-2xl font-light text-[#011e50]">{title}</p>}
      {description && <p className="text-lg">{description}</p>}
    </div>
  );
};

export default PPCGridItem;
//
