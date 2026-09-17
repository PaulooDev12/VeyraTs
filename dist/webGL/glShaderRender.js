export class GlRenderer {
    canvas;
    gl;
    constructor(canvasId) {
        const elemento = document.getElementById(canvasId);
        if (!(elemento instanceof HTMLCanvasElement)) {
            throw new Error("O elemento não é um canvas");
        }
        this.canvas = elemento;
        const context = this.canvas.getContext("webgl");
        if (!context)
            throw new Error("WebGL não suportado");
        this.gl = context;
    }
    cleanScreen(r, g, b, a) {
        const gl = this.gl;
        gl.clearColor(r, g, b, a);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    drawSquare() {
        const gl = this.gl;
        const vsSource = `
        attribute vec2 a_pos;
        void main(){
        gl_Position = vec4(a_pos, 0.0, 1.0);
        }
        `;
        const fsSource = `
        void main(){
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }`;
        const vertexShader = this.createShader(gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fsSource);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        const vertexs = new Float32Array([
            -0.5, 0.5,
            -0.5, -0.5,
            0.5, 0.5,
            0.5, -0.5,
        ]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexs, gl.STATIC_DRAW);
        const attributePositionLocation = gl.getAttribLocation(program, "a_pos");
        gl.enableVertexAttribArray(attributePositionLocation);
        gl.vertexAttribPointer(attributePositionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        return shader;
    }
}
//# sourceMappingURL=glShaderRender.js.map