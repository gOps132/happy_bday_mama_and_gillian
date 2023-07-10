import React, { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function SpotLight(props) {
	const texture = useLoader(TextureLoader, "../textures/diamond_texture_01.jpg");

	let spot_ref = useRef();
	const { camera } = useThree();
	useFrame(() => {
		spot_ref.current.position.x = 
			camera.position.x 
			- 
			10;
		spot_ref.current.position.y = 
			camera.position.y 
			- 
			10;
		spot_ref.current.position.z = 
			camera.position.z;
		// console.log(spot_ref.current.position)
	});

	return (
		<spotLight
			{...props}
			ref={spot_ref}
			intensity={4}
			angle={1}
			penumbra={1}
			// position={[0, 0, 2000]}
			decay={50}
			// color={0xE40046}
			// map={texture}
		/>
	)
}
