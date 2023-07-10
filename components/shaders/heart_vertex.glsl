varying vec3 vertex_normal;

void main() {
    vertex_normal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.9);
}

// varying vec2 vUv;

// void main() {
//     vUv = uv;
// 	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
// 	vec4 viewPosition = viewMatrix * modelPosition;
// 	vec4 projectedPosition = projectionMatrix * viewPosition;

// 	gl_Position = projectedPosition;
// }

// varying vec3 eyeVector;
// varying vec3 worldNormal;

// void main() {
// 	vec4 worldPosition = modelMatrix * vec4( position, 1.0);
// 	eyeVector = normalize(worldPosition.xyz - cameraPosition);
// 	worldNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;

// 	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }