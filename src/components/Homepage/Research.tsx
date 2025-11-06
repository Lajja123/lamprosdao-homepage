"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import Arrow from "../UI/Arrow";
import Grid, { GridCell } from "@/components/UI/Grid";
import researchContent from "@/data/researchContent.json";
import { useResearchConfig } from "@/hooks/useResearchConfig";
import ResearchTitle from "./ResearchTitle";

export default function Research() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { researchItems } = researchContent;
  const currentItem = researchItems[currentIndex];

  const {
    images,
    backgroundImages,
    textConfig,
    buttonConfig,
    arrowConfig,
    titleWavyConfigs,
    layoutConfig,
  } = useResearchConfig();

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? researchItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === researchItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentWavyConfig = titleWavyConfigs[currentItem.title.trim()];

  return (
    <div
      className={layoutConfig.desktop.container.className}
      style={{
        backgroundColor: layoutConfig.desktop.container.backgroundColor,
      }}
    >
      {/* Desktop Layout - Original research grid */}
      <div className={layoutConfig.desktop.grid.className}>
        <Grid variant="research" className="relative w-full">
          {/* Main image - spans 3 columns, 5 rows */}
          <GridCell type="researchImage">
            <Image
              src={images.clip.src}
              alt={images.clip.alt}
              className={images.clip.className}
              width={images.clip.width}
              height={images.clip.height}
            />
          </GridCell>

          {/* Content section - spans 3 columns, 4 rows */}
          <GridCell type="researchContent">
            <div className={layoutConfig.desktop.contentCell.className}>
              <div>
                <Typography
                  variant="h2"
                  weight="normal"
                  align="left"
                  color={textConfig.titleColor as `#${string}`}
                  className={textConfig.titleClassName}
                >
                  <ResearchTitle
                    title={currentItem.title}
                    wavyConfig={currentWavyConfig}
                  />
                </Typography>
              </div>

              <div>
                <Typography
                  variant="subtitle2"
                  weight="normal"
                  color={textConfig.descriptionColor as `#${string}`}
                  className={textConfig.descriptionClassName}
                >
                  {currentItem.description}
                </Typography>
              </div>

              <div>
                <Link
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    label={buttonConfig.label}
                    color={buttonConfig.color}
                    textColor={buttonConfig.textColor}
                  />
                </Link>
              </div>
            </div>
          </GridCell>

          {/* Arrow cell - row 5, column 4 */}
          <GridCell
            type="researchIcon"
            className={layoutConfig.desktop.iconCell.className}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <button
              onClick={handlePrevious}
              className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
            >
              <Arrow
                direction="left"
                size={arrowConfig.desktop.size}
                hoverScale={arrowConfig.desktop.hoverScale}
                hoverColor={arrowConfig.desktop.hoverColor}
                className={arrowConfig.desktop.className}
              />
            </button>
          </GridCell>

          {/* Clip2 image - row 5, column 5 */}
          <GridCell type="researchIcon" className="col-start-5 row-start-5 p-5">
            <div>
              <Image
                src={images.clip2.src}
                alt={images.clip2.alt}
                className={images.clip2.className}
                width={images.clip2.width}
                height={images.clip2.height}
              />
            </div>
          </GridCell>

          {/* Arrow right - row 5, column 6 */}
          <GridCell
            type="researchIcon"
            className="col-start-6 row-start-5 relative overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <button
              onClick={handleNext}
              className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden group"
            >
              <Arrow
                direction="right"
                size={arrowConfig.desktop.size}
                hoverScale={arrowConfig.desktop.hoverScale}
                hoverColor={arrowConfig.desktop.hoverColor}
                className={arrowConfig.desktop.className}
              />
            </button>
          </GridCell>
        </Grid>
      </div>

      {/* Mobile Layout - Grid-like structure */}
      <div className="lg:hidden">
        <div className={layoutConfig.mobile.grid.className}>
          <div className="min-w-[320px] grid grid-cols-3 border border-white">
            <GridCell
              type="researchImage"
              className={layoutConfig.mobile.imageCell.className}
            >
              <Image
                src={images.clipMobile.src}
                alt={images.clipMobile.alt}
                className={images.clipMobile.className}
                width={images.clipMobile.width}
                height={images.clipMobile.height}
              />
            </GridCell>
            {/* Row 1 - Main content spanning all columns */}
            <div className={layoutConfig.mobile.contentCell.className}>
              <div className="space-y-6 sm:space-y-8 py-8 sm:py-12">
                <div>
                  <Typography
                    variant="h2"
                    weight="normal"
                    align="center"
                    color={textConfig.titleColor as `#${string}`}
                    className="uppercase"
                  >
                    <ResearchTitle
                      title={currentItem.title}
                      wavyConfig={currentWavyConfig}
                    />
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="subtitle2"
                    weight="normal"
                    color={textConfig.descriptionColor as `#${string}`}
                    align="center"
                  >
                    {currentItem.description}
                  </Typography>
                </div>

                <div className="flex justify-center sm:justify-start">
                  <Link
                    href={currentItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label={buttonConfig.label}
                      color={buttonConfig.color}
                      textColor={buttonConfig.textColor}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2 - Navigation controls in grid format */}
            <div className={layoutConfig.mobile.navigationCell.className}>
              {/* Left arrow */}
              <div className="col-span-1 border border-white relative min-h-[80px] flex items-center justify-center">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <button
                  onClick={handlePrevious}
                  className="w-full h-full flex items-center justify-center group"
                >
                  <Arrow
                    direction="left"
                    size={arrowConfig.mobile.size}
                    hoverScale={arrowConfig.mobile.hoverScale}
                    hoverColor={arrowConfig.mobile.hoverColor}
                    transitionDuration={arrowConfig.mobile.transitionDuration}
                    className={arrowConfig.mobile.className}
                  />
                </button>
              </div>

              {/* Clip2 image - center */}
              <div className="col-span-1 border border-white flex items-center justify-center p-5">
                <Image
                  src={images.clip2Mobile.src}
                  alt={images.clip2Mobile.alt}
                  className={images.clip2Mobile.className}
                  width={images.clip2Mobile.width}
                  height={images.clip2Mobile.height}
                />
              </div>

              {/* Right arrow */}
              <div className="col-span-1 border border-white relative min-h-[80px] flex items-center justify-center">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <button
                  onClick={handleNext}
                  className="w-full h-full flex items-center justify-center group"
                >
                  <Arrow
                    direction="right"
                    size={arrowConfig.mobile.size}
                    hoverScale={arrowConfig.mobile.hoverScale}
                    hoverColor={arrowConfig.mobile.hoverColor}
                    transitionDuration={arrowConfig.mobile.transitionDuration}
                    className={arrowConfig.mobile.className}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
