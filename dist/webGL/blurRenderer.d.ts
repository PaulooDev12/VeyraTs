import { BaseGLSLShaderRenderer } from "./baseShaderRender";
export declare class blurShaderRenderer extends BaseGLSLShaderRenderer {
    directionX: number;
    directionY: number;
    private texture;
    constructor(canvas: HTMLCanvasElement);
    setTexture(url: string): Promise<void>;
    protected onRender(elapsedTime: number): void;
}
//# sourceMappingURL=blurRenderer.d.ts.map