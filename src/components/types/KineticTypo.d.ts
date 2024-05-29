import { StaticImageData } from "next/image";
import { BoxGeometry, BufferGeometry, NormalBufferAttributes, TorusGeometry, TorusKnotGeometry } from "three";

type Vector3Init = [number, number, number]

export type GeometryInit = BufferGeometry<NormalBufferAttributes> | null

interface CommonOptions{
    word: string,
    color: string,
    fill: string,
    geometry: GeometryInit
}

export interface OptionsInit extends CommonOptions{
    position: {
        texture: Vector3Init
        mesh: Vector3Init
    },
    scale: Vector3Init,
    shaders: {
        vertex: string
        fragment: string
    },
    font: {
        file: string
        atlas: StaticImageData | null
    },
    class: string
}

export interface TypeOptionsInit extends CommonOptions{
    wordPosition: Vector3Init,
    wordScale: Vector3Init,
    position: Vector3Init,
    rotation: Vector3Init,
    vertex: string,
    fragment: string,
    fontFile: string,
    fontAtlas: StaticImageData | null
}