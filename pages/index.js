import * as THREE from "three";

import {useEffect, useState, useRef } from "react";

import {Canvas, useFrame, useLoader} from "@react-three/fiber";

import styles from "../styles/Home.module.css";

import OrbitControls from "../components/orbit_controls";

import Star from "../components/star";
import SpotLight from "../components/spot_light";
import Zoom from "@/components/zoom";

import Heart from "../components/Scene";
import Cake from "@/components/Cake";

import Text from "../components/text";

import { TextureLoader } from 'three/src/loaders/TextureLoader';

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
		group_ref.current.rotation.y += props.y ? b * 0.0005 : 0;
		group_ref.current.rotation.z +=	props.x ? a * 0.0005 : 0;
		group_ref.current.rotation.x += props.z ? a * 0.0005 : 0;
	});

	return (
		<>
			<group ref={group_ref}>
				{props.children}
			</group>
		</>
	)
}

function Photos() {
	const tex_01 = useLoader(TextureLoader, 'textures/mum_02.jpg');
	const tex_02 = useLoader(TextureLoader, 'textures/gillian_01.jpg');
	return (
		<Bob y>
			<mesh
				rotation={[0, (Math.PI / 4), 0]}
				position={[-100,20,-30]}
			>
				<planeGeometry args={[200,200]}/>
				<meshBasicMaterial
					color={0xd3d3d3}
					map={tex_01}
					side={THREE.FrontSide}
				/>
			</mesh>
			<mesh
				rotation={[0, (Math.PI / -4), 0]}
				position={[100,20,-30]}
			>
				<planeGeometry args={[200,200]}/>
				<meshBasicMaterial 
					color={0xd3d3d3}
					map={tex_02}
					side={THREE.FrontSide}
				/>
			</mesh>
		</Bob>
	);
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
				<ambientLight intensity={0.2} fallback={null}/>
				<directionalLight 
					position={[0, 300, 100]}
					intensity={0.2} fallback={null}/>
				<SpotLight 
					color={0x800080}
				/>
				<Star stars={20000}/>
				<Zoom f_pos={140} />
				<Photos/>
				<Bob x z>
					<Text 
						position={[0,1,0]}
						scale={10}
						text={"Happy Birthday!"}
					/>
					<Text 
						position={[0,-11,0]}
						scale={8}
						text={"July 11, 2023"}
					/>
					<Cake position={[0,-90,0]} scale={8.5}/>
				</Bob>
			</Canvas>
		</div>
	)
}
