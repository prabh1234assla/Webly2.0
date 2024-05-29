import { FC, useRef } from "react";
import Options from "./Options";
import Type from "./Type";

type Props = {
    GeometryType: number
}

const TypoGraphy: FC<Props> = ({ GeometryType }) => {
    const webgl__ref = useRef<HTMLDivElement>(null);
    const typeInit = new Type({ ...Options[GeometryType], rotation: [2, 3, 3] }, webgl__ref);

    return (<main>
        <div className="content">
            <div id="webgl" ref={webgl__ref}></div>
        </div>
    </main>)
}

export default TypoGraphy