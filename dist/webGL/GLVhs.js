import vsSource from './glsl/vhs.vert?raw';
import fsSource from './glsl/vhs.frag?raw';
import { BaseGLSLShaderRenderer } from './baseShaderRender';
export class VHSRenderer extends BaseGLSLShaderRenderer {
    forca = 0.2;
    distorcion = 1.0;
    texture = null;
    constructor(canvas) {
        super(canvas, vsSource, fsSource, "a_position");
    }
    async setTexture(url) {
        this.texture = await this.loadTexture(url);
    }
    onRender(elapsedTime) {
        if (this.texture) {
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        }
        this.setUniform1f("u_time", elapsedTime);
        this.setUniform1f("u_forca", this.forca);
        this.setUniform1f("u_distorcion", this.distorcion);
        this.setUniform1i("tex0", 0);
    }
}
//# sourceMappingURL=GLVhs.js.map