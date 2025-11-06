"use client";
import Typography from "../UI/Typography";
import Image from "next/image";
import Link from "next/link";
import Grid, { GridCell } from "../UI/Grid";
import { useSmoothScrollOnLoad } from "@/hooks/smoothScrollToSection";
import { useDelegateConfig } from "@/hooks/useDelegateConfig";

export default function Delegate() {
  useSmoothScrollOnLoad();
  const { images, protocols, textConfig, layoutConfig } = useDelegateConfig();
  return (
    <>
      {/* Mobile Layout */}
      <div
        className={layoutConfig.mobile.container.className}
        style={{
          backgroundColor: layoutConfig.mobile.container.backgroundColor,
        }}
      >
        {/* Image Section */}
        <div className={layoutConfig.mobile.imageSection.className}>
          <Image
            src={images.delegate.src}
            alt={images.delegate.alt}
            className={images.delegate.className}
            quality={images.delegate.quality}
          />
        </div>
        {/* Header Section */}
        <div className={layoutConfig.mobile.headerSection.className}>
          <Typography
            variant={textConfig.title.variant}
            color={textConfig.title.color as `#${string}` | "white"}
            className={textConfig.title.className}
          >
            {"Delegate to".split("").map((letter, index) => {
              const isHighlighted = textConfig.title.wavyLetters.some(
                (w) => w.position === index + 1
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
            <br />
            {"Lampros DAO".split("").map((letter, index) => {
              const offset = "Delegate to ".length;
              const isHighlighted = textConfig.title.wavyLetters.some(
                (w) => w.position === offset + index + 1
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
          </Typography>
        </div>

        {/* Description Section */}
        <div className={layoutConfig.mobile.descriptionSection.className}>
          <div className="space-y-4">
            {textConfig.descriptions.map((description, index) => (
              <Typography
                key={index}
                variant={textConfig.description.variant}
                color={textConfig.description.color as `#${string}` | "white"}
                weight={textConfig.description.weight}
                align={textConfig.description.align}
                className={textConfig.description.className}
              >
                {description}
              </Typography>
            ))}
          </div>
        </div>

        {/* Delegation Buttons */}
        <div className="">
          <div className={layoutConfig.mobile.buttonsGrid.className}>
            {protocols.map((protocol, index) => {
              const isFirstRow = index < 2;
              const isLeft = index % 2 === 0;
              return (
                <Link
                  key={protocol.name}
                  href={protocol.href}
                  target="_blank"
                  className={`${layoutConfig.mobile.buttonCell.className} border ${
                    isLeft ? "border-r" : ""
                  } ${isFirstRow ? "border-b" : ""} border-white`}
                  style={{
                    backgroundColor:
                      layoutConfig.mobile.buttonCell.backgroundColor,
                  }}
                >
                  <Image
                    src={protocol.img}
                    alt={protocol.alt}
                    className="w-8 md:w-10"
                  />
                  <Typography
                    variant={textConfig.protocolButton.variant}
                    color={
                      textConfig.protocolButton.color as `#${string}` | "white"
                    }
                    weight={textConfig.protocolButton.weight}
                    className={textConfig.protocolButton.className}
                  >
                    {protocol.name}
                  </Typography>
                </Link>
              );
            })}
            {/* Empty cell for bottom-right */}
            <div
              className={`${layoutConfig.mobile.buttonCell.className} border border-l-0 border-t-0 border-white`}
              style={{
                backgroundColor: layoutConfig.mobile.buttonCell.backgroundColor,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <Grid
        id="delegate"
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
        style={{
          backgroundColor: layoutConfig.desktop.grid.backgroundColor,
        }}
      >
        <GridCell
          colSpan={1}
          className={layoutConfig.desktop.emptyCell1.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.titleCell.colSpan}
          className={layoutConfig.desktop.titleCell.className}
        >
          <Typography
            variant={textConfig.titleDesktop.variant}
            color={textConfig.titleDesktop.color as `#${string}` | "white"}
            className={textConfig.titleDesktop.className}
          >
            {textConfig.titleDesktop.text.split("").map((letter, index) => {
              const isHighlighted = textConfig.titleDesktop.wavyLetters.some(
                (w) => w.position === index + 1
              );
              return (
                <span
                  key={index}
                  className={
                    isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                  }
                >
                  {letter}
                </span>
              );
            })}
          </Typography>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.emptyCell2.colStart}
          colSpan={1}
          className={layoutConfig.desktop.emptyCell2.className}
        />

        <GridCell
          rowSpan={layoutConfig.desktop.verticalTextCell.rowSpan}
          rowStart={layoutConfig.desktop.verticalTextCell.rowStart}
          colSpan={layoutConfig.desktop.verticalTextCell.colSpan}
          className={layoutConfig.desktop.verticalTextCell.className}
        >
          <Typography
            variant={textConfig.verticalText.variant}
            color={textConfig.verticalText.color as `#${string}` | "white"}
            weight={textConfig.verticalText.weight}
            className={textConfig.verticalText.className}
          >
            {textConfig.verticalText.text}
          </Typography>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.descriptionCell.colSpan}
          rowSpan={layoutConfig.desktop.descriptionCell.rowSpan}
          rowStart={layoutConfig.desktop.descriptionCell.rowStart}
          className={layoutConfig.desktop.descriptionCell.className}
        >
          {textConfig.descriptions.map((description, index) => (
            <Typography
              key={index}
              variant={textConfig.descriptionDesktop.variant}
              color={
                textConfig.descriptionDesktop.color as `#${string}` | "white"
              }
              weight={textConfig.descriptionDesktop.weight}
              className={textConfig.descriptionDesktop.className}
            >
              {description}
            </Typography>
          ))}
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.imageCell.colSpan}
          rowSpan={layoutConfig.desktop.imageCell.rowSpan}
          colStart={layoutConfig.desktop.imageCell.colStart}
          rowStart={layoutConfig.desktop.imageCell.rowStart}
          className={layoutConfig.desktop.imageCell.className}
        >
          <Image
            src={images.delegateDesktop.src}
            alt={images.delegateDesktop.alt}
            className={images.delegateDesktop.className}
            quality={images.delegateDesktop.quality}
          />
        </GridCell>
        <GridCell
          rowSpan={layoutConfig.desktop.accentCell.rowSpan}
          colStart={layoutConfig.desktop.accentCell.colStart}
          rowStart={layoutConfig.desktop.accentCell.rowStart}
          colSpan={layoutConfig.desktop.accentCell.colSpan}
          className={layoutConfig.desktop.accentCell.className}
          style={{
            backgroundColor: layoutConfig.desktop.accentCell.backgroundColor,
          }}
        />
        {/* Infinite scrolling row - all platforms in one */}
        <GridCell
          colSpan={layoutConfig.desktop.scrollRow.colSpan}
          colStart={layoutConfig.desktop.scrollRow.colStart}
          rowStart={layoutConfig.desktop.scrollRow.rowStart}
          className={layoutConfig.desktop.scrollRow.className}
          style={{
            backgroundColor: layoutConfig.desktop.scrollRow.backgroundColor,
          }}
        >
          <div className="w-full relative">
            <div className="animate-scroll w-max flex py-5 items-center">
              {/* Continuous loop - duplicated array multiple times for seamless scrolling */}
              {[...protocols, ...protocols, ...protocols].map((p, idx) => (
                <div
                  key={`${p.name}-${idx}`}
                  className="relative group flex items-center gap-3 flex-shrink-0 px-12"
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    className="w-10 flex-shrink-0"
                  />
                  <Link href={p.href} target="_blank" className="flex-shrink-0">
                    <Typography
                      variant={textConfig.protocolButtonDesktop.variant}
                      color={
                        textConfig.protocolButtonDesktop.color as
                          | `#${string}`
                          | "primary"
                      }
                      weight={textConfig.protocolButtonDesktop.weight}
                      className={textConfig.protocolButtonDesktop.className}
                    >
                      {p.name}
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.footerCell.colSpan}
          rowStart={layoutConfig.desktop.footerCell.rowStart}
          className={layoutConfig.desktop.footerCell.className}
          style={{
            backgroundColor: layoutConfig.desktop.footerCell.backgroundColor,
          }}
        />
      </Grid>
    </>
  );
}
