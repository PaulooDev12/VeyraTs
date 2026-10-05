precision mediump float;

uniform sampler2D u_img;
uniform vec2 u_resolution;
uniform vec2 u_direction;
varying vec2 v_tex_coord;

/*
valores a serem usados
1.3846153846
0.3162162162
0.2270270270
3.2307692308
0.0702702703

*/


// blur com glsl

// objetivo calcular a posição de pixels vizinhos

// como funciona 
// 1 sampler2D lemos a imagem u_img
// passamos duas váriaveis uniformes resolução e direção
// calculamos a posição dos pixels vizinhos as cores vizinhas são somadas e formam a nova cor formando o efeito de desfoque

void main(){

    vec4 color = vec4(0.0);

    // calculo de offsets 
    vec2 off1 = vec2(1.3846153846 * u_direction) / u_resolution;
    vec2 off2 = vec2(3.2307692308 * u_direction) / u_resolution;

    color += texture2D(u_img, v_tex_coord) * 0.2270270270;
    color += texture2D(u_img, v_tex_coord + off1) * 0.3162162162; 
    color += texture2D(u_img, v_tex_coord - off1 ) * 0.3162162162; 
    color += texture2D(u_img, v_tex_coord + off2) * 0.0702702703; 
    color += texture2D(u_img, v_tex_coord - off2 ) * 0.0702702703; 
    gl_FragColor = color;
}