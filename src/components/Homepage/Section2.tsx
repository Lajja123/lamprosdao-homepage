"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@/components/UI/Typography";
import Grid, { GridCell } from "@/components/UI/Grid";
import { useSection2Config } from "@/hooks/useSection2Config";
import { colors } from "@/theme";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Section2() {
  const { images, backgroundImages, textConfig, layoutConfig } =
    useSection2Config();

  // Refs for animation elements
  const desktopClipRef = useRef<HTMLDivElement>(null);
  const desktopTextRef = useRef<HTMLDivElement>(null);
  const mobileClipRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // Desktop clip image animation
    if (desktopClipRef.current) {
      gsap.set(desktopClipRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const clipAnimation = gsap.to(desktopClipRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopClipRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (clipAnimation.scrollTrigger) {
        scrollTriggers.push(clipAnimation.scrollTrigger);
      }
    }

    // Desktop text content animation
    if (desktopTextRef.current) {
      gsap.set(desktopTextRef.current, {
        opacity: 0,
        y: 40,
      });

      const textAnimation = gsap.to(desktopTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (textAnimation.scrollTrigger) {
        scrollTriggers.push(textAnimation.scrollTrigger);
      }
    }

    // Mobile clip image animation
    if (mobileClipRef.current) {
      gsap.set(mobileClipRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const mobileClipAnimation = gsap.to(mobileClipRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileClipRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileClipAnimation.scrollTrigger) {
        scrollTriggers.push(mobileClipAnimation.scrollTrigger);
      }
    }

    // Mobile text content animation
    if (mobileTextRef.current) {
      gsap.set(mobileTextRef.current, {
        opacity: 0,
        y: 40,
      });

      const mobileTextAnimation = gsap.to(mobileTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileTextRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (mobileTextAnimation.scrollTrigger) {
        scrollTriggers.push(mobileTextAnimation.scrollTrigger);
      }
    }

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

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
                loading="lazy"
                quality={85}
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
              <div
                ref={desktopClipRef}
                className={layoutConfig.desktop.clipContainer.className}
              >
                <Image
                  src={images.clip.src}
                  alt={images.clip.alt}
                  className={images.clip.className}
                  quality={images.clip.quality}
                  width={images.clip.width}
                  height={images.clip.height}
                />
              </div>

              <div
                ref={desktopTextRef}
                className={layoutConfig.desktop.textContainer.className}
              >
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
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.87) 29.5%, #000000 49.5%, rgba(0, 0, 0, 0.7) 76.5%, #FFFFFF 100%)",
              }}
            ></div>
            <Image
              src={images.arrow.src}
              alt={images.arrow.alt}
              className={`${images.arrow.className} relative z-20`}
              width={images.arrow.width}
              height={images.arrow.height}
              loading="lazy"
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
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${backgroundImages.hugeiconBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",
              }}
            ></div>
            <Image
              src={images.hugeicon.src}
              alt={images.hugeicon.alt}
              className={`${images.hugeicon.className} relative z-20`}
              width={images.hugeicon.width}
              height={images.hugeicon.height}
              loading="lazy"
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
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${backgroundImages.mobileBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.87) 29.5%, #000000 49.5%, rgba(0, 0, 0, 0.7) 76.5%, #FFFFFF 100%)",
              }}
            ></div>
            <Image
              src={images.mobileArrow.src}
              alt={images.mobileArrow.alt}
              className={`${images.mobileArrow.className} relative z-20`}
              width={images.mobileArrow.width}
              height={images.mobileArrow.height}
              loading="lazy"
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
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${backgroundImages.hugeiconBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",
              }}
            ></div>
            <Image
              src={images.hugeicon.src}
              alt={images.hugeicon.alt}
              className={`${images.hugeicon.className} relative z-20`}
              width={images.hugeicon.width}
              height={images.hugeicon.height}
              loading="lazy"
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
              <div
                ref={mobileClipRef}
                className={layoutConfig.mobile.clipContainer.className}
              >
                <Image
                  src={images.clip.src}
                  alt={images.clip.alt}
                  className={images.clip.className}
                  quality={images.clip.quality}
                  width={images.clip.width}
                  height={images.clip.height}
                />
              </div>

              <div
                ref={mobileTextRef}
                className={layoutConfig.mobile.textContainer.className}
              >
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
