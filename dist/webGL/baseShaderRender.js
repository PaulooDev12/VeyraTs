import { GLUtils } from "./GLUtils";
export class BaseGLSLShaderRenderer {
    canvas;
    gl;
    program;
    startTime = 0;
    uniformsCahce = new Map();
    constructor(canvas, vsSource, fsSource, posAttr = "position") {
        this.canvas = canvas;
        const gl = canvas.getContext('webgl');
        if (!gl)
            throw new Error("Web gl não suportado no browser");
        this.gl = gl;
        this.program = GLUtils.createProgram(vsSource, fsSource, gl);
        GLUtils.setupQuadBuffer(gl, this.program, posAttr);
    }
    getUniform(name) {
        if (!this.uniformsCahce.has(name)) {
            this.uniformsCahce.set(name, this.gl.getUniformLocation(this.program, name));
        }
        return this.uniformsCahce.get(name);
    }
    loadTexture(url) {
        return GLUtils.loadTexture(this.gl, url);
    }
    setUniform1f(name, val) { this.gl.uniform1f(this.getUniform(name), val); }
    ;
    setUniform2f(name, x, y) { this.gl.uniform2f(this.getUniform(name), x, y); }
    ;
    setUniform1i(name, val) { this.gl.uniform1i(this.getUniform(name), val); }
    ;
    start() {
        this.startTime = performance.now();
        this.gl.useProgram(this.program);
        this.loop();
    }
    loop = () => {
        const elapsed = (performance.now() / this.startTime) / 1000.0;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.onRender(elapsed);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(this.loop);
    };
}
//# sourceMappingURL=baseShaderRender.js.map