import { FC } from "react";
import { DarkModeInit } from "./types/Globals";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export enum ActiveSection {
    about,
    blog,
    projects,
    laboratory,
    videos,
}

interface Props extends DarkModeInit {
    section: ActiveSection
}

const Navbar: FC<Props> = ({ section }) => {
    return (<>
        <div id="Navbar" className=" bg-primary-200 flex justify-between items-center">
            <div id="Logo" className="flex items-center">
                <CldImage
                    src="v1716709260/webly2.0/logo_h70h9m"
                    alt="logo for website"
                    width={66 * 1.7}
                    height={64.01 * 1.7}
                    format="svg"
                />
                <div className=" text-secondary-200 font-black text-3xl flex flex-col">
                    <span className=" inline-block">pd.</span>
                    <span className=" inline-block">assla.</span>
                </div>
            </div>

            <div id="NavLinks" className="flex items-baseline">
                {
                    Object.keys(ActiveSection).filter(s => isNaN(Number(s))).map((s, i) =>
                        <Link key={i} href={`/${s}/`}>
                            <div className={" underline underline-offset-4 mr-4 " + (s == Object.values(ActiveSection)[section] ? " text-secondary-100 text-4xl font-extrabold" : " text-secondary-300 text-3xl font-medium")}>{s + "."}</div>
                        </Link>
                    )
                }
            </div>
        </div>
    </>)
}

export default Navbar;