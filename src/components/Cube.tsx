import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

import * as THREE from 'three'

function RotatingCube() {

  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {

    meshRef.current.rotation.x += 0.001
    meshRef.current.rotation.y += 0.001

  })

  return (

    <mesh ref={meshRef}>

      <boxGeometry args={[3, 3, 3]} />

      <MeshDistortMaterial
        color="#38bdf8"
        speed={0.1}
        distort={0.2}
      />

    </mesh>

  )

}

export default function Cube() {

  return (

    <div className="cube-container">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[2, 2, 2]}
        />

        <RotatingCube />

      </Canvas>

    </div>

  )

}