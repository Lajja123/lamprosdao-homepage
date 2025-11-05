"use client";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useAboutHeroConfig } from "@/hooks/useAboutHeroConfig";
import AboutTitle from "./AboutTitle";

export default function Hero() {
  const { images, textConfig, visionMissionConfig, layoutConfig } =
    useAboutHeroConfig();

  return (
    <>
      {/* Main About Section */}
      <div className={layoutConfig.main.container.className}>
        {/* Image Section */}
        <div
          className={layoutConfig.main.imageSection.className}
          style={{
            backgroundColor: layoutConfig.main.imageSection.backgroundColor,
          }}
        >
          <Image
            src={images.about.src}
            alt={images.about.alt}
            className={images.about.className}
            quality={images.about.quality}
            width={images.about.width}
            height={images.about.height}
          />
        </div>

        {/* Text Section */}
        <div className={layoutConfig.main.textSection.className}>
          <div className="">
            <Typography
              variant={textConfig.title.variant}
              color={textConfig.title.color as `#${string}` | "primary"}
              weight={textConfig.title.weight}
              align={textConfig.title.align}
              className={textConfig.title.className}
            >
              <AboutTitle
                text={textConfig.title.text}
                wavyLetters={
                  textConfig.title.wavyLetter
                    ? [textConfig.title.wavyLetter]
                    : undefined
                }
              />
            </Typography>
            <Typography
              variant={textConfig.variant}
              color={textConfig.color as `#${string}` | "primary"}
              weight={textConfig.weight}
              className={textConfig.className}
            >
              {textConfig.paragraphs.map((paragraph, index) => (
                <div
                  key={`paragraph-${index}`}
                  className={index > 0 ? "mt-3 md:mt-4" : ""}
                >
                  {paragraph}
                </div>
              ))}
            </Typography>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div
        className={layoutConfig.visionMission.container.className}
        style={{
          backgroundColor: layoutConfig.visionMission.container.backgroundColor,
        }}
      >
        {/* Mobile Layout */}
        <div className={layoutConfig.visionMission.mobile.container.className}>
          {/* Vision Section */}
          <div className={layoutConfig.visionMission.mobile.section.className}>
            <div
              className={layoutConfig.visionMission.mobile.titleCell.className}
            >
              <Typography
                variant="h3"
                weight="semibold"
                align="center"
                color={
                  visionMissionConfig.titleColor as `#${string}` | "offset"
                }
                className={visionMissionConfig.titleClassName}
              >
                <AboutTitle
                  text={visionMissionConfig.vision.title.text}
                  wavyLetters={visionMissionConfig.vision.title.wavyLetters}
                />
              </Typography>
            </div>
            <div
              className={layoutConfig.visionMission.mobile.imageCell.className}
            >
              <Image
                src={images.vision.src}
                alt={images.vision.alt}
                quality={images.vision.quality}
                className={images.vision.className}
                width={images.vision.width}
                height={images.vision.height}
              />
            </div>
            <div
              className={
                layoutConfig.visionMission.mobile.descriptionCell.className
              }
            >
              <Typography
                variant="body2"
                color={
                  visionMissionConfig.descriptionColor as `#${string}` | "white"
                }
                weight="normal"
                align="center"
                className={visionMissionConfig.descriptionClassName}
              >
                {visionMissionConfig.vision.description}
              </Typography>
            </div>
          </div>

          {/* Mission Section */}
          <div className={layoutConfig.visionMission.mobile.section.className}>
            <div
              className={layoutConfig.visionMission.mobile.imageCell.className}
            >
              <Image
                src={images.mission.src}
                alt={images.mission.alt}
                quality={images.mission.quality}
                className={images.mission.className}
                width={images.mission.width}
                height={images.mission.height}
              />
            </div>
            <div
              className={layoutConfig.visionMission.mobile.titleCell.className}
            >
              <Typography
                variant="h3"
                weight="semibold"
                align="center"
                color={
                  visionMissionConfig.titleColor as `#${string}` | "offset"
                }
                className={visionMissionConfig.titleClassName}
              >
                <AboutTitle
                  text={visionMissionConfig.mission.title.text}
                  wavyLetters={visionMissionConfig.mission.title.wavyLetters}
                />
              </Typography>
            </div>
            <div
              className={
                layoutConfig.visionMission.mobile.descriptionCell.className
              }
            >
              <Typography
                variant="body2"
                color={
                  visionMissionConfig.descriptionColor as `#${string}` | "white"
                }
                weight="normal"
                align="center"
                className={`${visionMissionConfig.descriptionClassName} leading-[0.90]`}
              >
                {visionMissionConfig.mission.description}
              </Typography>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <Grid
          variant="custom"
          noContainer
          className={layoutConfig.visionMission.desktop.grid.className}
        >
          <GridCell
            className={
              layoutConfig.visionMission.desktop.decorativeCell.className
            }
          >
            <div
              className="w-full h-full"
              style={{
                backgroundColor:
                  layoutConfig.visionMission.desktop.decorativeCell
                    .backgroundColor,
              }}
            />
          </GridCell>
          <GridCell
            colSpan={4}
            className={`${layoutConfig.visionMission.desktop.titleCell.className} p-5`}
          >
            <Typography
              variant="h3"
              weight="semibold"
              align="center"
              color={visionMissionConfig.titleColor as `#${string}` | "offset"}
              className={visionMissionConfig.titleClassName}
            >
              <AboutTitle
                text={visionMissionConfig.vision.title.text}
                wavyLetters={visionMissionConfig.vision.title.wavyLetters}
              />
            </Typography>
          </GridCell>
          <GridCell
            colSpan={4}
            rowSpan={3}
            colStart={6}
            className={layoutConfig.visionMission.desktop.imageCell.className}
          >
            <Image
              src={images.visionDesktop.src}
              alt={images.visionDesktop.alt}
              quality={images.visionDesktop.quality}
              className={images.visionDesktop.className}
              width={images.visionDesktop.width}
              height={images.visionDesktop.height}
            />
          </GridCell>
          <GridCell
            rowSpan={3}
            colStart={10}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-[#FFFFFF]`}
          />
          <GridCell
            rowSpan={2}
            rowStart={2}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-white`}
          />
          <GridCell
            colSpan={4}
            rowSpan={2}
            rowStart={2}
            className={`${layoutConfig.visionMission.desktop.descriptionCell.className} border border-[#FFFFFF]`}
          >
            <Typography
              variant="body2"
              color={
                visionMissionConfig.descriptionColor as `#${string}` | "white"
              }
              weight="normal"
              className="tracking-wider font-ppmori text-xl leading-1.5 p-10"
            >
              {visionMissionConfig.vision.description}
            </Typography>
          </GridCell>
          <GridCell
            rowSpan={3}
            rowStart={4}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-[#FFFFFF]`}
          />
          <GridCell
            colSpan={4}
            rowSpan={3}
            rowStart={4}
            className={layoutConfig.visionMission.desktop.imageCell.className}
          >
            <Image
              src={images.missionDesktop.src}
              alt={images.missionDesktop.alt}
              quality={images.missionDesktop.quality}
              className={images.missionDesktop.className}
              width={images.missionDesktop.width}
              height={images.missionDesktop.height}
            />
          </GridCell>
          <GridCell
            colSpan={4}
            colStart={6}
            rowStart={4}
            className={`${layoutConfig.visionMission.desktop.missionTitleCell.className} p-5`}
          >
            <Typography
              variant="h3"
              weight="semibold"
              align="center"
              color={visionMissionConfig.titleColor as `#${string}` | "offset"}
              className={visionMissionConfig.titleClassName}
            >
              <AboutTitle
                text={visionMissionConfig.mission.title.text}
                wavyLetters={visionMissionConfig.mission.title.wavyLetters}
              />
            </Typography>
          </GridCell>
          <GridCell
            colSpan={4}
            rowSpan={2}
            colStart={6}
            rowStart={5}
            className={`${layoutConfig.visionMission.desktop.missionDescriptionCell.className} border border-[#FFFFFF]`}
          >
            <Typography
              variant="body2"
              color={
                visionMissionConfig.descriptionColor as `#${string}` | "white"
              }
              weight="normal"
              className="tracking-wider font-ppmori leading-[0.90] p-10"
            >
              {visionMissionConfig.mission.description}
            </Typography>
          </GridCell>
          <GridCell
            colStart={10}
            rowStart={4}
            className={`${layoutConfig.visionMission.desktop.decorativeCell.className} border border-[#FFFFFF]`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundColor:
                  layoutConfig.visionMission.desktop.decorativeCell
                    .backgroundColor,
              }}
            />
          </GridCell>
          <GridCell
            rowSpan={2}
            colStart={10}
            rowStart={5}
            className={`${layoutConfig.visionMission.desktop.emptyCell.className} border border-[#FFFFFF]`}
          />
        </Grid>
      </div>
    </>
  );
}
