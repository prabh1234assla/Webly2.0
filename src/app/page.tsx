"use client";

import TypoGraphy from "@/components/KineticTypo/TypoGraphy";
import Navbar from "@/components/Navbar";
import { ActiveSection } from "@/components/Navbar";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className=" bg-primary-100 w-screen h-[400vh] overflow-hidden">

      <Navbar
        section={ActiveSection.about}
        mode="on"
        setMode={null} />

      <div>
        <div id="Introduction" className=" w-[81%] pl-20 pr-20 pt-10 pb-10 ">
          <span className="txt_1">Full-Stack Developer</span>
          <span className="txt_2">and</span>
          <span className="txt_1">Graphic Designer</span>
          <span className="txt_2">who often talks about</span>
          <span className="txt_4">DevOps</span>
          <span className="txt_2 punctuation">,</span>
          <span className="txt_4">Cloud Computing</span>
          <span className="txt_2 punctuation">,</span>
          <span className="txt_4">UI/UX</span>
          <span className="txt_2">and</span>
          <span className="txt_4">good coding practices</span>
          <span className="txt_2 punctuation">.</span>
          <span className="txt_2">Love</span>
          <span className="txt_3">writing </span>
          <span className="txt_1">Poetry</span>
          <span className="txt_2 punctuation">,</span>
          <span className="txt_1">Articles</span>
          <span className="txt_2 punctuation">,</span>
          <span className="txt_3">reading</span>
          <span className="txt_2">about</span>
          <span className="txt_1">Web-dev technologies</span>
          <span className="txt_2">and</span>
          <span className="txt_3">designing</span>
          <span className="txt_1">Logos</span>
          <span className="txt_2 punctuation">.</span>
        </div>
        <div className="relative w-[584px] h-[442px] float-right m-20">
          <CldImage
            src="v1716723127/webly2.0/frameAssets/waves_zjofil"
            alt="waves for frame"
            className="absolute -top-20 -left-20 z-10"
            width={158.5 * 1.5}
            height={253 * 1.5}
            id="waves"
            format="svg"
          />
          <CldImage
            src="v1716723127/webly2.0/frameAssets/star_wctrzh"
            alt="star for frame"
            width={143.68 * 1.5}
            height={143.68 * 1.5}
            id="star"
            className="absolute -bottom-20 -right-20 z-10"
            format="svg"
          />
          <CldImage
            src="v1716723128/webly2.0/frameAssets/frame_vdz4bt"
            alt="frame for profile display"
            className="absolute"
            width={588}
            height={442}
            format="svg"
          />
          <CldImage
            src="v1716723664/webly2.0/frameAssets/profile_yb9tyx"
            alt="profile display"
            width={534}
            height={401}
            className="absolute left-[25px] top-[20px]"
            format="png"
          />
        </div>

        <TypoGraphy GeometryType={2} />
        
      </div>
    </main >
  );
}
