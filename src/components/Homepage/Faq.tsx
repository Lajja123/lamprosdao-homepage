import Image from "next/image";
import left from "@/assests/common/left.svg";
import right from "@/assests/common/right.svg";
import top from "@/assests/Faq/top.svg";
import question from "@/assests/Faq/question.svg";
import clip from "@/assests/Faq/clip.svg";
import { Typography } from "@/components/UI/Typography";
import {
  commonStyles,
  stylePresets,
  combineStyles,
} from "@/utils/commonStyles";

// Reusable components
const NumberCell = ({
  number,
  rowStart,
}: {
  number: string;
  rowStart?: string;
}) => (
  <div
    className={combineStyles(
      stylePresets.faq.numberCell,
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <Typography
      variant="overline"
      color="primary"
      weight="bold"
      className="font-psygen text-sm md:text-base"
    >
      {number}
    </Typography>
  </div>
);

const ContentCell = ({
  children,
  rowStart,
  iconSrc = top,
}: {
  children: React.ReactNode;
  rowStart?: string;
  iconSrc?: string;
}) => (
  <div
    className={combineStyles(
      stylePresets.faq.contentCell,
      rowStart ? `row-start-${rowStart}` : ""
    )}
  >
    <div className="flex-1 min-w-0 pr-4">{children}</div>
    <div className="flex-shrink-0">
      <Image
        src={iconSrc}
        alt="collapse item"
        width={40}
        height={40}
        className={commonStyles.components.iconContainer.purple}
      />
    </div>
  </div>
);

const NavigationButton = ({
  src,
  alt,
  colStart,
  rowStart,
  background = commonStyles.background.dark,
}: {
  src: string;
  alt: string;
  colStart?: string;
  rowStart?: string;
  background?: string;
}) => (
  <div
    className={combineStyles(
      stylePresets.faq.navCell,
      colStart ? `col-start-${colStart}` : "",
      rowStart ? `row-start-${rowStart}` : "",
      background
    )}
  >
    <Image
      src={src}
      alt={alt}
      width={70}
      height={70}
      className={commonStyles.components.navButton}
    />
  </div>
);

export default function Faq() {
  return (
    <>
      <div className={commonStyles.grid.cols10}>
        <NumberCell number="01" />

        <ContentCell>
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className={combineStyles(
              commonStyles.typography.body.medium,
              commonStyles.typography.wrap.words
            )}
          >
            What&apos;s The Core Vision Of Lampros DAO?
          </Typography>
        </ContentCell>

        <NumberCell number="02" rowStart="2" />

        <ContentCell rowStart="2">
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className={combineStyles(
              commonStyles.typography.body.medium,
              commonStyles.typography.wrap.words
            )}
          >
            Welcome aboard! Lampros DAO offers training sessions, hackathons,
            bootcamps, and cohorts designed specifically to help budding
            developers like you delve into the nuances of web3. Our community is
            here to guide, assist, and mentor you throughout your journey.
          </Typography>
        </ContentCell>

        <NumberCell number="03" rowStart="3" />

        <ContentCell rowStart="3">
          <Typography
            variant="body2"
            color="primary"
            weight="normal"
            className={combineStyles(
              commonStyles.typography.body.medium,
              "font-ppmori",
              commonStyles.typography.wrap.words
            )}
          >
            Can I contribute to open-source projects through Lampros DAO?
          </Typography>
        </ContentCell>

        <div className={stylePresets.faq.questionCell}>
          <Image src={question} alt="question mark" />
        </div>

        <div className={stylePresets.faq.titleCell}>
          <Typography
            variant="h1"
            color="primary"
            weight="semibold"
            align="center"
            className={combineStyles(
              commonStyles.typography.heading.h1,
              "font-ppmori"
            )}
          >
            F <span className="uppercase font-bohemian wavy-letter">A</span> Q
          </Typography>
        </div>

        <NavigationButton src={left} alt="previous" colStart="6" rowStart="4" />

        <div className={stylePresets.faq.clipCell}>
          <Image src={clip} alt="clip" />
        </div>

        <NavigationButton src={right} alt="next" colStart="10" rowStart="4" />
      </div>
    </>
  );
}
