import { BaseGLSLShaderRenderer } from "./baseShaderRender";
import vsSource from "./glsl/blur.vert?raw"
import fsSource from "./glsl/blur.frag?raw"
import { GLUtils } from "./GLUtils";

export class blurShaderRenderer extends BaseGLSLShaderRenderer{
    public directionX: number = 1.0;
    public directionY: number = 0.0;
    
    private texture: WebGLTexture | null = null;

    constructor(canvas: HTMLCanvasElement){
        super(canvas, vsSource, fsSource, "position");
    }

    public async setTexture(url: string): Promise<void>{
        this.texture = await this.loadTexture(url);
    }

    protected onRender(elapsedTime: number): void {
        if(this.texture){
            this.gl.activeTexture(this.gl.TEXTURE0)
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        }
        this.setUniform2f("u_resolution", this.canvas.width, this.canvas.height);
        this.setUniform2f("u_direction", this.directionX, this.directionY);
        this.setUniform1i("u_img", 0);
    }

}