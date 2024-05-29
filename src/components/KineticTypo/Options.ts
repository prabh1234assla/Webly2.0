import * as THREE from "three";
import { OptionsInit } from "../types/KineticTypo";

import box_fragShader from "./shaders/box_shader/f.glsl";
import box_vertexShader from "./shaders/box_shader/v.glsl";
import torusKnot_fragShader from "./shaders/torusKnot_shader/f.glsl";
import torusKnot_vertexShader from "./shaders/torusKnot_shader/v.glsl";

import { OrbitronFont } from "./FontExports";
import OrbitronFontAtlas from "@/assets/fonts/Orbitron-Black.png";
import { ArchivoFont } from "./FontExports";
import ArchivoFontAtlas from "@/assets/fonts/ArchivoBlack-Regular.png";

const Options: OptionsInit[] = [
    {
        word: "Achievements",
        color: "#BE3144",
        fill: "#2F113C",
        geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
        position: {
            texture: [-0.965, -0.4, 0],
            mesh: [0, 0, 0]
        },
        scale: [0.008, 0.04, 1],
        shaders: {
            vertex: torusKnot_vertexShader,
            fragment: torusKnot_fragShader
        },
        font: {
            file: OrbitronFont.className,
            atlas: OrbitronFontAtlas
        },
        class: "knot"
    },
    {
        word: "Projects",
        color: "#872341",
        fill: "#2F113C",
        geometry: new THREE.BoxGeometry(100, 10, 10, 64, 64, 64),
        position: {
            texture: [-0.945, -0.5, 0],
            mesh: [0, 0, 0]
        },
        scale: [0.009, 0.04, 1],
        shaders: {
            vertex: box_vertexShader,
            fragment: box_fragShader
        },
        font: {
            file: ArchivoFont.className,
            atlas: ArchivoFontAtlas
        },
        class: "box"
    }
]

export default Options;