import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'
import useEquipmentStore from '../store/equipmentStore'

const HumanModel = ({ gender }) => {
  const groupRef = useRef()
  const [rotation, setRotation] = useState([0, 0, 0])
  const selectedEquipment = useEquipmentStore((state) => state.selectedEquipment)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head */}
      <Sphere args={[0.3, 32, 32]} position={[0, 1.7, 0]}>
        <meshStandardMaterial color="#c9b5a0" />
      </Sphere>

      {/* Torso */}
      <Box args={[0.4, 0.8, 0.2]} position={[0, 0.8, 0]}>
        <meshStandardMaterial 
          color={selectedEquipment.clothing?.color || '#4a5f3f'} 
        />
      </Box>

      {/* Arms */}
      <Box args={[0.15, 0.8, 0.15]} position={[-0.3, 0.8, 0]}>
        <meshStandardMaterial 
          color={selectedEquipment.clothing?.color || '#4a5f3f'} 
        />
      </Box>
      <Box args={[0.15, 0.8, 0.15]} position={[0.3, 0.8, 0]}>
        <meshStandardMaterial 
          color={selectedEquipment.clothing?.color || '#4a5f3f'} 
        />
      </Box>

      {/* Legs */}
      <Box args={[0.15, 0.8, 0.15]} position={[-0.15, -0.2, 0]}>
        <meshStandardMaterial 
          color={selectedEquipment.clothing?.color || '#4a5f3f'} 
        />
      </Box>
      <Box args={[0.15, 0.8, 0.15]} position={[0.15, -0.2, 0]}>
        <meshStandardMaterial 
          color={selectedEquipment.clothing?.color || '#4a5f3f'} 
        />
      </Box>

      {/* Plate Carrier */}
      {selectedEquipment.secondLevel?.vest && (
        <Box args={[0.5, 0.9, 0.25]} position={[0, 0.8, -0.1]}>
          <meshStandardMaterial 
            color={selectedEquipment.secondLevel.vest.color || '#3a3a3a'}
            emissive="#1a1a1a"
          />
        </Box>
      )}

      {/* Boots */}
      {selectedEquipment.footwear && (
        <>
          <Box args={[0.15, 0.15, 0.2]} position={[-0.15, -1.0, 0]}>
            <meshStandardMaterial color={selectedEquipment.footwear.color} />
          </Box>
          <Box args={[0.15, 0.15, 0.2]} position={[0.15, -1.0, 0]}>
            <meshStandardMaterial color={selectedEquipment.footwear.color} />
          </Box>
        </>
      )}
    </group>
  )
}

const Viewer3D = () => {
  const gender = useEquipmentStore((state) => state.modelGender)

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 1, 3]} />
      <OrbitControls autoRotate autoRotateSpeed={2} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <HumanModel gender={gender} />
    </Canvas>
  )
}

export default Viewer3D