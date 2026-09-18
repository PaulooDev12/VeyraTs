import vsSource from './glsl/shader-1/chr.vert?raw';
import fsSource from './glsl/shader-1/chr.vert?raw';

export class ShaderRenderer{
    private gl: WebGLRenderingContext;
    private program: WebGLProgram;

    private positionLocation: number;
    private texCoordLocation: number;

    private timeLocation: WebGLUniformLocation | null;
    private intensidadeLocation: WebGLUniformLocation | null;
    private textureLocation: WebGLUniformLocation | null;

    private startTime: number = 0;

    public intensidade: number = 1.0;

    constructor(canvas: HTMLCanvasElement){
        const gl = canvas.getContext('webgl');
        if(!gl) throw new Error('WebGL not supported');

        this.program = this.createProgram(vsSource,fsSource);

        this.gl = gl;
        this.positionLocation = this.gl.getAttribLocation(this.program, "a_position");
        this.texCoordLocation = this.gl.getAttribLocation(this.program, "a_tex_coord");

        this.timeLocation = this.gl.getUniformLocation(this.program, "u_time");
        this.intensidadeLocation = this.gl.getUniformLocation(this.program, "u_intensidade");
        this.textureLocation = this.gl.getUniformLocation(this.program, "tex0");
        this.setupGeometry();
    }
    private createProgram(vs: string, fs: string): WebGLProgram{
        const vertexShader = this.compileShader(this.gl.VERTEX_SHADER, vs);
        const fragmentShader = this.compileShader(this.gl.FRAGMENT_SHADER, fs);
        const program = this.gl.createProgram()!;
        this.gl.attachShader(program, vertexShader)
        this.gl.attachShader(program, fragmentShader);

        if(!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)){
            throw new Error("Erro na criação do programa " + this.gl.getProgramInfoLog(program));
        }
        return program;
    }

    private compileShader(type: number, source: string): WebGLShader{
        const shader = this.gl.createShader(type)!;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)){
            throw new Error("erro no shader " + this.gl.getShaderInfoLog(shader));
        }
        return shader;
    }
    private setupGeometry(){
        const vertexs = new Float32Array([
          -1.0, 1.0,        0.0, 1.0,
          -1.0, -1.0,       0.0, 0.0,
           1.0,  1.0,       1.0, 1.0,
           1.0, -1.0,       1.0, 0.0
        ]);
        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexs, this.gl.STATIC_DRAW);

        const stride = 4 * Float32Array.BYTES_PER_ELEMENT;

        this.gl.enableVertexAttribArray(this.positionLocation);
        this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, false, stride, 0);

        const offsetUV = 2 * Float32Array.BYTES_PER_ELEMENT;
        this.gl.enableVertexAttribArray(this.texCoordLocation);
        this.gl.vertexAttribPointer(this.texCoordLocation,2, this.gl.FLOAT, false, stride, offsetUV);
    }
    public loadTexture(url: string): Promise<void>{
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = url;
            image.onload = () => {
                const texture = this.gl.createTexture();
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);

                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
                resolve();
            };
            image.onerror = (err) => reject(err);
        })
    }
    public init(){
        this.startTime = performance.now();
        this.gl.useProgram(this.program);
        this.loop();
    }
    private loop = () => {
        const time = (performance.now() - this.startTime) / 1000.0;
        this.gl.clearColor(0.0, 0.0 ,0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);

        this.gl.uniform1f(this.timeLocation, time);
        this.gl.uniform1f(this.intensidadeLocation, this.intensidade);

        this.gl.uniform1f(this.textureLocation, 0);

        requestAnimationFrame(this.loop);
    }
}