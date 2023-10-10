import {
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Cta from "../components/Cta";
import Divider from "../components/Divider";
import GridContainer from "../components/GridContainer";
import HStack from "../components/HStack";
import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import Label from "../components/Label";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import VStack from "../components/VStack";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-4",
    localization: { locales: ["en_GB"], primary: false },
    filter: { entityTypes: ["ce_ppcLanding"] },
    fields: [
      "name",
      "landingPageUrl",
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
  return `${document.slug}`;
};
const EventPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <>
      <Divider />
      <HeaderSimple backgroundColor="#011e50" logo={``} />
      <Label value={`Label ${document.name}`} />
      <Cta
        style={`font-bold text-black`}
        url={`${document.landingPageUrl}`}
        buttonText={`New Button`}
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
      <GridContainer>
        <Paragraph
          value={`Why study with Arden University?`}
          textSize="xl"
          fontWeight="bold"
        />
        <GridContainer>
          <VStack>
            <ProductImage
              src={`${document.c_whystudy.studyimage.url}`}
              alt={``}
            />
            <Headline
              value={`${document.c_whystudy.title}`}
              textSize="xl"
              fontWeight="medium"
            />
            <Paragraph
              value={`${document.c_whystudy.titleDesc}`}
              textSize="base"
              fontWeight="normal"
            />
          </VStack>
        </GridContainer>
        <GridContainer>
          <VStack>
            <ProductImage
              src={`${document.c_whystudy.studyimage2.url}`}
              alt={``}
            />
            <Headline
              value={`${document.c_whystudy.title}`}
              textSize="xl"
              fontWeight="medium"
            />
            <Paragraph
              value={`${document.c_whystudy.titleDesc}`}
              textSize="base"
              fontWeight="normal"
            />
          </VStack>
        </GridContainer>
        <GridContainer>
          <VStack>
            <ProductImage
              src={`${document.c_whystudy.studyimage3.url}`}
              alt={``}
            />
            <Headline
              value={`${document.c_whystudy.title}`}
              textSize="xl"
              fontWeight="medium"
            />
            <Paragraph
              value={`${document.c_whystudy.titleDesc}`}
              textSize="base"
              fontWeight="normal"
            />
          </VStack>
        </GridContainer>
        <GridContainer>
          <VStack>
            <ProductImage
              src={`${document.c_whystudy.studyimage4.url}`}
              alt={``}
            />
            <Headline
              value={`${document.c_whystudy.title}`}
              textSize="xl"
              fontWeight="medium"
            />
            <Paragraph
              value={`${document.c_whystudy.titleDesc}`}
              textSize="base"
              fontWeight="normal"
            />
          </VStack>
        </GridContainer>
      </GridContainer>
      <HStack>
        <Headline
          value={`${document.c_title_arden}`}
          textSize="xl"
          fontWeight="medium"
        />
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
          alt="Light green backpack with black canvas straps and front zipper pouch."
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
