import { BaseGLSLShaderRenderer } from './baseShaderRender';
export declare class ShaderRenderer extends BaseGLSLShaderRenderer {
    private texture;
    intensidade: number;
    constructor(canvas: HTMLCanvasElement);
    setTexture(url: string): Promise<void>;
    protected onRender(elapsedTime: number): void;
}
//# sourceMappingURL=RenderShader.d.ts.map