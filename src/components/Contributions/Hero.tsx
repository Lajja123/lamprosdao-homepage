"use client";
import Image from "next/image";
import Typography from "../UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useContributionsHeroConfig } from "@/hooks/useContributionsHeroConfig";

interface HeroProps {
  activeChain: "arbitrum" | "optimism";
  onChainChange: (chain: "arbitrum" | "optimism") => void;
}

export default function Hero({ activeChain, onChainChange }: HeroProps) {
  const {
    images,
    backgroundImages,
    textConfig,
    layoutConfig,
    contributionsContent,
  } = useContributionsHeroConfig();
  const currentContent = contributionsContent[activeChain] || {
    word: "",
    subtitle: "",
    description: "",
    highlightedLetters: [],
  };

  const handleButtonClick = (content: "arbitrum" | "optimism") => {
    onChainChange(content);
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* 3-Column Grid Section */}
        <Grid
          variant="custom"
          noContainer
          className={layoutConfig.mobile.grid.className}
        >
          <GridCell />
          <GridCell className={layoutConfig.mobile.clipImageCell.className}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.bgImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={images.clip.src}
              alt={images.clip.alt}
              className={images.clip.className}
            />
          </GridCell>
          <GridCell />
          <GridCell />
          <GridCell />
          <GridCell />
        </Grid>
        <div className="flex flex-col">
          {/* Second Image Section */}
          <div
            className={layoutConfig.mobile.clip2ImageCell.className}
            style={{
              backgroundColor:
                layoutConfig.mobile.clip2ImageCell.backgroundColor,
            }}
          >
            <Image
              src={images.clip2.src}
              alt={images.clip2.alt}
              className={images.clip2.className}
            />
          </div>
          {/* Text Section */}
          <div className={layoutConfig.mobile.textCell.className}>
            <Typography
              variant={textConfig.intro.variant}
              color={textConfig.intro.color as `#${string}` | "primary"}
              weight={textConfig.intro.weight}
              className={textConfig.intro.className}
            >
              {textConfig.intro.paragraphs.map((paragraph, index) => (
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

        {/* Chain Selection Section */}
        <div
          className={layoutConfig.mobile.chainSelection.container.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.chainSelection.container.backgroundColor,
          }}
        >
          <div
            className={
              layoutConfig.mobile.chainSelection.buttonContainer.className
            }
          >
            {/* Arbitrum Button */}
            <div className="bg-[#1A1A1A] flex items-center justify-center p-5 border-r border-white">
              <div
                className={`${layoutConfig.mobile.chainSelection.button.baseClassName} ${
                  activeChain === "arbitrum"
                    ? layoutConfig.mobile.chainSelection.button.activeClassName
                    : layoutConfig.mobile.chainSelection.button
                        .inactiveClassName
                }`}
                onClick={() => handleButtonClick("arbitrum")}
              >
                <Image
                  src={images.arbitrum.src}
                  alt={images.arbitrum.alt}
                  className={images.arbitrum.className}
                />
                <Typography
                  variant={textConfig.chainButtons.arbitrum.variant}
                  color={
                    textConfig.chainButtons.arbitrum.color as
                      | `#${string}`
                      | "primary"
                  }
                  weight={textConfig.chainButtons.arbitrum.weight}
                  className={textConfig.chainButtons.arbitrum.className}
                >
                  {textConfig.chainButtons.arbitrum.label}
                </Typography>
              </div>
            </div>

            {/* Optimism Button */}
            <div className="bg-[#1A1A1A] flex items-center p-5 justify-center">
              <div
                className={`${layoutConfig.mobile.chainSelection.button.baseClassName} ${
                  activeChain === "optimism"
                    ? layoutConfig.mobile.chainSelection.button.activeClassName
                    : layoutConfig.mobile.chainSelection.button
                        .inactiveClassName
                }`}
                onClick={() => handleButtonClick("optimism")}
              >
                <Image
                  src={images.optimism.src}
                  alt={images.optimism.alt}
                  className={images.optimism.className}
                />
                <Typography
                  variant={textConfig.chainButtons.optimism.variant}
                  color={
                    textConfig.chainButtons.optimism.color as
                      | `#${string}`
                      | "primary"
                  }
                  weight={textConfig.chainButtons.optimism.weight}
                  className={textConfig.chainButtons.optimism.className}
                >
                  {textConfig.chainButtons.optimism.label}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className={layoutConfig.mobile.dynamicContent.titleCell.className}>
          <Typography
            variant="h1"
            color="primary"
            align="center"
            weight="light"
            className="tracking-wide uppercase"
          >
            {currentContent.word.split("").map((letter, index) => {
              const isHighlighted = (
                currentContent.highlightedLetters || []
              ).includes(letter.toUpperCase());
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

        <div
          className={layoutConfig.mobile.dynamicContent.subtitleCell.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.dynamicContent.subtitleCell.backgroundColor,
          }}
        >
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className="tracking-wider text-sm md:text-base text-center"
          >
            {currentContent.subtitle}
          </Typography>
        </div>

        <div
          className={
            layoutConfig.mobile.dynamicContent.descriptionCell.className
          }
        >
          <Typography
            variant="body2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-sm md:text-base text-center"
          >
            {currentContent.description}
          </Typography>
        </div>
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
      >
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell className={layoutConfig.desktop.clipImageCell.className}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImages.bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Image
            src={images.clip.src}
            alt={images.clip.alt}
            className="relative w-full h-full object-contain p-5 mx-auto"
          />
        </GridCell>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell
          colSpan={layoutConfig.desktop.textCell.colSpan}
          className={layoutConfig.desktop.textCell.className}
        >
          <Typography
            variant={textConfig.intro.variant}
            color={textConfig.intro.color as `#${string}` | "primary"}
            weight={textConfig.intro.weight}
            className="tracking-wider font-ppmori text-xl mx-auto px-10 py-10"
          >
            {textConfig.intro.paragraphs.map((paragraph, index) => (
              <div
                key={`paragraph-${index}`}
                className={index > 0 ? "mt-4" : ""}
              >
                {paragraph}
              </div>
            ))}
          </Typography>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.clip2ImageCell.colSpan}
          colStart={layoutConfig.desktop.clip2ImageCell.colStart}
          className={layoutConfig.desktop.clip2ImageCell.className}
          style={{
            backgroundColor:
              layoutConfig.desktop.clip2ImageCell.backgroundColor,
          }}
        >
          <Image
            src={images.clip2Desktop.src}
            alt={images.clip2Desktop.alt}
            className={images.clip2Desktop.className}
          />
        </GridCell>

        <GridCell
          className={layoutConfig.desktop.chainSelection.emptyCell.className}
        />
        <GridCell
          colSpan={
            layoutConfig.desktop.chainSelection.arbitrumButtonCell.colSpan
          }
          rowStart={
            layoutConfig.desktop.chainSelection.arbitrumButtonCell.rowStart
          }
          className={
            layoutConfig.desktop.chainSelection.arbitrumButtonCell.className
          }
        >
          <div
            className={`${layoutConfig.desktop.chainSelection.button.baseClassName} ${
              activeChain === "arbitrum"
                ? layoutConfig.desktop.chainSelection.button.activeClassName
                : layoutConfig.desktop.chainSelection.button.inactiveClassName
            }`}
            onClick={() => handleButtonClick("arbitrum")}
          >
            <Image
              src={images.arbitrumDesktop.src}
              alt={images.arbitrumDesktop.alt}
            />
            <Typography
              variant={textConfig.chainButtons.arbitrum.variant}
              color={
                textConfig.chainButtons.arbitrum.color as
                  | `#${string}`
                  | "primary"
              }
              weight={textConfig.chainButtons.arbitrum.weight}
              className="font-ppmori"
            >
              {textConfig.chainButtons.arbitrum.label}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colSpan={
            layoutConfig.desktop.chainSelection.optimismButtonCell.colSpan
          }
          colStart={
            layoutConfig.desktop.chainSelection.optimismButtonCell.colStart
          }
          rowStart={
            layoutConfig.desktop.chainSelection.optimismButtonCell.rowStart
          }
          className={
            layoutConfig.desktop.chainSelection.optimismButtonCell.className
          }
        >
          <div
            className={`will-change-transform ${layoutConfig.desktop.chainSelection.button.baseClassName} my-10 ${
              activeChain === "optimism"
                ? layoutConfig.desktop.chainSelection.button.activeClassName
                : layoutConfig.desktop.chainSelection.button.inactiveClassName
            }`}
            onClick={() => handleButtonClick("optimism")}
          >
            <Image
              src={images.optimismDesktop.src}
              alt={images.optimismDesktop.alt}
            />
            <Typography
              variant={textConfig.chainButtons.optimism.variant}
              color={
                textConfig.chainButtons.optimism.color as
                  | `#${string}`
                  | "primary"
              }
              weight={textConfig.chainButtons.optimism.weight}
              className="font-ppmori"
            >
              {textConfig.chainButtons.optimism.label}
            </Typography>
          </div>
        </GridCell>
        <GridCell className="col-start-10 row-start-3 bg-[#1A1A1A]" />
      </Grid>

      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.dynamicContent.grid.className}
      >
        <GridCell
          className={layoutConfig.desktop.dynamicContent.emptyCell1.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.dynamicContent.titleCell.colSpan}
          className={layoutConfig.desktop.dynamicContent.titleCell.className}
        >
          <Typography
            variant="h2"
            color="primary"
            weight="light"
            className="tracking-wide uppercase"
          >
            {currentContent.word.split("").map((letter, index) => {
              const isHighlighted = (
                currentContent.highlightedLetters || []
              ).includes(letter.toUpperCase());
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
          colStart={layoutConfig.desktop.dynamicContent.emptyCell2.colStart}
          className={layoutConfig.desktop.dynamicContent.emptyCell2.className}
        />
        <GridCell
          rowStart={layoutConfig.desktop.dynamicContent.emptyCell3.rowStart}
          className={layoutConfig.desktop.dynamicContent.emptyCell3.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.dynamicContent.subtitleCell.colSpan}
          rowStart={layoutConfig.desktop.dynamicContent.subtitleCell.rowStart}
          className={layoutConfig.desktop.dynamicContent.subtitleCell.className}
          style={{
            backgroundColor:
              layoutConfig.desktop.dynamicContent.subtitleCell.backgroundColor,
          }}
        >
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className="tracking-wider"
          >
            {currentContent.subtitle}
          </Typography>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.dynamicContent.emptyCell4.colStart}
          rowStart={layoutConfig.desktop.dynamicContent.emptyCell4.rowStart}
        />
        <GridCell
          colSpan={layoutConfig.desktop.dynamicContent.descriptionCell.colSpan}
          rowStart={
            layoutConfig.desktop.dynamicContent.descriptionCell.rowStart
          }
          className={
            layoutConfig.desktop.dynamicContent.descriptionCell.className
          }
        >
          <Typography
            variant="body2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl max-w-[1200px] p-5 mx-auto"
          >
            {currentContent.description}
          </Typography>
        </GridCell>
      </Grid>
    </>
  );
}
