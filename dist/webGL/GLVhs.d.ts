import { BaseGLSLShaderRenderer } from './baseShaderRender';
export declare class VHSRenderer extends BaseGLSLShaderRenderer {
    forca: number;
    distorcion: number;
    private texture;
    constructor(canvas: HTMLCanvasElement);
    setTexture(url: string): Promise<void>;
    protected onRender(elapsedTime: number): void;
}
//# sourceMappingURL=GLVhs.d.ts.map