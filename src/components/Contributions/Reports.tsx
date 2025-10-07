import Button from "../UI/Button";
import Typography from "../UI/Typography";
import bgImage1 from "@/assests/Governance/reportbg.png";

export default function Reports() {
  return (
    <>
      <div className="grid grid-cols-10 bg-[#1A1A1A]">
        <div className="border border-white"></div>
        <div className="col-span-8 border border-white flex items-center justify-center p-5">
          <Typography
            variant="subtitle1"
            color="yellow"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori"
          >
            BELOW ARE SOME OF OUR KEY CONTRIBUTIONS TO ARBITRUM DAO{" "}
          </Typography>
        </div>
        <div className="col-start-10 border border-white flex items-center justify-center p-5"></div>
        <div className="row-start-2 border border-white relative flex items-center justify-center">
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            01{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-start-2 border border-white p-5">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            LTIPP Incentive Programs
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            02{" "}
          </Typography>
        </div>
        <div className="col-span-4 p-5 col-start-7 row-start-2 border border-white">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            LTIPP Incentive Programs
          </Typography>
        </div>
        <div className="row-start-3"></div>
        <div className="col-span-4 row-start-3 border-r border-white p-5 flex flex-col gap-4">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
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
        <div className="col-start-6 row-start-3"></div>
        <div className="col-span-4 col-start-7 row-start-3 p-5  flex flex-col gap-4">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
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
        <div className="row-start-4 border border-white relative flex items-center justify-center">
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            03{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-start-4 border border-white p-5">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            LTIPP Incentive Programs
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            04{" "}
          </Typography>
        </div>
        <div className="col-span-4 p-5 col-start-7 row-start-4 border border-white">
          <Typography
            variant="h5"
            color="white"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori "
          >
            LTIPP Incentive Programs
          </Typography>
        </div>
        <div className="row-start-5">16</div>
        <div className="col-span-4 row-start-5  p-5 flex flex-col gap-4 border-r border-white">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
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
        <div className="col-span-4 col-start-7 row-start-5 p-5 flex flex-col gap-4">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
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
        <div className="col-span-10 row-start-6 border border-white p-5 flex items-center justify-center">
          <Button
            label="See more"
            color="#D0FFAC"
            textColor="#0B0B0B"
            className=""
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-10 bg-[#1A1A1A]">
        <div className="border border-white"></div>
        <div className="col-span-8 border border-white flex items-center justify-center p-5">
          <Typography
            variant="subtitle1"
            color="yellow"
            weight="semibold"
            className="uppercase tracking-wider font-ppmori"
          >
            BELOW ARE SOME OF OUR KEY CONTRIBUTIONS TO ARBITRUM DAO{" "}
          </Typography>
        </div>
        <div className="col-start-10 border border-white"></div>
        <div className="relative row-start-2 border border-white flex items-center justify-center p-5">
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            01{" "}
          </Typography>
        </div>
        <div className="col-span-4 row-start-2 border border-white p-5">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="relative col-start-6 row-start-2 border border-white flex items-center justify-center p-5">
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            02{" "}
          </Typography>
        </div>
        <div className="col-span-4 col-start-7 row-start-2 border border-white p-5">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="col-span-5 row-start-3 border border-white">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="col-span-5 col-start-6 row-start-3 border border-white">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>

        <div className=" relative row-start-4 border border-white flex items-center justify-center p-5">
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            03
          </Typography>
        </div>
        <div className="col-span-4 row-start-4 border border-white p-5">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="relative col-start-6 row-start-4 border border-white flex items-center justify-center p-5">
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
            variant="h2"
            color="white"
            weight="bold"
            className="uppercase tracking-wider font-psygen z-10"
          >
            04{" "}
          </Typography>
        </div>
        <div className="col-span-4 col-start-7 row-start-4 p-5 border border-white">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="col-span-5 col-start-1 row-start-5 border border-white">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="col-span-5 col-start-6 row-start-5 border border-white">
          <Typography
            variant="body1"
            color="white"
            weight="normal"
            className=" tracking-wider font-ppmori"
          >
            We conducted an in-depth analysis of the LTIPP incentive programs,
            evaluating their impact on participating and non-recipient
            protocols. Our research includes statistical models, interactive
            dashboards, and an ARB distribution tracker to ensure transparency.
          </Typography>
        </div>
        <div className="col-span-10 col-start-1 row-start-6 border border-white">
          15
        </div>
      </div> */}
    </>
  );
}
