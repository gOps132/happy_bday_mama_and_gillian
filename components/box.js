import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
	const texture = useLoader(TextureLoader, "../textures/diamond_texture_01.jpg")
	return (
		<mesh {...props} recieveShadow={true} castShadow>
			<boxBufferGeometry />
			<meshPhysicalMaterial map={texture} color={"white"} />
		</mesh>
  );
}
export default Box;