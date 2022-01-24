//@ts-nocheck
import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

import Model from './Model'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

const Scene = () => {
    return (
        <Canvas style={{ background: '#141414', width: '1366px', height: '610px' }}>
            <ambientLight intensity={1} />
            <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
            />
            <Suspense fallback={<Loader />}>
                
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}

export default Scene
