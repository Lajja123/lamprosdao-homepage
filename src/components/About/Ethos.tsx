"use client";
import Image from "next/image";
import { Fragment } from "react";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useEthosConfig } from "@/hooks/useEthosConfig";
import AboutTitle from "./AboutTitle";

export default function Ethos() {
  const { ethosData, images, textConfig, layoutConfig, desktopItemPositions } =
    useEthosConfig();

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header Section */}
        <div
          className={layoutConfig.mobile.header.container.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.header.container.backgroundColor,
          }}
        >
          <div className={layoutConfig.mobile.header.titleContainer.className}>
            <Typography
              variant={textConfig.header.variant}
              color={textConfig.header.color as `#${string}` | "primary"}
              weight={textConfig.header.weight}
              className={textConfig.header.className}
            >
              <AboutTitle
                text={textConfig.header.title.firstLine.text}
                wavyLetters={textConfig.header.title.firstLine.wavyLetters}
              />
              <br />
              <AboutTitle
                text={textConfig.header.title.secondLine.text}
                wavyLetters={textConfig.header.title.secondLine.wavyLetters}
              />
            </Typography>
            <Image
              src={images.ethos.src}
              alt={images.ethos.alt}
              className={images.ethos.className}
              width={images.ethos.width}
              height={images.ethos.height}
            />
          </div>
        </div>

        {/* Ethos Items */}
        {ethosData.map((item, index) => (
          <div
            key={index}
            className={layoutConfig.mobile.item.container.className}
          >
            {/* Header: title left, number right in yellow strip */}
            <div className={layoutConfig.mobile.item.header.className}>
              <div className={layoutConfig.mobile.item.titleCell.className}>
                <Typography
                  variant={textConfig.itemTitle.variant}
                  color={textConfig.itemTitle.color as `#${string}` | "primary"}
                  weight={textConfig.itemTitle.weight}
                  className={textConfig.itemTitle.className}
                >
                  {item.title}
                </Typography>
              </div>
              <div
                className={layoutConfig.mobile.item.numberCell.className}
                style={{
                  backgroundColor:
                    layoutConfig.mobile.item.numberCell.backgroundColor,
                }}
              >
                <Typography
                  variant={textConfig.itemNumber.variant}
                  color={
                    textConfig.itemNumber.color as `#${string}` | "primary"
                  }
                  weight={textConfig.itemNumber.weight}
                  className={textConfig.itemNumber.className}
                >
                  {item.number}
                </Typography>
              </div>
            </div>
            {/* Body: content full width */}
            <div className={layoutConfig.mobile.item.contentCell.className}>
              <Typography
                variant={textConfig.itemContent.variant}
                color={textConfig.itemContent.color as `#${string}` | "primary"}
                weight={textConfig.itemContent.weight}
                className={textConfig.itemContent.className}
              >
                {item.content}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
      >
        {/* Header Section */}
        <GridCell
          colSpan={5}
          rowSpan={3}
          className={`${layoutConfig.desktop.header.container.className} relative`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor:
                layoutConfig.desktop.header.container.backgroundColor,
            }}
          />
          <div className="relative z-10 flex flex-row justify-center gap-3 items-center w-full h-full">
            <div
              className={layoutConfig.desktop.header.titleContainer.className}
            >
              <Typography
                variant={textConfig.header.variant}
                color={textConfig.header.color as `#${string}` | "primary"}
                weight={textConfig.header.weight}
                className="leading-none font-csbohemian tracking-wider"
              >
                <AboutTitle
                  text={textConfig.header.title.firstLine.text}
                  wavyLetters={textConfig.header.title.firstLine.wavyLetters}
                />
                <br />
                <AboutTitle
                  text={textConfig.header.title.secondLine.text}
                  wavyLetters={textConfig.header.title.secondLine.wavyLetters}
                />
              </Typography>
            </div>
            <div
              className={layoutConfig.desktop.header.imageContainer.className}
            >
              <Image
                src={images.ethosDesktop.src}
                alt={images.ethosDesktop.alt}
                className={images.ethosDesktop.className}
                width={images.ethosDesktop.width}
                height={images.ethosDesktop.height}
              />
            </div>
          </div>
        </GridCell>

        {/* Ethos Items */}
        {ethosData.map((item, index) => {
          const positions = desktopItemPositions[index];
          return (
            <Fragment key={index}>
              {/* Title Cell */}
              <GridCell
                colSpan={positions.title.colSpan}
                colStart={positions.title.colStart}
                rowStart={positions.title.rowStart}
                className={layoutConfig.desktop.item.titleCell.className}
              >
                <Typography
                  variant={textConfig.itemTitle.variant}
                  color={textConfig.itemTitle.color as `#${string}` | "primary"}
                  weight={textConfig.itemTitle.weight}
                  className="uppercase tracking-wider font-ppmori max-w-[500px]"
                >
                  {item.title}
                </Typography>
              </GridCell>

              {/* Number Cell */}
              <GridCell
                colStart={positions.number.colStart}
                rowStart={positions.number.rowStart}
                className={`${layoutConfig.desktop.item.numberCell.className} relative`}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor:
                      layoutConfig.desktop.item.numberCell.backgroundColor,
                  }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Typography
                    variant={textConfig.itemNumber.variant}
                    color={
                      textConfig.itemNumber.color as `#${string}` | "primary"
                    }
                    weight={textConfig.itemNumber.weight}
                    className="font-psygen"
                  >
                    {item.number}
                  </Typography>
                </div>
              </GridCell>

              {/* Content Cell */}
              <GridCell
                colSpan={positions.content.colSpan}
                rowSpan={positions.content.rowSpan}
                colStart={positions.content.colStart}
                rowStart={positions.content.rowStart}
                className={layoutConfig.desktop.item.contentCell.className}
              >
                <Typography
                  variant={textConfig.itemContent.variant}
                  color={
                    textConfig.itemContent.color as `#${string}` | "primary"
                  }
                  weight={textConfig.itemContent.weight}
                  className="font-ppmori max-w-[700px]"
                >
                  {item.content}
                </Typography>
              </GridCell>
            </Fragment>
          );
        })}
      </Grid>
    </>
  );
}
