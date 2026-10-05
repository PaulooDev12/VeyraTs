export declare class GLUtils {
    private static quad32Array;
    static createProgram(vsSource: string, fsSource: string, gl: WebGLRenderingContext): WebGLProgram;
    private static compileShader;
    static setupQuadBuffer(gl: WebGLRenderingContext, program: WebGLProgram, posName?: string, uvName?: string): void;
    static loadTexture(gl: WebGLRenderingContext, url: string): Promise<WebGLTexture>;
}
//# sourceMappingURL=GLUtils.d.ts.map