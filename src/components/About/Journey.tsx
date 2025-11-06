"use client";
import React from "react";
import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useJourneyConfig } from "@/hooks/useJourneyConfig";
import JourneyTitle from "./JourneyTitle";

export default function Journey() {
  const {
    journeyData,
    images,
    textConfig,
    layoutConfig,
    desktopItemPositions,
  } = useJourneyConfig();

  return (
    <>
      {/* Mobile Layout */}
      <div
        className={layoutConfig.mobile.container.className}
        style={{
          backgroundColor: layoutConfig.mobile.container.backgroundColor,
        }}
      >
        {/* Header Section */}
        <div className={layoutConfig.mobile.header.className}>
          <Typography
            variant={textConfig.header.variant}
            color={textConfig.header.color as `#${string}` | "white"}
            className={`${textConfig.header.className} text-center`}
            align="center"
          >
            <JourneyTitle
              text={textConfig.header.title.text}
              wavyLetters={textConfig.header.title.wavyLetters}
            />
          </Typography>
        </div>

        {/* Journey Items */}
        {journeyData.map((item, index) => (
          <div
            key={index}
            className={layoutConfig.mobile.item.container.className}
          >
            <div className="flex">
              {index % 2 === 0 ? (
                <>
                  <div
                    className={layoutConfig.mobile.item.contentCell.className}
                    style={{
                      backgroundColor:
                        layoutConfig.mobile.item.contentCell.backgroundColor,
                    }}
                  >
                    <Typography
                      variant={textConfig.itemDate.variant}
                      color={
                        textConfig.itemDate.color as `#${string}` | "white"
                      }
                      weight={textConfig.itemDate.weight}
                      className={`${textConfig.itemDate.className} text-sm md:text-base mb-2`}
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant={textConfig.itemTitle.variant}
                      color={
                        textConfig.itemTitle.color as `#${string}` | "white"
                      }
                      weight={textConfig.itemTitle.weight}
                      className={`${textConfig.itemTitle.className} text-sm md:text-base leading-relaxed`}
                    >
                      {item.title}
                    </Typography>
                  </div>
                  <div
                    className={`${layoutConfig.mobile.item.numberCell.className} border-l border-white`}
                    style={{ backgroundColor: item.color }}
                  >
                    <Typography
                      variant={textConfig.itemNumber.variant}
                      color={
                        textConfig.itemNumber.color as `#${string}` | "primary"
                      }
                      weight={textConfig.itemNumber.weight}
                      className={`${textConfig.itemNumber.className} text-2xl md:text-3xl`}
                    >
                      {item.number}
                    </Typography>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`${layoutConfig.mobile.item.numberCell.className} border-r border-white`}
                    style={{ backgroundColor: item.color }}
                  >
                    <Typography
                      variant={textConfig.itemNumber.variant}
                      color={
                        textConfig.itemNumber.color as `#${string}` | "primary"
                      }
                      weight={textConfig.itemNumber.weight}
                      className={`${textConfig.itemNumber.className} text-2xl md:text-3xl`}
                    >
                      {item.number}
                    </Typography>
                  </div>
                  <div
                    className={`${layoutConfig.mobile.item.contentCell.className} text-left`}
                    style={{
                      backgroundColor:
                        layoutConfig.mobile.item.contentCell.backgroundColor,
                    }}
                  >
                    <Typography
                      variant={textConfig.itemDate.variant}
                      color={
                        textConfig.itemDate.color as `#${string}` | "white"
                      }
                      weight={textConfig.itemDate.weight}
                      className={`${textConfig.itemDate.className} text-sm md:text-base mb-2`}
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant={textConfig.itemTitle.variant}
                      color={
                        textConfig.itemTitle.color as `#${string}` | "white"
                      }
                      weight={textConfig.itemTitle.weight}
                      className={`${textConfig.itemTitle.className} text-sm md:text-base leading-relaxed`}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
        style={{
          backgroundColor: layoutConfig.desktop.grid.backgroundColor,
        }}
      >
        {/* Empty cell left border */}
        <GridCell
          rowSpan={9}
          className={layoutConfig.desktop.header.emptyCell.className}
        />

        {/* Header Title */}
        <GridCell
          colSpan={8}
          colStart={2}
          rowStart={1}
          className={layoutConfig.desktop.header.titleCell.className}
        >
          <Typography
            variant={textConfig.header.variant}
            color={textConfig.header.color as `#${string}` | "white"}
            className={textConfig.header.className}
          >
            <JourneyTitle
              text={textConfig.header.title.text}
              wavyLetters={textConfig.header.title.wavyLetters}
            />
          </Typography>
        </GridCell>

        {/* Empty cell right border */}
        <GridCell
          rowSpan={9}
          colStart={10}
          rowStart={1}
          className={layoutConfig.desktop.header.emptyCell.className}
        />

        {/* Journey Items */}
        {journeyData.map((item, index) => {
          const positions = desktopItemPositions[index];
          return (
            <React.Fragment key={index}>
              {/* Image Cell (if exists) */}
              {positions.image && (
                <GridCell
                  colSpan={positions.image.colSpan}
                  rowSpan={positions.image.rowSpan}
                  colStart={positions.image.colStart}
                  rowStart={positions.image.rowStart}
                  className={layoutConfig.desktop.item.imageCell.className}
                >
          <Image
                    src={
                      index < 2
                        ? images.web12.src
                        : index < 4
                          ? images.web34.src
                          : index < 6
                            ? images.web56.src
                            : images.web78.src
                    }
                    alt={
                      index < 2
                        ? images.web12.alt
                        : index < 4
                          ? images.web34.alt
                          : index < 6
                            ? images.web56.alt
                            : images.web78.alt
                    }
                    className={
                      index < 2
                        ? images.web12.className
                        : index < 4
                          ? images.web34.className
                          : index < 6
                            ? images.web56.className
                            : images.web78.className
                    }
                    width={
                      index < 2
                        ? images.web12.width
                        : index < 4
                          ? images.web34.width
                          : index < 6
                            ? images.web56.width
                            : images.web78.width
                    }
                    height={
                      index < 2
                        ? images.web12.height
                        : index < 4
                          ? images.web34.height
                          : index < 6
                            ? images.web56.height
                            : images.web78.height
                    }
          />
                </GridCell>
              )}

              {/* Content Cell */}
              {positions.content && (
                <GridCell
                  colSpan={positions.content.colSpan}
                  colStart={positions.content.colStart}
                  rowStart={positions.content.rowStart}
                  className={layoutConfig.desktop.item.contentCell.className}
        >
          <Typography
                    variant={textConfig.itemDate.variant}
                    color={textConfig.itemDate.color as `#${string}` | "white"}
                    weight={textConfig.itemDate.weight}
                    className={textConfig.itemDate.className}
          >
                    {item.date}
          </Typography>
          <Typography
                    variant={textConfig.itemTitle.variant}
                    color={textConfig.itemTitle.color as `#${string}` | "white"}
                    weight={textConfig.itemTitle.weight}
                    className={textConfig.itemTitle.className}
          >
                    {item.title}
          </Typography>
                </GridCell>
              )}

              {/* Number Cell */}
              {positions.number && (
                <GridCell
                  colStart={positions.number.colStart}
                  rowStart={positions.number.rowStart}
                  className={layoutConfig.desktop.item.numberCell.className}
                  style={{ backgroundColor: item.color }}
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
                </GridCell>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </>
  );
}
