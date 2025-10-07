import Typography from "../UI/Typography";

export default function Reports() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-5 gap-4 bg-[#1A1A1A]">
        <div className="border border-black border border-black-white">1</div>
        <div className="col-span-8 border border-black border border-black-white">
          <Typography
            variant="subtitle2"
            color="primary"
            weight="semibold"
            className="tracking-wider font-ppmori text-xl leading-1.5 max-w-[1200px] p-5"
          >
            Lampros DAO is committed to enhancing governance, transparency, and
            community engagement within the Arbitrum ecosystem. Through in-depth
            research, interactive dashboards, and educational initiatives, we
            aim to empower delegates, developers, and users to make informed
            decisions. Our contributions focus on strengthening governance
            frameworks, improving incentive structures, and fostering
            participation in decentralized decision-making.
          </Typography>
        </div>
        <div className="col-start-10 border border-black border border-black-white">3</div>
        <div className="row-start-2 border border-black border border-black-white">4</div>
        <div className="col-span-4 row-start-2 border border-black border border-black-white">5</div>
        <div className="col-start-6 row-start-2 border border-black border border-black-white">6</div>
        <div className="col-span-4 col-start-7 row-start-2 border border-black border border-black-white">
          7
        </div>
        <div className="col-span-5 row-start-3 border border-black border border-black-white">8</div>
        <div className="col-span-5 col-start-6 row-start-3 border border-black border border-black-white">
          9
        </div>
        <div className="row-start-4 border border-black border border-black-white">10</div>
        <div className="col-span-4 row-start-4 border border-black border border-black-white">11</div>
        <div className="col-start-6 row-start-4 border border-black border border-black-white">12</div>
        <div className="col-span-4 col-start-7 row-start-4 border border-black border border-black-white">
          13
        </div>
        <div className="col-span-10 row-start-5 border border-black border border-black-white">14</div>
      </div>
    </>
  );
}
