uniform sampler2D texture0;
uniform float wobble;
uniform float glow;
uniform float flare;
varying vec3 viewXY;
varying vec3 viewDir;
varying vec4 vertexColor;
varying float FDxLOG2E;
varying float classicDepth;
void main (void) {
  gl_FragColor = vertexColor;
}
