import { GLUtils } from "./GLUtils";

export abstract class BaseGLSLShaderRenderer{
    protected gl: WebGLRenderingContext;
    protected program: WebGLProgram;
    private startTime: number = 0;
    private uniformsCahce: Map<string, WebGLUniformLocation | null > = new Map();

    constructor(protected canvas: HTMLCanvasElement, vsSource: string, fsSource: string, posAttr = "position"){
        const gl = canvas.getContext('webgl');
        if(!gl) throw new Error("Web gl não suportado no browser");
        this.gl = gl;

        this.program = GLUtils.createProgram(vsSource, fsSource, gl);
        GLUtils.setupQuadBuffer(gl, this.program, posAttr);
    }

    protected getUniform(name: string): WebGLUniformLocation | null{
        if(!this.uniformsCahce.has(name)){
            this.uniformsCahce.set(name, this.gl.getUniformLocation(this.program, name));
        }
        return this.uniformsCahce.get(name)!;
    }

    public loadTexture(url: string): Promise<WebGLTexture>{
        return GLUtils.loadTexture(this.gl, url);
    }

    protected setUniform1f(name: string, val: number) {this.gl.uniform1f(this.getUniform(name), val)};
    protected setUniform2f(name: string, x: number, y: number) { this.gl.uniform2f(this.getUniform(name), x, y); };
    protected setUniform1i(name: string, val: number) { this.gl.uniform1i(this.getUniform(name), val); };

    protected abstract onRender(elapsedTime: number): void;

    public start(): void {
        this.startTime = performance.now();
        this.gl.useProgram(this.program);
        this.loop();
    }

    private loop = () => {
        const elapsed = (performance.now() / this.startTime) / 1000.0;
        this.gl.viewport(0,0, this.canvas.width, this.canvas.height);
        this.gl.clearColor(0,0,0,0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.onRender(elapsed);

        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(this.loop);
    }
}