import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Divider from "../components/Divider";
import HStack from "../components/HStack";
import Headline from "../components/Headline";
import PPCGridContainer from "../components/PPCGridContainer";
import PPCGridItem from "../components/PPCGridItem";
import PPCHeroBanner from "../components/PPCHeroBanner";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "landing-page-new",
    localization: { locales: ["en_GB"], primary: false },
    filter: { entityTypes: ["ce_ppcLanding"] },
    fields: [
      "c_headerImage",
      "name",
      "c_whystudy",
      "c_title_arden",
      "c_desc_arden",
      "c_footerImage",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `index.html`;
};
const EventPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <>
      <ProductImage src={`${document.c_headerImage.url}`} alt={``} />
      <PPCHeroBanner
        name={`${document.name}`}
        backgroundImage="https://d2n98vq36tw7n9.cloudfront.net/s3fs-public/background_and_gradient/header-pattern.svg"
        backgroundColor="#011e50"
      />
      <HStack>
        <Paragraph
          value={`Study your Qualifying Law Degree (QLD) through bended learning with Arden and unlock the door to your future as a legal professional  Study at our central Manchester study centre just 2 days a week and study online the rest of the time. Discover our Law Degree today.`}
          textSize="base"
          fontWeight="normal"
        />
        <ProductImage
          src={`https://cdn.arden.ac.uk/s3fs-public/2021-03/WhatUni_Review_10.png?VersionId=cupbQ9A0RrwUKCRgY3bhKqxjLFHVRzxt`}
          alt="Light green backpack with black canvas straps and front zipper pouch."
        />
      </HStack>
      <PPCGridContainer
        gridCount={2}
        paddingTop={4}
        paddingBottom={4}
        paddingLeft={2}
        paddingRight={2}
        title={``}
        gapBetween={4}
        backgroundColor="#FFFFFF"
      >
        <PPCGridItem
          image={`${document.c_whystudy.studyimage.url}`}
          title={`${document.c_whystudy.title}`}
          description={`${document.c_whystudy.titleDesc}`}
        />
        <PPCGridItem
          image={`${document.c_whystudy.studyimage2.url}`}
          title={`${document.c_whystudy.title2}`}
          description={`${document.c_whystudy.titleDesc2}`}
        />
        <PPCGridItem
          image={`${document.c_whystudy.studyimage3.url}`}
          title={`${document.c_whystudy.title3}`}
          description={`${document.c_whystudy.titleDesc3}`}
        />
        <PPCGridItem
          image={`${document.c_whystudy.studyimage4.url}`}
          title={`${document.c_whystudy.title4}`}
          description={`${document.c_whystudy.titleDesc4}`}
        />
        <PPCGridItem
          image={`${document.c_whystudy.studyimage5.url}`}
          title={`${document.c_whystudy.title5}`}
          description={`${document.c_whystudy.titleDesc5}`}
        />
        <PPCGridItem
          image={`${document.c_whystudy.studyimage6.url}`}
          title={`${document.c_whystudy.title6}`}
          description={`${document.c_whystudy.titleDesc6}`}
        />
      </PPCGridContainer>
      <Headline
        value={`${document.c_title_arden}`}
        textSize="xl"
        fontWeight="medium"
      />
      <HStack>
        <Paragraph
          value={`${document.c_desc_arden}`}
          textSize="sm"
          fontWeight="normal"
        />
        <ProductImage
          src={`https://cdn.arden.ac.uk/s3fs-public/styles/landing_hero_small_768px_x2/public/2018-11/Manchester_study_centre_reception.png`}
          alt={``}
        />
      </HStack>
      <ProductImage
        src={`https://a.mktgcdn.com/p/EB_4DyoFmGX_OhNRyKZDg7ffdeJoWVXWIhIl1hMAoF0/3346x206.png`}
        alt={``}
      />
      <ProductImage
        src={`https://a.mktgcdn.com/p/feb6GZm0HYR_BdxwZA-tFWzFRiGuwlbO3vrBimCTWrI/original`}
        alt={``}
      />
      <Headline
        value={`Start your journey with Arden University`}
        textSize="xl"
        fontWeight="medium"
      />
      <HStack>
        <ProductImage
          src={`https://a.mktgcdn.com/p/_3Pogtb3dEWDQz0oU013Meskngn5HvdYFE8HL2aaN94/790x698.png`}
          alt={``}
        />
        <ProductImage
          src={`https://a.mktgcdn.com/p/OtVPjpLcBNM8s3evJYl7ZC6iZcCpA6_KWFkVabCcUuY/790x700.png`}
          alt="Light green backpack with black canvas straps and front zipper pouch."
        />
        <ProductImage
          src={`https://a.mktgcdn.com/p/diXA2bvSuFtAKRswCegPjPN0-qLoCDTRWn3QC3BxhvM/794x702.png`}
          alt={``}
        />
        <ProductImage
          src={`https://a.mktgcdn.com/p/C3krZZCH5S1paNLzFZDMbtg8X61CNaGH85daB98g78M/792x704.png`}
          alt="Light green backpack with black canvas straps and front zipper pouch."
        />
        <Divider />
      </HStack>
      <ProductImage src={`${document.c_footerImage.url}`} alt={``} />
    </>
  );
};
export default EventPage;
