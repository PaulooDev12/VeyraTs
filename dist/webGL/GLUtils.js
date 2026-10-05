/*


⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⣤⣀⣀⡀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢄⢀⠀⡀⣠⣴⣾⣿⠿⠟⠛⠛⠛⠿⠿⠿⠽⠿⠿⠿⠿⠿⢶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡿⡵⣯⣾⣿⣿⠟⠉⢀⣤⠶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⢫⣮⢿⣿⡿⠛⠁⠠⠔⢋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠈⠻⣷⣦⠠⣃⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⢟⣵⡿⢻⡿⠋⠀⠀⣠⢴⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠈⢻⣷⣏⢫⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⢸⣿⣠⠋⠀⡠⣪⢞⡵⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣧⡻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⡙⢾⣿⣸⡟⠁⠀⢠⠞⠁⠋⠀⠀⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣷⡹⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⡇⢸⣿⠋⠀⢀⡶⠃⠀⠀⢠⠃⠜⠁⠀⣀⠀⠀⠀⠀⢀⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⣿⠏⣿⣇⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⡄⡼⠁⠀⢀⣾⠁⠀⠀⠀⡜⡸⠀⠀⣰⢻⠀⠀⠀⠀⢸⠉⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣆⠀⠀⠀⠀⠀⢿⢸⣿⢻⢱⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠁⢀⡟⠀⢠⢃⣾⠇⠀⠀⠀⢰⠁⠀⠀⣰⢃⢸⡄⡄⠀⠀⢸⢀⠘⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⢸⠀⠀⠀⢸⣾⠃⠈⠈⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⢠⠞⠀⡰⠃⣼⠏⠀⠀⠀⠀⡜⠀⠀⢰⠃⠉⠸⡇⣧⠀⠀⢸⠈⢦⠘⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⡀⠁⠀⠀⢸⡿⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣵⠃⠀⢰⠁⣼⠏⠀⠀⠀⠀⢀⠇⠀⢠⠟⠒⠒⠴⣷⣿⡀⠀⢸⠂⠀⠱⣄⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠈⠀⠀⠀⠀⠣⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⢋⠀⢀⠇⣸⠏⠀⠀⠀⠀⠀⡸⠄⢀⠎⠀⠀⠀⠀⠸⣇⢣⠀⢸⡄⠀⠀⠈⡴⠞⣆⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡾⢟⡇⡘⠃⡜⣼⣯⠀⠀⠀⠀⠀⠀⡇⢀⡞⠀⠀⠀⠀⠀⠀⢻⠈⢧⠸⡇⠀⠀⠀⠀⠀⠙⢆⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠐⠉⠀⡸⠀⠃⢰⣻⣯⠇⠀⠀⠀⠀⠀⢸⢁⣾⣤⣀⠀⠀⠀⠀⠀⠀⠀⠈⢷⡇⠀⠀⠀⠀⠀⠀⠈⠧⡀⠀⢠⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢀⣷⢣⠎⠀⠀⠀⠀⠀⠀⢹⡞⠀⠉⠛⠿⣶⣬⡒⠄⠀⠀⠀⠈⠋⠀⠀⠀⣀⡀⠀⣀⣀⣼⣦⡀⢇⠀⠀⠀⠀⠸⣧⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⣼⣯⠏⢀⣀⡀⠀⠀⠀⠀⢸⡇⢰⠿⠿⠿⠟⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⣯⣴⣾⡿⠛⠛⠉⠉⠳⡞⡆⠀⢀⣀⢰⠻⣆⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⣿⠋⠀⡜⠀⡇⠀⠀⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⢷⣶⠀⡼⠀⠹⣀⣺⠈⡏⠇⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡏⠀⠜⠁⠀⢀⠃⢰⠃⠀⣰⡆⠀⢸⠉⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢧⣄⣴⠋⢿⡀⢹⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⡞⠀⢸⢀⡞⠁⣸⠀⢸⣄⠀⢣⡀⠀⠀⠀⠀⠀⡤⠤⠤⢄⣀⠀⠀⠀⠀⠀⠀⠀⢀⠞⡟⡎⡧⠨⠀⠀⡇⠈⡇⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢠⠇⢀⣿⠏⠀⡰⢹⠀⢸⠈⠳⣤⣥⣄⣀⣀⣀⡀⠣⡀⠀⢀⠔⠀⠀⠀⠀⠀⣀⡴⠃⣼⡇⢠⠛⡄⠀⠀⢡⠀⢺⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⡼⠀⢸⠃⠀⢠⠃⠀⡆⢸⠀⠀⠈⠉⢻⣿⣿⣿⣿⡇⠈⠉⠁⠀⠀⠀⣠⠶⠾⠧⠄⠐⣻⢠⠃⠀⠱⡀⠀⠘⡄⠈⣆⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⣣⠤⠎⠉⠽⠁⠀⠘⠀⡲⠏⠀⠀⢱⢸⠀⠀⠀⠀⠀⠘⠀⣷⢄⠑⠦⠤⠒⢂⣩⡮⡞⠀⠀⠀⠀⢠⣧⠃⠀⠀⠀⢣⠠⠀⠃⠀⠘⠍⠙⢦⠤⣕⠾⡄⠀⠀⠀⠀
⠀⠀⠀⠀⢰⢹⡀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠀⣄⡀⠈⢿⠀⠀⠀⣰⢞⠇⠀⠘⠀⠙⣢⣠⠖⠉⠈⠀⠀⠈⢢⣀⠀⠰⠃⠀⠀⢀⡴⡞⠉⠀⠀⠀⠀⠀⠀⠈⠀⢸⠎⡇⠀⠀⠀⠀
⠀⠀⠀⢀⣾⣄⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣝⠢⡌⠀⠀⢸⣿⡆⠀⠀⠀⠀⢀⡨⠶⢀⡀⠀⣠⢦⡀⣸⣿⠀⠀⠀⣠⢞⣩⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⡼⢱⠀⠀⠀⠀
⠀⠀⠀⣼⣿⣾⣷⣍⠲⢄⡀⠀⠀⠀⠀⠀⢀⣾⣿⡷⣌⢢⡀⣾⠛⣿⡀⠀⠀⣠⡏⠀⠀⠀⢱⣘⢧⣠⢿⡏⢻⡧⢠⠟⡵⢿⣿⣧⠀⠀⠀⠀⠀⠀⣀⡤⢞⣡⣾⣾⣌⣆⠀⠀⠀
⠀⠀⢰⣿⣿⣿⣿⣿⣿⣶⣬⡑⠲⢤⣀⣠⣾⣿⣿⠃⠈⢢⢻⡇⠀⠙⠷⠞⠋⠉⢷⠀⠀⢠⡋⠛⠻⠻⠟⠁⠈⣻⢇⠞⠁⣹⣿⣿⣷⣄⣀⠤⠖⣋⣥⣶⣿⣿⣿⣿⣿⣼⡄⠀⠀
⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣌⣉⠙⠛⠓⠒⠚⣠⠏⠀⠀⠀⠀⠀⠀⢸⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⢿⡘⠒⠒⠚⠛⠋⣉⣨⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀
⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣽⠿⣹⠁⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠸⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢧⠀
⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⡴⡏⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢇
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢠⢰⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⡇⠀⢠⣀⣀⣀⣀⣦⠀⢹⣧⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠘⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⡇⠀⠀⠉⠉⠉⠉⠁⠀⠀⢿⣶⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿





Copyright veyra Ts 2026;

*/
export class GLUtils {
    static quad32Array = new Float32Array([
        -1.0, 1.0, 0.0, 1.0,
        -1.0, -1.0, 0.0, 0.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, -1.0, 1.0, 0.0
    ]);
    static createProgram(vsSource, fsSource, gl) {
        const vs = GLUtils.compileShader(gl, gl.VERTEX_SHADER, vsSource);
        const fs = GLUtils.compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
        const program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw new Error(`[WebGL Error] ${gl.getProgramInfoLog(program ?? "")}`);
        }
        return program;
    }
    static compileShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            const info = gl.getShaderInfoLog(shader);
            gl.deleteShader(shader);
            throw new Error(`[${Date.now}] - [Shader Error] - ${info}`);
        }
        return shader;
    }
    static setupQuadBuffer(gl, program, posName = "position", uvName = "a_tex_coord") {
        const vertices = GLUtils.quad32Array;
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
        const aPos = gl.getAttribLocation(program, posName);
        if (aPos !== -1) {
            gl.enableVertexAttribArray(aPos);
            gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, stride, 0);
        }
        const aUv = gl.getAttribLocation(program, uvName);
        if (aUv !== -1) {
            gl.enableVertexAttribArray(aUv);
            gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, stride, 2 * Float32Array.BYTES_PER_ELEMENT);
        }
    }
    static loadTexture(gl, url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                resolve(texture);
            };
            image.onerror = (err) => reject(new Error("Erro ao carregar imagem"));
            image.src = url;
        });
    }
}
//# sourceMappingURL=GLUtils.js.map