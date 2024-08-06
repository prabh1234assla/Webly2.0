import * as THREE from "three";
import { RefObject } from "react";

class GL {
    renderer: THREE.WebGLRenderer | null = null;
    camera: THREE.PerspectiveCamera | null = null;
    scene: THREE.Scene | null = null;
    clock: THREE.Clock | null = null;
    Ref: RefObject<HTMLDivElement>
    
    constructor(webgl__ref: RefObject<HTMLDivElement>){
        this.renderer = new THREE.WebGLRenderer({
            alpha: true
        })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x0f00a0, 0);

        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );

        this.camera.position.z = 50;

        this.scene = new THREE.Scene();

        this.clock = new THREE.Clock();

        this.Ref = webgl__ref;

        if(this.init){
            this.init();
        }
    }

    render(){
        if(this.scene && this.camera){
            this.renderer?.render(this.scene, this.camera);
        }
    }

    animate(){
        requestAnimationFrame(this.animate.bind(this));
        
        if(this.scene){
            for(let i=0; i<this.scene.children.length; ++i){
                const SceneChildren = this.scene.children[i];
                (SceneChildren as THREE.Object3D).updateTime(this.clock?.getElapsedTime());
            }
        }

        this.render();
    }

    resize(){
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        if(this.camera){
            this.camera.aspect = width / height;
        }
        this.camera?.updateProjectionMatrix();
        this.renderer?.setSize(width, height);
    }

    addEvents(){
        window.addEventListener("resize", this.resize.bind(this));
    }

    addToDom(){
        const canvas = this.renderer?.domElement;
        const container = this.Ref.current;

        console.log(canvas, container)
        container?.appendChild(canvas as Node);
    }

    init(){
        this.addToDom();
        this.animate();
        this.addEvents();
    }
  }

export default GL;