"use client";
import React from "react";
import Button from "../UI/Button";
import Grid, { GridCell } from "../UI/Grid";
import Typography from "../UI/Typography";
import Link from "next/link";
import { useContributionsReportsConfig } from "@/hooks/useContributionsReportsConfig";
import type { ContributionItem } from "@/types/contributions/reports";

interface ReportsProps {
  activeChain: "arbitrum" | "optimism";
}

export default function Reports({ activeChain }: ReportsProps) {
  const { backgroundImages, textConfig, layoutConfig, contributionsData } =
    useContributionsReportsConfig();
  const contributions = contributionsData[activeChain]?.contributions;
  const items = (contributions?.items as ContributionItem[]) || [];
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
            color={textConfig.header.color as `#${string}` | "yellow"}
            weight={textConfig.header.weight}
            align={textConfig.header.align}
            className={textConfig.header.className}
          >
            {contributions?.header || ""}
          </Typography>
        </div>

        {/* Contribution Items */}
        <div className="">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={layoutConfig.mobile.item.container.className}
            >
              {/* Header Row */}
              <div className={layoutConfig.mobile.item.headerRow.className}>
                {/* Number cell */}
                <div className={layoutConfig.mobile.item.numberCell.className}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url(${backgroundImages.reportsBg.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <Typography
                    variant={textConfig.itemNumber.variant}
                    color={
                      textConfig.itemNumber.color as `#${string}` | "white"
                    }
                    weight={textConfig.itemNumber.weight}
                    className={textConfig.itemNumber.className}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                </div>
                {/* Title cell */}
                <div className={layoutConfig.mobile.item.titleCell.className}>
                  <Typography
                    variant={textConfig.itemTitle.variant}
                    color={textConfig.itemTitle.color as `#${string}` | "white"}
                    weight={textConfig.itemTitle.weight}
                    className={textConfig.itemTitle.className}
                  >
                    {item.title}
                  </Typography>
                </div>
              </div>

              {/* Body */}
              <div className={layoutConfig.mobile.item.body.className}>
                <Typography
                  variant={textConfig.itemDescription.variant}
                  color={
                    textConfig.itemDescription.color as `#${string}` | "white"
                  }
                  weight={textConfig.itemDescription.weight}
                  className={textConfig.itemDescription.className}
                >
                  {item.description}
                </Typography>
                <div>
                  <Link
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      label={item.buttonLabel}
                      color={item.buttonColor}
                      textColor={item.buttonTextColor}
                      className={layoutConfig.mobile.item.button.className}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        {contributions.showSeeMoreButton && (
          <div
            className={layoutConfig.mobile.footer.className}
            style={{
              backgroundColor: layoutConfig.mobile.footer.backgroundColor,
            }}
          >
            <Link
              href="https://lamprosdao.notion.site/arbitrum-contributions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={textConfig.seeMoreButton.label}
                color={textConfig.seeMoreButton.color}
                textColor={textConfig.seeMoreButton.textColor}
              />
            </Link>
          </div>
        )}
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
        <GridCell
          className={layoutConfig.desktop.header.emptyCell1.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.header.titleCell.colSpan}
          className={layoutConfig.desktop.header.titleCell.className}
        >
          <Typography
            variant={textConfig.headerDesktop.variant}
            color={textConfig.headerDesktop.color as `#${string}` | "yellow"}
            weight={textConfig.headerDesktop.weight}
            className={textConfig.headerDesktop.className}
          >
            {contributions?.header || ""}{" "}
          </Typography>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.header.emptyCell2.colStart}
          className={layoutConfig.desktop.header.emptyCell2.className}
        />

        {items
          .map((_, idx) => idx)
          .filter((i) => i % 2 === 0)
          .map((i) => {
            const pairIndex = i / 2;
            const leftItem = items[i];
            const rightItem = items[i + 1];
            const leftNumber = String(i + 1).padStart(2, "0");
            const rightNumber = rightItem
              ? String(i + 2).padStart(2, "0")
              : null;
            const rowBase = 2 + pairIndex * 2;
            return (
              <React.Fragment key={`pair-${i}`}>
                <GridCell
                  key={`num-left-${i}`}
                  rowStart={rowBase}
                  className={layoutConfig.desktop.item.numberCell.className}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${backgroundImages.reportsBg.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <Typography
                    variant={textConfig.itemNumberDesktop.variant}
                    color={
                      textConfig.itemNumberDesktop.color as
                        | `#${string}`
                        | "white"
                    }
                    weight={textConfig.itemNumberDesktop.weight}
                    className={textConfig.itemNumberDesktop.className}
                  >
                    {leftNumber}
                  </Typography>
                </GridCell>
                <GridCell
                  key={`title-left-${i}`}
                  colSpan={layoutConfig.desktop.item.titleCell.colSpan}
                  rowStart={rowBase}
                  className={layoutConfig.desktop.item.titleCell.className}
                >
                  <Typography
                    variant={textConfig.itemTitleDesktop.variant}
                    color={
                      textConfig.itemTitleDesktop.color as
                        | `#${string}`
                        | "white"
                    }
                    weight={textConfig.itemTitleDesktop.weight}
                    className={textConfig.itemTitleDesktop.className}
                  >
                    {leftItem.title}
                  </Typography>
                </GridCell>

                {rightItem && (
                  <GridCell
                    key={`num-right-${i + 1}`}
                    colStart={6}
                    rowStart={rowBase}
                    className={layoutConfig.desktop.item.numberCell.className}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${backgroundImages.reportsBg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <Typography
                      variant={textConfig.itemNumberDesktop.variant}
                      color={
                        textConfig.itemNumberDesktop.color as
                          | `#${string}`
                          | "white"
                      }
                      weight={textConfig.itemNumberDesktop.weight}
                      className={textConfig.itemNumberDesktop.className}
                    >
                      {rightNumber}
                    </Typography>
                  </GridCell>
                )}

                {rightItem && (
                  <GridCell
                    key={`title-right-${i + 1}`}
                    colSpan={layoutConfig.desktop.item.titleCell.colSpan}
                    colStart={7}
                    rowStart={rowBase}
                    className={layoutConfig.desktop.item.titleCell.className}
                  >
                    <Typography
                      variant={textConfig.itemTitleDesktop.variant}
                      color={
                        textConfig.itemTitleDesktop.color as
                          | `#${string}`
                          | "white"
                      }
                      weight={textConfig.itemTitleDesktop.weight}
                      className={textConfig.itemTitleDesktop.className}
                    >
                      {rightItem.title}
                    </Typography>
                  </GridCell>
                )}

                <GridCell
                  key={`spacer-${i}`}
                  rowStart={rowBase + 1}
                  className={layoutConfig.desktop.item.spacerCell.className}
                />
                <GridCell
                  key={`desc-left-${i}`}
                  colSpan={layoutConfig.desktop.item.descriptionCell.colSpan}
                  rowStart={rowBase + 1}
                  className={
                    layoutConfig.desktop.item.descriptionCell.className
                  }
                >
                  <Typography
                    variant={textConfig.itemDescriptionDesktop.variant}
                    color={
                      textConfig.itemDescriptionDesktop.color as
                        | `#${string}`
                        | "white"
                    }
                    weight={textConfig.itemDescriptionDesktop.weight}
                    className={textConfig.itemDescriptionDesktop.className}
                  >
                    {leftItem.description}
                  </Typography>
                  <div>
                    <Link
                      href={leftItem.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        label={leftItem.buttonLabel}
                        color={leftItem.buttonColor}
                        textColor={leftItem.buttonTextColor}
                        className={layoutConfig.desktop.item.button.className}
                      />
                    </Link>
                  </div>
                </GridCell>
                <GridCell
                  key={`desc-spacer-${i}`}
                  colStart={
                    layoutConfig.desktop.item.descriptionSpacerCell.colStart
                  }
                  rowStart={rowBase + 1}
                  className={
                    rightItem ? "border-b border-white" : "border-none"
                  }
                />

                {rightItem && (
                  <GridCell
                    key={`desc-right-${i + 1}`}
                    colSpan={layoutConfig.desktop.item.descriptionCell.colSpan}
                    colStart={7}
                    rowStart={rowBase + 1}
                    className={`${layoutConfig.desktop.item.descriptionCell.className} border-b border-white`}
                  >
                    <Typography
                      variant={textConfig.itemDescriptionDesktop.variant}
                      color={
                        textConfig.itemDescriptionDesktop.color as
                          | `#${string}`
                          | "white"
                      }
                      weight={textConfig.itemDescriptionDesktop.weight}
                      className={textConfig.itemDescriptionDesktop.className}
                    >
                      {rightItem.description}
                    </Typography>
                    <div>
                      <Link
                        href={rightItem.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          label={rightItem.buttonLabel}
                          color={rightItem.buttonColor}
                          textColor={rightItem.buttonTextColor}
                          className={layoutConfig.desktop.item.button.className}
                        />
                      </Link>
                    </div>
                  </GridCell>
                )}
              </React.Fragment>
            );
          })}
        {contributions?.showSeeMoreButton && items.length <= 4 && (
          <GridCell
            colSpan={layoutConfig.desktop.footer.colSpan}
            rowStart={6}
            className={layoutConfig.desktop.footer.className}
            style={{
              backgroundColor: layoutConfig.desktop.footer.backgroundColor,
            }}
          >
            <Link
              href="https://lamprosdao.notion.site/arbitrum-contributions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={textConfig.seeMoreButton.label}
                color={textConfig.seeMoreButton.color}
                textColor={textConfig.seeMoreButton.textColor}
              />
            </Link>
          </GridCell>
        )}
        {contributions?.showSeeMoreButton && items.length > 4 && (
          <GridCell
            colSpan={layoutConfig.desktop.footer.colSpan}
            rowStart={8}
            className={layoutConfig.desktop.footer.className}
            style={{
              backgroundColor: layoutConfig.desktop.footer.backgroundColor,
            }}
          >
            <Link
              href="https://lamprosdao.notion.site/arbitrum-contributions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={textConfig.seeMoreButton.label}
                color={textConfig.seeMoreButton.color}
                textColor={textConfig.seeMoreButton.textColor}
              />
            </Link>
          </GridCell>
        )}
      </Grid>
    </>
  );
}
