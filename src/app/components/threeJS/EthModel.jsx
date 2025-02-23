import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3

export function EthModel(props) {
  const { nodes, materials } = useGLTF('./model/EthModel.glb')
  // const ref = useRef()
  // const tl = useRef(null)

  // const scroll = useScroll();

  // useFrame(() => {
  //   if (tl.current) {
  //     tl.current.seek(scroll.offset * tl.current.duration());
  //   }
  // })

  // useLayoutEffect(() => {
  //   if (!ref.current) return;
  //   tl.current = gsap.timeline()

  //   //vertical animation

  //   tl.current.to(ref.current.position, {
  //     duration: 2,
  //     y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
  //   },0);
  // },[])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./model/EthModel.glb')
