"use client";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useSection2Config } from "@/hooks/useSection2Config";
import { colors } from "@/theme";

export default function Section2() {
  const { images, backgroundImages, textConfig, layoutConfig } =
    useSection2Config();

  return (
    <div className="w-full">
      {/* Desktop Layout - Original 10-column grid */}
      <div className={layoutConfig.desktop.grid.className}>
        <Grid>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight">
            <div
              className={layoutConfig.desktop.handCell.className}
              style={{
                backgroundColor: layoutConfig.desktop.handCell.backgroundColor,
              }}
            >
              <Image
                src={images.hand.src}
                alt={images.hand.alt}
                className={images.hand.className}
                width={images.hand.width}
                height={images.hand.height}
              />
            </div>
          </GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>

          <GridCell type="basic" className="p-10"></GridCell>
          <GridCell type="spannedContent">
            <div className={layoutConfig.desktop.contentCell.className}>
              <div className={layoutConfig.desktop.clipContainer.className}>
                <Image
                  src={images.clip.src}
                  alt={images.clip.alt}
                  className={images.clip.className}
                  quality={images.clip.quality}
                  width={images.clip.width}
                  height={images.clip.height}
                />
              </div>

              <div className={layoutConfig.desktop.textContainer.className}>
                {textConfig.paragraphs.map((paragraph, index) => (
                  <Typography
                    key={`desktop-paragraph-${index}`}
                    variant={textConfig.variant}
                    color={textConfig.color}
                    weight={textConfig.weight}
                    className={textConfig.className}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>
            </div>
          </GridCell>
          <GridCell type="basic" rowSpan={4} className="grid-cell-interactive">
            <div className="ripple-effect" />
            <div className="pattern-overlay" />
          </GridCell>

          <GridCell type="arrow">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={images.arrow.src}
              alt={images.arrow.alt}
              className={images.arrow.className}
              width={images.arrow.width}
              height={images.arrow.height}
            />
          </GridCell>

          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell className={layoutConfig.desktop.iconCell.className}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.hugeiconBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={images.hugeicon.src}
              alt={images.hugeicon.alt}
              className={images.hugeicon.className}
              width={images.hugeicon.width}
              height={images.hugeicon.height}
            />
          </GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
          <GridCell type="withHeight"></GridCell>
        </Grid>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className={layoutConfig.mobile.grid.className}>
          <div className="border border-black ">1</div>
          <div className={layoutConfig.mobile.arrowCell.className}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.mobileBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={images.mobileArrow.src}
              alt={images.mobileArrow.alt}
              className={images.mobileArrow.className}
              width={images.mobileArrow.width}
              height={images.mobileArrow.height}
            />
          </div>
          <div className="col-start-4 border border-black">3</div>
          <div className="col-start-5 border border-black">4</div>
          <div className="row-start-2 border border-black">5</div>
          <div className="col-start-1 row-start-3 border border-black ">6</div>
          <div className="col-start-1 row-start-4 border border-black">7</div>
          <div className="col-start-1 row-start-5 border border-black">8</div>
          <div className={layoutConfig.mobile.iconCell.className}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages.hugeiconBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Image
              src={images.hugeicon.src}
              alt={images.hugeicon.alt}
              className={images.hugeicon.className}
              width={images.hugeicon.width}
              height={images.hugeicon.height}
            />
          </div>
          <div className="col-start-1 row-start-7 border border-black">10</div>
          <div className="col-start-1 row-start-8 border border-black ">11</div>
          <div className="col-start-1 row-start-9 border border-black ">12</div>
          <div className="col-start-1 row-start-10 border border-black ">
            13
          </div>
          <div className="col-span-3 row-span-8 col-start-2 row-start-2 border border-black ">
            <div className="flex flex-col items-center justify-between w-full h-full">
              <div className={layoutConfig.mobile.clipContainer.className}>
                <Image
                  src={images.clip.src}
                  alt={images.clip.alt}
                  className={images.clip.className}
                  quality={images.clip.quality}
                  width={images.clip.width}
                  height={images.clip.height}
                />
              </div>

              <div className={layoutConfig.mobile.textContainer.className}>
                {textConfig.paragraphs.map((paragraph, index) => (
                  <Typography
                    key={`mobile-paragraph-${index}`}
                    variant={textConfig.variant}
                    color={textConfig.color}
                    weight={textConfig.weight}
                    className={`${textConfig.className} ${index === 1 ? "py-5" : ""}`}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 col-start-2 row-start-10 border border-black ">
            15
          </div>
          <div className="col-start-5 row-start-2 border border-black ">16</div>
          <div className="col-start-5 row-start-3 border border-black ">17</div>
          <div className="col-start-5 row-start-4 border border-black ">18</div>
          <div
            className={`col-start-5 row-start-5 border border-black ${layoutConfig.mobile.handCell.className}`}
            style={{
              backgroundColor: layoutConfig.mobile.handCell.backgroundColor,
            }}
          >
            <Image
              src={images.hand.src}
              alt={images.hand.alt}
              className={images.hand.className}
              width={images.hand.width}
              height={images.hand.height}
            />
          </div>
          <div className="col-start-5 row-start-6 border border-black ">20</div>
          <div className="col-start-5 row-start-7 border border-black ">21</div>
          <div className="col-start-5 row-start-8 border border-black ">22</div>
          <div className="col-start-5 row-start-9 border border-black ">23</div>
          <div className="col-start-5 row-start-10 border border-black ">
            24
          </div>
        </div>
      </div>
    </div>
  );
}
