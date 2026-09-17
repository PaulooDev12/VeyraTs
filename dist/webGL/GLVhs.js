import vsSource from './glsl/vhs.vert?raw';
import fsSource from './glsl/vhs.frag?raw';
export class VHSRenderer {
    canvas;
    gl;
    program;
    timeLocation = null;
    distorcionLocation = null;
    forcaLocation = null;
    startTime = 0;
    distorcion = 1.0;
    forca = 0.2;
    constructor(canvasElement) {
        this.canvas = canvasElement;
        const context = this.canvas.getContext('webgl');
        if (!context)
            throw new Error('WebGL not compatible w this browser');
        this.gl = context;
        this.program = this.createProgram();
        this.configBufferAndAttributes();
    }
    createProgram() {
        const gl = this.gl;
        const vertexShader = this.compileShader(gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.compileShader(gl.FRAGMENT_SHADER, fsSource);
        const programa = gl.createProgram();
        if (!programa)
            throw new Error("Não foi possivel criar o programa");
        gl.attachShader(programa, vertexShader);
        gl.attachShader(programa, fragmentShader);
        gl.linkProgram(programa);
        if (!gl.getProgramParameter(programa, gl.LINK_STATUS)) {
            throw new Error(`Erro ao linkar programa: ${gl.getProgramInfoLog(programa)}`);
        }
        // Buscando locais na GPU (Devem bater exatamente com o .frag)
        this.timeLocation = gl.getUniformLocation(programa, "u_time");
        this.distorcionLocation = gl.getUniformLocation(programa, "u_distorcion");
        this.forcaLocation = gl.getUniformLocation(programa, "u_forca");
        return programa;
    }
    compileShader(type, source) {
        const gl = this.gl;
        const shader = gl.createShader(type);
        if (!shader)
            throw new Error("Erro ao criar shader");
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            const log = gl.getShaderInfoLog(shader);
            gl.deleteShader(shader);
            throw new Error(`Erro na compilação do shader (${type === gl.VERTEX_SHADER ? 'vertex' : 'Fragment'}): ${log}`);
        }
        return shader;
    }
    configBufferAndAttributes() {
        const gl = this.gl;
        const geometry = new Float32Array([
            -1.0, 1.0, 0.0, 1.0,
            -1.0, -1.0, 0.0, 0.0,
            1.0, 1.0, 1.0, 1.0,
            1.0, -1.0, 1.0, 0.0,
        ]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, geometry, gl.STATIC_DRAW);
        const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
        // CORREÇÃO: "a_position" corrigido (estava "a_positon")
        const aPosition = gl.getAttribLocation(this.program, "a_position");
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, stride, 0);
        const aTexCoord = gl.getAttribLocation(this.program, "a_tex_coord");
        gl.enableVertexAttribArray(aTexCoord);
        gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, stride, 2 * Float32Array.BYTES_PER_ELEMENT);
    }
    loadTexture(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.crossOrigin = 'anonymous';
            image.src = url;
            image.onload = () => {
                const gl = this.gl;
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                resolve();
            };
            image.onerror = (err) => reject(err);
        });
    }
    init() {
        this.startTime = performance.now();
        this.gl.useProgram(this.program);
        this.loop();
    }
    loop = () => {
        const gl = this.gl;
        const tempoDecorrido = (performance.now() - this.startTime) / 1000.0;
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT); // Faltava limpar a tela a cada frame!
        gl.uniform1f(this.timeLocation, tempoDecorrido);
        // CORREÇÃO: Passando o local correto distorcionLocation aqui
        gl.uniform1f(this.distorcionLocation, this.distorcion);
        gl.uniform1f(this.forcaLocation, this.forca);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(this.loop);
    };
}
//# sourceMappingURL=GLVhs.js.map