import { useFrame, useThree } from "@react-three/fiber";

export default function Zoom(props) {
    const { camera } = useThree();
    let x = 0;
    let stop_zoomin = false;
    let final_x_pos = props.f_pos ? props.f_pos : 100;
    useFrame(({clock}) => {
        if (!stop_zoomin) {
            // default position to 100
            let b = camera.position.z;
            if (b > final_x_pos && !stop_zoomin) {
                // camera.position.z = b - (b * (x * x * x));
                camera.position.z = b - (-b * (-x*x*x));
            } else
                stop_zoomin = true;
            if (x < 1) {
                x += 0.01;
                // console.log(Math.round(x * 100) / 100);
            }
        }
	})

    return (<></>);
}