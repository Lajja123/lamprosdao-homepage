"use client";
import Image from "next/image";
import Typography from "../UI/Typography";
import Link from "next/link";
import Grid, { GridCell } from "../UI/Grid";
import { useGovernanceHeroConfig } from "@/hooks/useGovernanceHeroConfig";

export default function Hero() {
  const { images, teamMembers, delegations, textConfig, layoutConfig } =
    useGovernanceHeroConfig();

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Main Content Section */}
        <div className={layoutConfig.mobile.mainContent.container.className}>
          <div
            className={layoutConfig.mobile.mainContent.titleSection.className}
            style={{
              backgroundColor:
                layoutConfig.mobile.mainContent.titleSection.backgroundColor,
            }}
          >
            <Typography
              variant={textConfig.title.variant}
              weight={textConfig.title.weight}
              align={textConfig.title.align}
              color={textConfig.title.color as `#${string}` | "light-purple"}
              className={textConfig.title.className}
            >
              {textConfig.title.text.split("").map((letter, index) => {
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
            </Typography>
            {/* Image Section */}
            <div
              className={layoutConfig.mobile.mainContent.imageSection.className}
            >
              <Image
                src={images.clip.src}
                alt={images.clip.alt}
                quality={images.clip.quality}
                className={images.clip.className}
              />
            </div>
          </div>
          {/* Text Section */}
          <div
            className={layoutConfig.mobile.mainContent.textSection.className}
          >
            <Typography
              variant={textConfig.description.variant}
              color={textConfig.description.color as `#${string}` | "primary"}
              weight={textConfig.description.weight}
              align={textConfig.description.align}
              className={textConfig.description.className}
            >
              {textConfig.description.text}
            </Typography>
          </div>

          {/* Team Section */}
          <div
            className={layoutConfig.mobile.mainContent.teamHeader.className}
            style={{
              backgroundColor:
                layoutConfig.mobile.mainContent.teamHeader.backgroundColor,
            }}
          >
            <Typography
              variant={textConfig.teamHeader.variant}
              color={textConfig.teamHeader.color as `#${string}` | "primary"}
              weight={textConfig.teamHeader.weight}
              className={textConfig.teamHeader.className}
            >
              {textConfig.teamHeader.text}
            </Typography>
          </div>

          {/* Team Members */}
          <div className={layoutConfig.mobile.mainContent.teamGrid.className}>
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  layoutConfig.mobile.mainContent.teamMemberCard.className
                }
              >
                <div
                  className={
                    layoutConfig.mobile.mainContent.teamMemberCard
                      .imageContainer.className
                  }
                >
                  <Image
                    src={member.src}
                    alt={member.name}
                    className={
                      layoutConfig.mobile.mainContent.teamMemberCard.image
                        .className
                    }
                    quality={100}
                  />
                </div>
                <div
                  className={
                    layoutConfig.mobile.mainContent.teamMemberCard.nameContainer
                      .className
                  }
                >
                  <Typography
                    variant="body1"
                    color="primary"
                    weight="semibold"
                    className={`${layoutConfig.mobile.mainContent.teamMemberCard.name.className} font-ppmori`}
                  >
                    {member.name}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Delegations Section */}
        <div
          className={layoutConfig.mobile.delegations.container.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.delegations.container.backgroundColor,
          }}
        >
          <div
            className={layoutConfig.mobile.delegations.titleSection.className}
          >
            <Typography
              variant={textConfig.delegationsTitle.variant}
              align="center"
              className={`${textConfig.delegationsTitle.className} ${layoutConfig.mobile.delegations.title.className}`}
            >
              {textConfig.delegationsTitle.text
                .split("")
                .map((letter, index) => {
                  const isHighlighted =
                    textConfig.delegationsTitle.wavyLetters.some(
                      (w) => w.position === index + 1
                    );
                  return (
                    <span key={index}>
                      {letter === " " ? (
                        <br />
                      ) : (
                        <span
                          className={
                            isHighlighted
                              ? "uppercase font-bohemian wavy-letter"
                              : ""
                          }
                        >
                          {letter}
                        </span>
                      )}
                    </span>
                  );
                })}
            </Typography>
          </div>

          <div className={layoutConfig.mobile.delegations.grid.className}>
            {delegations.map((delegation, index) => {
              const isFirstRow = index < 2;
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={delegation.name}
                  className={`${layoutConfig.mobile.delegations.buttonCell.className} ${
                    isLeft ? "border-r" : "border-l"
                  } ${isFirstRow ? "border-b" : ""} border-white`}
                >
                  <Link
                    href={delegation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={
                        layoutConfig.mobile.delegations.button.className
                      }
                    >
                      <Image
                        src={delegation.icon}
                        alt={delegation.name.toLowerCase()}
                        className="w-6 md:w-10"
                        quality={100}
                      />
                      <Typography
                        variant={textConfig.delegationButton.variant}
                        color={
                          textConfig.delegationButton.color as
                            | `#${string}`
                            | "primary"
                        }
                        weight={textConfig.delegationButton.weight}
                        className={textConfig.delegationButton.className}
                      >
                        {delegation.name}
                      </Typography>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
      >
        <GridCell
          rowSpan={layoutConfig.desktop.emptyCell1.rowSpan}
          colSpan={1}
          className={layoutConfig.desktop.emptyCell1.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.imageCell.colSpan}
          rowSpan={layoutConfig.desktop.imageCell.rowSpan}
          className={layoutConfig.desktop.imageCell.className}
        >
          <Image
            src={images.clipDesktop.src}
            alt={images.clipDesktop.alt}
            quality={images.clipDesktop.quality}
          />
        </GridCell>

        <GridCell
          colSpan={layoutConfig.desktop.textCell.colSpan}
          rowSpan={layoutConfig.desktop.textCell.rowSpan}
          colStart={layoutConfig.desktop.textCell.colStart}
          className={layoutConfig.desktop.textCell.className}
        >
          <Typography
            variant={textConfig.description.variant}
            color={textConfig.description.color as `#${string}` | "primary"}
            weight={textConfig.description.weight}
            className="mx-w-[500px] tracking-wider font-ppmori text-xl mx-auto px-10 py-10"
          >
            {textConfig.description.text}
          </Typography>
        </GridCell>

        <GridCell
          rowSpan={layoutConfig.desktop.emptyCell2.rowSpan}
          colStart={layoutConfig.desktop.emptyCell2.colStart}
          className={layoutConfig.desktop.emptyCell2.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.teamHeaderCell.colSpan}
          colStart={layoutConfig.desktop.teamHeaderCell.colStart}
          rowStart={layoutConfig.desktop.teamHeaderCell.rowStart}
          className={layoutConfig.desktop.teamHeaderCell.className}
          style={{
            backgroundColor:
              layoutConfig.desktop.teamHeaderCell.backgroundColor,
          }}
        >
          <Typography
            variant={textConfig.teamHeaderDesktop.variant}
            color={
              textConfig.teamHeaderDesktop.color as `#${string}` | "primary"
            }
            weight={textConfig.teamHeaderDesktop.weight}
            className={textConfig.teamHeaderDesktop.className}
          >
            {textConfig.teamHeaderDesktop.text}
          </Typography>
        </GridCell>

        {teamMembers.map((member, index) => (
          <GridCell
            key={member.name}
            colSpan={layoutConfig.desktop.teamMemberCell.colSpan}
            colStart={2 + index * 2}
            rowStart={4}
            className={layoutConfig.desktop.teamMemberCell.className}
          >
            <Link
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className={layoutConfig.desktop.teamMemberLink.className}
            >
              <div className="p-4">
                <Image
                  src={member.src}
                  alt={member.name}
                  className={layoutConfig.desktop.teamMemberImage.className}
                  quality={100}
                />
              </div>
              <Typography
                variant="body1"
                color="primary"
                weight="semibold"
                className={`${layoutConfig.desktop.teamMemberName.className} font-ppmori`}
              >
                {member.name}
              </Typography>
              <Image
                src={images.link.src}
                alt="link"
                className={images.link.className}
              />
            </Link>
          </GridCell>
        ))}
        <GridCell
          rowSpan={layoutConfig.desktop.emptyCell2.rowSpan}
          colStart={layoutConfig.desktop.emptyCell2.colStart}
          className={layoutConfig.desktop.emptyCell2.className}
        />
      </Grid>

      {/* OUR DELEGATIONS Section */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.delegations.grid.className}
        style={{
          backgroundColor:
            layoutConfig.desktop.delegations.grid.backgroundColor,
        }}
      >
        <GridCell
          rowSpan={layoutConfig.desktop.delegations.emptyCell1.rowSpan}
          colSpan={1}
          className={layoutConfig.desktop.delegations.emptyCell1.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.delegations.titleCell.colSpan}
          colStart={layoutConfig.desktop.delegations.titleCell.colStart}
          className={layoutConfig.desktop.delegations.titleCell.className}
        >
          <Typography
            variant={textConfig.delegationsTitleDesktop.variant}
            className={textConfig.delegationsTitleDesktop.className}
          >
            {textConfig.delegationsTitleDesktop.text
              .split("")
              .map((letter, index) => {
                const isHighlighted =
                  textConfig.delegationsTitleDesktop.wavyLetters.some(
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
          rowStart={layoutConfig.desktop.delegations.emptyCell2.rowStart}
          className={layoutConfig.desktop.delegations.emptyCell2.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.delegations.buttonsCell.colSpan}
          rowStart={layoutConfig.desktop.delegations.buttonsCell.rowStart}
          className={layoutConfig.desktop.delegations.buttonsCell.className}
        >
          {delegations.map((delegation) => (
            <Link
              key={delegation.name}
              href={delegation.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={layoutConfig.desktop.delegations.button.className}
              >
                <Image
                  src={delegation.icon}
                  alt={delegation.name.toLowerCase()}
                  className="w-7"
                  quality={100}
                />
                <Typography
                  variant={textConfig.delegationButtonDesktop.variant}
                  color={
                    textConfig.delegationButtonDesktop.color as
                      | `#${string}`
                      | "primary"
                  }
                  weight={textConfig.delegationButtonDesktop.weight}
                  className={textConfig.delegationButtonDesktop.className}
                >
                  {delegation.name}
                </Typography>
                <Image
                  src={images.linkDesktop.src}
                  alt="link"
                  className={images.linkDesktop.className}
                />
              </div>
            </Link>
          ))}
        </GridCell>

        <GridCell
          colStart={layoutConfig.desktop.delegations.emptyCell3.colStart}
          rowStart={layoutConfig.desktop.delegations.emptyCell3.rowStart}
          className={layoutConfig.desktop.delegations.emptyCell3.className}
        />
      </Grid>
    </>
  );
}
