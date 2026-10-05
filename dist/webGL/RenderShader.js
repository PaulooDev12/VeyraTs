import { BaseGLSLShaderRenderer } from './baseShaderRender';
import vsSource from './glsl/shader-1/chr.vert?raw';
import fsSource from './glsl/shader-1/chr.vert?raw';
export class ShaderRenderer extends BaseGLSLShaderRenderer {
    texture = null;
    intensidade = 1.0;
    constructor(canvas) {
        super(canvas, vsSource, fsSource, "a_tex_coord");
    }
    async setTexture(url) {
        this.texture = await this.loadTexture(url);
    }
    // mapear os uniforms agora!! 
    onRender(elapsedTime) {
        if (this.texture) {
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture); // texture 2d seguindo o sampler
        }
        this.setUniform1f("u_time", elapsedTime); // 1f para floats, 1i para samplers, 2f para vetores :D
        this.setUniform1f("u_itensidade", this.intensidade);
        this.setUniform1i("tex0", 0); // o smapler2D se chama tex0 
        // config terminada 
    }
}
//# sourceMappingURL=RenderShader.js.map