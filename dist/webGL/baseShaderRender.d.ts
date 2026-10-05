export declare abstract class BaseGLSLShaderRenderer {
    protected canvas: HTMLCanvasElement;
    protected gl: WebGLRenderingContext;
    protected program: WebGLProgram;
    private startTime;
    private uniformsCahce;
    constructor(canvas: HTMLCanvasElement, vsSource: string, fsSource: string, posAttr?: string);
    protected getUniform(name: string): WebGLUniformLocation | null;
    loadTexture(url: string): Promise<WebGLTexture>;
    protected setUniform1f(name: string, val: number): void;
    protected setUniform2f(name: string, x: number, y: number): void;
    protected setUniform1i(name: string, val: number): void;
    protected abstract onRender(elapsedTime: number): void;
    start(): void;
    private loop;
}
//# sourceMappingURL=baseShaderRender.d.ts.map