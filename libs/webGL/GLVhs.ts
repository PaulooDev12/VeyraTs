import vsSource from './glsl/vhs.vert?raw';
import fsSource from './glsl/vhs.frag?raw';
import { BaseGLSLShaderRenderer } from './baseShaderRender';

export class VHSRenderer extends BaseGLSLShaderRenderer{
    public forca: number = 0.2;
    public distorcion: number = 1.0;

    private texture: WebGLTexture | null = null;

    constructor(canvas: HTMLCanvasElement){
        super(canvas, vsSource, fsSource, "a_position");
    }

    public async setTexture(url: string): Promise<void>{
        this.texture = await this.loadTexture(url);
    }
    protected onRender(elapsedTime: number): void {
        if(this.texture){
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        }
        this.setUniform1f("u_time", elapsedTime);
        this.setUniform1f("u_forca", this.forca);
        this.setUniform1f("u_distorcion", this.distorcion);

        this.setUniform1i("tex0", 0);
    }
}
