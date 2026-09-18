precision mediump float;

uniform float u_time;
uniform float u_intensidade;
uniform sampler2D tex0;
varying vec2 v_tex_coord;

void main(){
    vec2 uv = v_tex_coord;
    vec2 centro = vec2(0.5,0.5);
    vec2 direction = uv - centro;
    float peso = uv.x + uv.y;
    float offset = uv.x + sin(peso * u_intensidade * 0.55) * sin((uv.x * length(direction)) * 0.45);
    float water_effect = uv.x += sin(uv.y * peso) * cos(u_intensidade * uv.y) * offset;
    vec4 cor = texture2D(tex0, uv);
    cor.rgb *= water_effect + u_time * 0.65;
    cor.a = 1.0;
    gl_FragColor = cor;
}