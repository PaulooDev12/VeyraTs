export declare class VHSRenderer {
    private canvas;
    private gl;
    private program;
    private timeLocation;
    private distorcionLocation;
    private forcaLocation;
    private startTime;
    distorcion: number;
    forca: number;
    constructor(canvasElement: HTMLCanvasElement);
    private createProgram;
    private compileShader;
    private configBufferAndAttributes;
    loadTexture(url: string): Promise<void>;
    init(): void;
    private loop;
}
//# sourceMappingURL=GLVhs.d.ts.map