import { HexColor } from "@yext/studio";

export interface GridProps {
  gridCount: number;
  children?: React.ReactNode;
  title?: string;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  gapBetween?: number;
  backgroundColor?: HexColor;
}

export const initialProps: GridProps = {
  gridCount: 2,
  title: "name",
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  gapBetween: 4,
  backgroundColor: "#FFFFFF",
};

const PPCGridContainer = ({
  gridCount,
  children,
  title,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  gapBetween,
  backgroundColor,
}: GridProps) => {
  return (
    <div
      style={{
        paddingTop: `${paddingTop}em`,
        paddingBottom: `${paddingBottom}em`,
        paddingLeft: `${paddingLeft}em`,
        paddingRight: `${paddingRight}em`,
        backgroundColor,
      }}
      className={`flex flex-col`}
    >
      <p className="text-3xl font-light mb-8 text-[#011e50]">{title}</p>
      <div
        className={`grid grid-cols-${gridCount} gap-${gapBetween} items-center`}
      >
        {children}
      </div>
    </div>
  );
};

export default PPCGridContainer;
