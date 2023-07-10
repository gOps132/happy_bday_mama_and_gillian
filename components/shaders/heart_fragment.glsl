varying vec3 vertex_normal;

void main() {
    //atmospheric effect
    float intensity = pow(0.1 - dot(vertex_normal, vec3(0.0,0.0,1.0)), 2.0);

	// gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
	// gl_FragColor = vec4(228.0, 0.0, 1.0, 1.0) * intensity;
	gl_FragColor = vec4(255.0, 255.0, 255.0, 1.0) * intensity;
}

// uniform float u_time;
// uniform sampler2D mat_texture;
// varying vec2 vUv; // vec2[0,0.24]

// vec3 colorA = vec3(0.912,0.191,0.652);
// vec3 colorB = vec3(1.000,0.777,0.052);

// void main() {
// 	// texture2D(mat_texture, vUv);
//     // vec2 normalizedPixel = gl_FragCoord.xy/600.0;
//     // vec3 color = mix(colorA, colorB, normalizedPixel.x);
//     // gl_FragColor = vec4(color,1.0);
//     gl_FragColor = texture2D(mat_texture, vUv);
// }

// uniform sampler2D mat_texture;

// uniform vec2 resolution;

// varying vec3 eyeVector;
// varying vec3 worldNormal;
// varying vec3 viewDirection;

// float ior = 2.42;

// void main() {
// 	// get screen coordinates
// 	vec2 uv = gl_FragCoord.xy / resolution;

// 	vec3 normal = worldNormal;
// 	// calculate refraction and add to the screen coordinates
// 	vec3 refracted = refract(eyeVector, normal, 1.0/ior);
// 	uv += refracted.xy;
	
// 	// sample the background texture
// 	vec4 tex = texture2D(mat_texture, uv);

// 	vec4 output = tex;
// 	gl_FragColor = vec4(output.rgb, 1.0);
// }