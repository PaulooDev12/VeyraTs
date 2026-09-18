export declare class ShaderRenderer {
    private gl;
    private program;
    private positionLocation;
    private texCoordLocation;
    private timeLocation;
    private intensidadeLocation;
    private textureLocation;
    private startTime;
    intensidade: number;
    constructor(canvas: HTMLCanvasElement);
    private createProgram;
    private compileShader;
    private setupGeometry;
    loadTexture(url: string): Promise<void>;
    init(): void;
    private loop;
}
//# sourceMappingURL=RenderShader.d.ts.map