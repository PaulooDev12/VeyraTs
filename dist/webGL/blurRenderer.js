import { BaseGLSLShaderRenderer } from "./baseShaderRender";
import vsSource from "./glsl/blur.vert?raw";
import fsSource from "./glsl/blur.frag?raw";
export class blurShaderRenderer extends BaseGLSLShaderRenderer {
    directionX = 1.0;
    directionY = 0.0;
    texture = null;
    constructor(canvas) {
        super(canvas, vsSource, fsSource, "position");
    }
    async setTexture(url) {
        this.texture = await this.loadTexture(url);
    }
    onRender(elapsedTime) {
        if (this.texture) {
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        }
        this.setUniform2f("u_resolution", this.canvas.width, this.canvas.height);
        this.setUniform2f("u_direction", this.directionX, this.directionY);
        this.setUniform1i("u_img", 0);
    }
}
//# sourceMappingURL=blurRenderer.js.map