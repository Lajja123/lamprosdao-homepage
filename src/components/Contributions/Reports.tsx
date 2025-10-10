import Button from "../UI/Button";
import { GridCell } from "../UI/Grid";
import Typography from "../UI/Typography";
import bgImage1 from "@/assests/Governance/reportbg.png";
import contributionsData from "@/data/contributionsContent.json";
import link from "@/assests/Governance/link.svg";
import Image from "next/image";

export default function Reports() {
  const { contributions } = contributionsData;
  return (
    <>
      <div className="grid grid-cols-10 bg-[#1A1A1A]">
        <div className="border border-white"></div>
        <div className="col-span-8 border border-white flex items-center justify-center p-10">
          <Typography
            variant="subtitle1"
            color="yellow"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori"
          >
            {contributions.header}{" "}
          </Typography>
        </div>
        <div className="col-start-10 border border-white flex items-center justify-center p-10"></div>
        <div className="row-start-2 border border-white relative flex items-center justify-center p-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            01{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-start-2 border border-white flex items-center justify-center p-10 ">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {contributions.items[0].title}
          </Typography>
        </div>
        <div className="col-start-6 row-start-2 border border-white relative flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            02{" "}
          </Typography>
        </div>
        <div className="col-span-4  flex items-center justify-center p-10 col-start-7 row-start-2 border border-white">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {contributions.items[1].title}
          </Typography>
        </div>
        <div className="row-start-3"></div>
        <div className="col-span-4 row-start-3 border-r border-white p-10 flex flex-col gap-4">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            {contributions.items[0].description}
          </Typography>
          <div>
            {" "}
            <Button
              label="Read The Reports"
              color="#DFCDF2"
              textColor="#0B0B0B"
              className=" py-1 px-2"
            />
          </div>
        </div>
        <div className="col-start-6 row-start-3"></div>
        <div className="col-span-4 col-start-7 row-start-3 p-10  flex flex-col gap-4">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            {contributions.items[1].description}
          </Typography>
          <div>
            {" "}
            <Button
              label="Read The Reports"
              color="#DFCDF2"
              textColor="#0B0B0B"
              className=""
            />
          </div>
        </div>
        <div className="row-start-4 border border-white relative flex items-start justify-center p-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            03{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-start-4 border border-white p-10 flex items-start justify-start">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {contributions.items[2].title}{" "}
          </Typography>
        </div>
        <div className="col-start-6 row-start-4 border border-white relative flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Typography
            variant="h5"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            04
          </Typography>
        </div>
        <div className="col-span-4 p-10 col-start-7 row-start-4 border border-white flex items-center justify-center">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            {contributions.items[3].title}{" "}
          </Typography>
        </div>
        <div className="row-start-5"></div>
        <div className="col-span-4 row-start-5  p-10 flex flex-col gap-4 border-r border-white">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            {contributions.items[2].description}
          </Typography>
          <div>
            {" "}
            <Button
              label="Read The Reports"
              color="#DFCDF2"
              textColor="#0B0B0B"
              className=""
            />
          </div>
        </div>
        <div className="col-start-6 row-start-5"></div>
        <div className="col-span-4 col-start-7 row-start-5 p-10 flex flex-col gap-4">
          <Typography
            variant="body2"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            {contributions.items[3].description}
          </Typography>
          <div>
            {" "}
            <Button
              label="Read The Reports"
              color="#DFCDF2"
              textColor="#0B0B0B"
              className=""
            />
          </div>
        </div>
        <div className="col-span-10 row-start-6 border border-white p-10 flex items-center justify-center">
          <Button
            label="See More"
            color="#D0FFAC"
            textColor="#0B0B0B"

          >
                      <Image src={link} alt="arrow" className="w-10 h-10" />
</Button>
        </div>
      </div>
    </>
  );
}
