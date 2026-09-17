precision mediump float;

uniform float u_distorcion; 
uniform float u_forca;
uniform float u_time;
uniform sampler2D tex0;
varying vec2 v_tex_coord;

void main(){
    vec2 uv = v_tex_coord;
    vec2 center = vec2(0.5,0.5);
    vec2 direction = uv - center;
    float distancia = length(direction); 
    float multiplyer = 1.0 + (u_forca * distancia * distancia);
    uv = center + (direction * multiplyer);

    if(u_forca > 1.0){
        float clamp_area = 1.0 + (u_forca - 1.0) * 0.3;
        uv = clamp(uv, 0.0, clamp_area);
    }
    vec4 cor = texture2D(tex0, uv);
    cor.rgb *= vec3(0.55, 0.85, 1.35);


    float scan = sin(uv.y * 700.0 + u_time * 25.0) * u_distorcion; 
    cor.rgb *= 0.95 + scan * 0.05;

    gl_FragColor = cor;
}
