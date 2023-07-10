import * as THREE from "three";

import { use, useEffect, useState, useRef } from "react";

import {Canvas, useFrame, useThree} from "@react-three/fiber";

import styles from "../styles/Home.module.css";

import OrbitControls from "../components/orbit_controls";

import Star from "../components/star";
import SpotLight from "../components/spot_light";
import Zoom from "@/components/zoom";

import Heart from "../components/Scene";
import Cake from "@/components/Cake";

import Text from "../components/text";

import { TextureLoader } from "three";

function Bob(props) {
	const group_ref = useRef();
	const [objects, set_objects] = useState();
	useEffect(() => {
		set_objects(group_ref.current.children);
	}, [group_ref]);

	useFrame(({clock}) => {
		let t = clock.getElapsedTime();
		let a = Math.cos(t);
		let b = Math.sin(t);
		group_ref.current.rotation.y += b * 0.001;
		group_ref.current.rotation.x += a * 0.001;
	});

	return (
		<>
			<group ref={group_ref}>
				{props.children}
			</group>
		</>
	)
}

export default function Home() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					// default position before zoom
					position: [0, 0, 2000]
				}}
			>
				<OrbitControls
					autoRotate={false}
					enableDamping={true}
					enableZoom={true}
					enablePan={true}
					dampingFactor={0.5}
					maxDistance={1000}
					minDistance={100}
				/>
				<ambientLight intensity={0.5} fallback={null}/>
				<SpotLight 
					color={0x800080}
				/>
				<Star stars={20000}/>
				<Zoom f_pos={100} />
				<mesh
					rotation={[0, (Math.PI / 4), 0]}
					position={[-80,20,-30]}
				>
					<planeGeometry args={[150,150]}/>
					<meshBasicMaterial

						color={"blue"}
						side={THREE.FrontSide}
					/>
				</mesh>
				<mesh
					rotation={[0, (Math.PI / -4), 0]}
					position={[80,20,-30]}
				>
					<planeGeometry args={[150,150]}/>
					<meshBasicMaterial 
						color={"blue"}
						side={THREE.FrontSide}
					/>
				</mesh>
				<Text 
					position={[0,-10,0]}
					scale={10}
					text={"Happy Birthday!"}
				/>
				<Text 
					position={[0,-20,0]}
					scale={8}
					text={"July 11, 2023"}
				/>
				<Bob>
					<Cake position={[0,-90,0]} scale={8.5}/>
				</Bob>
			</Canvas>
		</div>
	)
}
