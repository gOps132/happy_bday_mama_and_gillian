import React, { useEffect, useRef, useState } from "react";
import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

function Draggable(props){
	const group_ref = useRef();
	const controls_ref = useRef();
	const [objects, set_objects] = useState();
	const {camera, gl, scene} = useThree();
	useEffect(() => {
		set_objects(group_ref.current.children);
	}, [group_ref]);

	useEffect(() => {
		controls_ref.current.addEventListener("hoveron", () => {
			scene.orbitControls.enabled = false;
		});
		controls_ref.current.addEventListener("hoveroff", () => {
			scene.orbitControls.enabled = true;
		});
	}, [objects]);
	return (
		<>
			<group ref={group_ref}>
				<dragControls ref={controls_ref} args={[objects, camera, gl.domElement]}/>
				{props.children}
			</group>
		</>
	)
}

export default Draggable;