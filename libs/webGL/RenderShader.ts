import { BaseGLSLShaderRenderer } from './baseShaderRender';
import vsSource from './glsl/shader-1/chr.vert?raw';
import fsSource from './glsl/shader-1/chr.frag?raw';

export class ShaderRenderer extends BaseGLSLShaderRenderer{
    
    private texture: WebGLTexture | null = null;

    public force: number = 0.3;
    public intensidade: number = 1.0;

    constructor(canvas: HTMLCanvasElement){
        super(canvas, vsSource, fsSource, "a_position")       
    }

    public async setTexture(url: string): Promise<void> {
        this.texture = await this.loadTexture(url);
    }


    protected onRender(elapsedTime: number): void {
        if(this.texture){
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture); 
        }
        this.setUniform1f("u_time", elapsedTime); 
        this.setUniform1f("u_intensidade", this.intensidade);
        this.setUniform1i("tex0", 0) 
       
    }

}