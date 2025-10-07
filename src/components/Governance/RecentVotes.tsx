"use client"
import React, { useState } from 'react';
import up from "@/assests/common/left.svg"
import down from "@/assests/common/right.svg"
import Image from 'next/image';
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";
import Typography from '../UI/Typography';


export default function RecentVotes() {
  const [activeTab, setActiveTab] = useState('Arbitrum');
  
  const votes = [
    {
      id: '01',
      status: 'Voted [ For ]',
      title: '[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky',
      tags: ['Arbitrum', 'Off-Chain Voting']
    },
    {
      id: '02',
      status: 'Voted [ For ]',
      title: '[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky',
      tags: ['Arbitrum', 'Off-Chain Voting']
    },
    {
      id: '03',
      status: 'Voted [ For ]',
      title: '[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky',
      tags: ['Arbitrum', 'Off-Chain Voting']
    },
    {
      id: '04',
      status: 'Voted [ For ]',
      title: '[CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky',
      tags: ['Arbitrum', 'Off-Chain Voting']
    }
  ];

  return (
 <div className="grid grid-cols-10">
      {/* Row 1 - Header Row */}
      <div className='border border-black bg-[#C5D9E8] p-6 flex items-center justify-center'>
        <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border border-black rounded"></div>
        </div>
      </div>
      <div className="col-span-8 border border-black p-6 flex items-center justify-between">
        <Typography 
          variant="h2" 
          color="primary" 
          weight="light"
          className="tracking-wide"
        >
          Recent Votes
        </Typography>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('Arbitrum')}
            className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
              activeTab === 'Arbitrum'
                ? 'bg-[#2D374B] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-[#4A90E2] flex items-center justify-center text-xs text-white font-bold">
              A
            </div>
            <Typography variant="button" className="normal-case">
              Arbitrum
            </Typography>
          </button>
          <button
            onClick={() => setActiveTab('Optimism')}
            className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
              activeTab === 'Optimism'
                ? 'bg-[#FF0420] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-[#FF0420] flex items-center justify-center text-xs text-white font-bold">
              OP
            </div>
            <Typography variant="button" className="normal-case">
              Optimism
            </Typography>
          </button>
        </div>
      </div>
      <div className="col-start-10 border border-black"></div>

      {/* Row 2 - Vote 01 */}
      <div className="row-start-2 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light">
          01
        </Typography>
      </div>
      <div className="col-span-2 row-start-2 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-2 border border-black p-6">
        <Typography variant="body1" color="primary" weight="normal" className="mb-3">
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className="col-start-10 row-start-2 border border-black bg-[#2A2A2A] flex items-center justify-center">
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Image src={down} alt="down"/>
        </button>
      </div>

      {/* Row 3 - Vote 02 */}
      <div className="row-start-3 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light">
          02
        </Typography>
      </div>
      <div className="col-span-2 row-start-3 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-3 border border-black p-6">
        <Typography variant="body1" color="primary" weight="normal" className="mb-3">
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className="col-start-10 row-start-3 border border-black bg-[#2A2A2A] flex items-center justify-center">
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Image src={down} alt="down"/>
        </button>
      </div>

      {/* Row 4 - Vote 03 */}
      <div className="row-start-4 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light">
          03
        </Typography>
      </div>
      <div className="col-span-2 row-start-4 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-4 border border-black p-6">
        <Typography variant="body1" color="primary" weight="normal" className="mb-3">
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className="col-start-10 row-start-4 border border-black bg-[#2A2A2A] flex items-center justify-center">
        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Image src={up} alt="up"/>
        </button>
      </div>

      {/* Row 5 - Vote 04 */}
      <div className="row-start-5 border border-black p-6 flex items-center justify-center">
        <Typography variant="h4" color="primary" weight="light">
          04
        </Typography>
      </div>
      <div className="col-span-2 row-start-5 border border-black p-6 flex items-center">
        <Typography variant="body1" color="primary" weight="medium">
          Voted [ For ]
        </Typography>
      </div>
      <div className="col-span-6 col-start-4 row-start-5 border border-black p-6">
        <Typography variant="body1" color="primary" weight="normal" className="mb-3">
          [CONSTITUTIONAL] Proposal: For Arbitrum DAO To Register The Sky
        </Typography>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Arbitrum
          </span>
          <span className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm font-ppmori">
            Off-Chain Voting
          </span>
        </div>
      </div>
      <div className="col-start-10 row-start-5 border border-black bg-[#2A2A2A] flex items-center justify-center">
        <Image src={down} alt="down"/>

      </div>

      {/* Footer Row */}
      <div className="row-start-6 border border-black bg-[#E8F5A8]"></div>
      <div className="col-span-8 row-start-6 border border-black bg-[#E8F5A8] p-8 flex items-center justify-center">
        <button className="px-12 py-4 bg-black text-white rounded-full font-ppmori font-medium hover:bg-gray-900 transition-colors">
          See More
        </button>
      </div>
      <div className="col-start-10 row-start-6 border border-black bg-[#E8F5A8]"></div>
    </div>
  

    //  <div className="min-h-screen bg-white ">
    //   <div className="">
    //     {/* Header Section */}
    //     <div className="grid grid-cols-12 border-b border-l border-r border-black">
    //       {/* Icon Column */}
    //       <div className="col-span-1 border-r border-black p-6 bg-[#C5D9E8] flex items-center justify-center">
    //         <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center">
    //           <div className="w-6 h-6 border border-black rounded"></div>
    //         </div>
    //       </div>

    //       {/* Title Column */}
    //       <div className="col-span-7 border-r border-black p-6 flex items-center justify-between">
    //         <div>
    //         <Typography 
    //           variant="h2" 
    //           color="primary" 
    //           weight="light"
    //           className="tracking-wide"
    //         >
    //           Recent Votes
    //         </Typography>
    //         </div>
    //         <button
    //           onClick={() => setActiveTab('Arbitrum')}
    //           className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
    //             activeTab === 'Arbitrum'
    //               ? 'bg-[#2D374B] text-white'
    //               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    //           }`}
    //         >
    //           <div className="w-5 h-5 rounded-full bg-[#4A90E2] flex items-center justify-center text-xs text-white font-bold">
    //             A
    //           </div>
    //           <Typography variant="button" className="normal-case">
    //             Arbitrum
    //           </Typography>
    //         </button>
    //         <button
    //           onClick={() => setActiveTab('Optimism')}
    //           className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
    //             activeTab === 'Optimism'
    //               ? 'bg-[#FF0420] text-white'
    //               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    //           }`}
    //         >
    //           <div className="w-5 h-5 rounded-full bg-[#FF0420] flex items-center justify-center text-xs text-white font-bold">
    //             OP
    //           </div>
    //           <Typography variant="button" className="normal-case">
    //             Optimism
    //           </Typography>
    //         </button>
    //       </div>

    //       {/* Tabs Column */}
    //       <div className="col-span-4 p-6 flex items-center justify-end gap-3">
    //         <button
    //           onClick={() => setActiveTab('Arbitrum')}
    //           className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
    //             activeTab === 'Arbitrum'
    //               ? 'bg-[#2D374B] text-white'
    //               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    //           }`}
    //         >
    //           <div className="w-5 h-5 rounded-full bg-[#4A90E2] flex items-center justify-center text-xs text-white font-bold">
    //             A
    //           </div>
    //           <Typography variant="button" className="normal-case">
    //             Arbitrum
    //           </Typography>
    //         </button>
    //         <button
    //           onClick={() => setActiveTab('Optimism')}
    //           className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
    //             activeTab === 'Optimism'
    //               ? 'bg-[#FF0420] text-white'
    //               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    //           }`}
    //         >
    //           <div className="w-5 h-5 rounded-full bg-[#FF0420] flex items-center justify-center text-xs text-white font-bold">
    //             OP
    //           </div>
    //           <Typography variant="button" className="normal-case">
    //             Optimism
    //           </Typography>
    //         </button>
    //       </div>
    //     </div>

    //     {/* Votes List */}
    //     {votes.map((vote, index) => (
    //       <div key={vote.id} className="grid grid-cols-12 border-l border-r border-b border-black">
    //         {/* ID Column */}
    //         <div className="col-span-1 border-r border-black p-6 flex items-center justify-center">
    //           <span className="text-2xl font-light">{vote.id}</span>
    //         </div>

    //         {/* Status Column */}
    //         <div className="col-span-2 border-r border-black p-6 flex items-center">
    //           <span className="text-sm font-medium">{vote.status}</span>
    //         </div>

    //         {/* Title and Tags Column */}
    //         <div className="col-span-8 border-r border-black p-6">
    //           <h3 className="text-lg font-normal mb-3">{vote.title}</h3>
    //           <div className="flex gap-2">
    //             {vote.tags.map((tag, idx) => (
    //               <span
    //                 key={idx}
    //                 className="px-4 py-1.5 border border-[#C084FC] text-[#C084FC] rounded-full text-sm"
    //               >
    //                 {tag}
    //               </span>
    //             ))}
    //           </div>
    //         </div>

    //         {/* Arrow Column */}
    //         <div className="col-span-1 bg-[#2A2A2A] flex items-center justify-center border-b border-white">
    //           <Image src={down} alt="down"/>
    //         </div>
    //       </div>
    //     ))}

    //     {/* Footer Section */}
    //     <div className="grid grid-cols-12 border-l border-r border-b border-black">
    //       <div className="col-span-1 border-r border-black bg-[#E8F5A8]"></div>
    //       <div className="col-span-10 border-r border-black bg-[#E8F5A8] p-8 flex items-center justify-center">
    //         <button className="px-12 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 transition-colors">
    //           See More
    //         </button>
    //       </div>
    //       <div className="col-span-1 bg-[#E8F5A8]"></div>
    //     </div>
    //   </div>
    // </div>
  );
}
