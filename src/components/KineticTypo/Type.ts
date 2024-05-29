import * as THREE from "three";

import loadFont from "load-bmfont";
import createGeometry from "three-bmfont-text";
import MSDFShader from "three-bmfont-text/shaders/msdf";
import { OrbitronFont } from "./FontExports";
import OrbitronFontAtlas from "@/assets/fonts/Orbitron-Black.png";
import type { GeometryInit, OptionsInit, TypeOptionsInit, Vector3Init } from "../types/KineticTypo";
import Error from "next/error";
import { RefObject } from "react";
import GL from "./GL";

export default class Type extends THREE.Object3D {

    TypeOptions: TypeOptionsInit = {
        word: "",
        color: "",
        fill: "",
        wordPosition: [0, 0, 0],
        wordScale: [0, 0, 0],
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        geometry: null,
        vertex: "",
        fragment: "",
        fontFile: "",
        fontAtlas: null
    }
    fontGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes> | null = null
    loader: THREE.TextureLoader | null = null
    fontMaterial: THREE.RawShaderMaterial | null = null
    renderTarget: THREE.WebGLRenderTarget | null = null
    renderTargetCamera: THREE.PerspectiveCamera | null = null
    renderTargetScene: THREE.Scene | null = null
    text: THREE.Mesh | null = null
    geometry: GeometryInit = null
    material: THREE.ShaderMaterial | null = null
    mesh: THREE.Mesh | null = null
    GLInstance : GL | null = null

    constructor(options: OptionsInit & {rotation: Vector3Init}, webgl__ref: RefObject<HTMLDivElement>){
        super()
        this.init(options, webgl__ref);
    }

    
    createRenderTarget(){

        this.renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

        this.renderTargetCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        this.renderTargetCamera.position.setZ(2.4);

        this.renderTargetScene = new THREE.Scene();
        this.renderTargetScene.background = new THREE.Color(this.TypeOptions.fill);

        if(this.fontGeometry){

            this.text = new THREE.Mesh(this.fontGeometry, this.fontMaterial as THREE.Material | THREE.Material[]);
            this.text.position.set(...this.TypeOptions.wordPosition);
            this.text.rotation.set(Math.PI, 0, 0);
            this.text.scale.set(...this.TypeOptions.wordScale);

            this.renderTargetScene.add(this.text);
        }
    }

    createMesh(){
        this.geometry = this.TypeOptions.geometry;

        this.material = new THREE.ShaderMaterial({
            vertexShader: this.TypeOptions.vertex,
            fragmentShader: this.TypeOptions.fragment,
            uniforms: {
                uTime: {value : 0},
                uTexture: {value: this.renderTarget?.texture}
            },
            defines: {
                PI: Math.PI
            },
            side: THREE.DoubleSide
        });

        if(this.geometry){
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.mesh.position.set(...this.TypeOptions.position);
            this.mesh.rotation.set(...this.TypeOptions.rotation);
            this.mesh.lookAt(new THREE.Vector3());

            this.mesh.onBeforeRender = (renderer) => {
                renderer.setRenderTarget(this.renderTarget);
                if(this.renderTargetScene && this.renderTargetCamera){
                    renderer.render(this.renderTargetScene, this.renderTargetCamera);
                }
                renderer.setRenderTarget(null);
            }

            this.add(this.mesh);
            
            if(this.GLInstance){
                this.GLInstance.scene?.add(this);
            }
        }
    }

    updateTime(time: string | number){
        if(this.material){
            this.material.uniforms.uTime.value = time;
        }
    }
    
    init(options: OptionsInit & {rotation: Vector3Init}, webgl__ref: RefObject<HTMLDivElement>){

        this.TypeOptions = {
            word: options.word,
            color: options.color,
            fill: options.fill,
            wordPosition: options.position.texture,
            wordScale: options.scale,
            position: options.position.mesh,
            rotation: options.rotation || [0, 0, 0],
            geometry: options.geometry,
            vertex: options.shaders.vertex,
            fragment: options.shaders.fragment,
            fontFile: options.font.file || OrbitronFont,
            fontAtlas: options.font.atlas || OrbitronFontAtlas,
        };

        this.GLInstance = new GL(webgl__ref);

        loadFont(this.TypeOptions.fontFile, (err: Error, font: string) => {
            this.fontGeometry = createGeometry({
                font,
                text: this.TypeOptions.word
            })

            this.loader = new THREE.TextureLoader();

            if(this.TypeOptions.fontAtlas?.src){
                this.loader.load(this.TypeOptions.fontAtlas?.src, (texture) => {
                    this.fontMaterial = new THREE.RawShaderMaterial(
                        MSDFShader({
                            map: texture,
                            side: THREE.DoubleSide,
                            transparent: true,
                            negate: false,
                            color: this.TypeOptions.color
                        })
                    );

                    this.createRenderTarget();
                    this.createMesh();
                })
            }
        });
        
    }
}