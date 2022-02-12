//@ts-nocheck
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import glsl from 'glslify'
import Roboto from '../assets/Roboto_Bold.json'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { Group } from 'three/src/objects/Group'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

const SHADERS = {
    vertex: glsl`
    attribute float size;
    attribute vec3 color;

    varying vec3 vColor;

    void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size;
        gl_Position = projectionMatrix * mvPosition;
    
    }`,
    fragment: glsl`
    uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
        if (texture2D(pointTexture,gl_PointCoord).g < 0.7) discard;
        gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
			}`,
}

export default function Model() {
    const mount = useRef(null)

    useEffect(() => {
        const elContent = document.querySelector('.search__model')
        const pixelRatio = 2

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            10,
            elContent.offsetWidth / elContent.offsetHeight,
            0.1,
            100,
        )
        camera.position.z = 60
        const renderer = new THREE.WebGLRenderer()
        renderer.setPixelRatio(pixelRatio)
        renderer.setSize(elContent.offsetWidth, elContent.offsetHeight)
        elContent.appendChild(renderer.domElement)

        const renderScene = new RenderPass(scene, camera)

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(elContent.offsetWidth, elContent.offsetHeight),
            1.5,
            0.4,
            0.85,
        )
        bloomPass.threshold = 0
        bloomPass.strength = 0.6

        const composer = new EffectComposer(renderer)
        composer.setPixelRatio(pixelRatio)
        composer.addPass(renderScene)
        composer.addPass(bloomPass)

        const group = new Group()
        scene.add(group)

        const sparkles = []
        const sparklesGeometry = new THREE.BufferGeometry()
        const sparklesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                pointTexture: {
                    value: new THREE.TextureLoader().load('dotTexture.png'),
                },
            },
            vertexShader: SHADERS.vertex,
            fragmentShader: SHADERS.fragment,
            depthTest: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        })
        const points = new THREE.Points(sparklesGeometry, sparklesMaterial)
        group.add(points)

        const loader = new FontLoader()
        const textGeometry = new TextGeometry('ОСЕТИЯ', {
            font: loader.parse(Roboto),
            size: 2,
            height: 0.2,
        })

        const text = new THREE.Mesh(textGeometry)
        const p1 = new THREE.Vector3()
        let sampler = null
        const lines = []
        let linesColors = [
            new THREE.Color(0x125d98).multiplyScalar(0.5),
            new THREE.Color(0xcfd6de).multiplyScalar(0.5),
        ]
        function dots() {
            sampler = new MeshSurfaceSampler(text).build()

            for (let i = 0; i < 2; i++) {
                sampler.sample(p1)
                const linesMesh = {
                    colorIndex: i % 2,
                    previous: p1.clone(),
                }
                lines.push(linesMesh)
            }

            renderer.setAnimationLoop(render)
        }

        const tempSparklesArrayColors = []
        function findNextVector(line) {
            let ok = false
            while (!ok) {
                sampler.sample(p1)

                if (p1.distanceTo(line.previous) < 2) {
                    line.previous = p1.clone()

                    const spark = new Sparkle()
                    spark.setup(line.previous)
                    sparkles.push(spark)

                    tempSparklesArrayColors.push(
                        linesColors[line.colorIndex].r,
                        linesColors[line.colorIndex].g,
                        linesColors[line.colorIndex].b,
                    )
                    sparklesGeometry.setAttribute(
                        'color',
                        new THREE.Float32BufferAttribute(tempSparklesArrayColors, 3),
                    )

                    ok = true
                }
            }
        }

        class Sparkle extends THREE.Vector3 {
            setup(origin) {
                this.add(origin).multiplyScalar(2)
                this.dest = origin

                this._size = Math.random() * 5 + 0.5
                this.size = 1
                this.scaleSpeed = Math.random() * 0.03 + 0.03
                this.stop = false
            }
            update() {
                this.x += (this.dest.x - this.x) * 0.08
                this.y += (this.dest.y - this.y) * 0.08
                this.z += (this.dest.z - this.z) * 0.08
                if (this.size < this._size) {
                    this.size += this.scaleSpeed
                } else {
                    // if (this.distanceTo(this.dest) < 0.1) {
                    //   this.stop = true;
                    // }
                }
            }
        }

        let tempSparklesArray = []
        let tempSparklesArraySizes = []
        dots()
        function render(a) {
            group.position.x = -5.4
            group.position.y = -1

            if (sparkles.length < 20000) {
                lines.forEach((l) => {
                    findNextVector(l)
                    findNextVector(l)
                    findNextVector(l)
                })
            }

            sparkles.forEach((s, i) => {
                if (!s.stop) {
                    s.update()
                }
                tempSparklesArray[i * 3] = s.x
                tempSparklesArray[i * 3 + 1] = s.y
                tempSparklesArray[i * 3 + 2] = s.z
                tempSparklesArraySizes[i] = s.size
            })
            sparklesGeometry.setAttribute(
                'position',
                new THREE.Float32BufferAttribute(tempSparklesArray, 3),
            )
            sparklesGeometry.setAttribute(
                'size',
                new THREE.Float32BufferAttribute(tempSparklesArraySizes, 1),
            )

            renderer.render(scene, camera)
        }

        window.addEventListener('resize', onWindowResize, false)

        function onWindowResize() {
            camera.aspect = elContent.offsetWidth / elContent.offsetHeight
            camera.updateProjectionMatrix()
            renderer.setSize(elContent.offsetWidth, elContent.offsetHeight)
        }
    }, [])

    return <div ref={mount} />
}
