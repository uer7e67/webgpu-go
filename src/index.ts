
import shader from "./shaders.wgsl";

if (navigator.gpu) {
    console.log("支持WEB GPU")
}
else {
    console.log("不支持WEB GPU")
}

async function aaa() {

    const adapter: GPUAdapter = <GPUAdapter>await navigator.gpu.requestAdapter();

    const device: GPUDevice = <GPUDevice>await adapter.requestDevice();

    console.log(device);

    const format: GPUTextureFormat = "bgra8unorm";

    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("gfx-main");

    if(!canvas) {
        console.log(" ================ canvas is null ============= ")
        return;
    }

    const context: GPUCanvasContext = <GPUCanvasContext>canvas.getContext("webgpu");

    if(!context) {
        return;
    }
    const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
    context.configure({
        device,
        format: presentationFormat
    });



    const pipeline = device.createRenderPipeline({
        layout: "auto",  // 

        vertex: {
            module: device.createShaderModule({
                code: shader
            }),
            entryPoint: "vs_main"
        },

        fragment: {
            module: device.createShaderModule({
                code: shader
            }),
            entryPoint: "fs_main",
            targets: [{
                format: format
            }]
        }
    });

    const commandEncoder: GPUCommandEncoder = device.createCommandEncoder();
    const textureView: GPUTextureView = context.getCurrentTexture().createView();
    const renderpass: GPURenderPassEncoder = commandEncoder.beginRenderPass({
        colorAttachments: [{
            view: textureView,
            clearValue: { r: 1, g: 1, b: 1, a: 1.0 },
            loadOp: "clear",
            storeOp: "store"
        }]
    });

    renderpass.setPipeline(pipeline);
    renderpass.draw(3, 1, 0, 0);
    renderpass.end();

    device.queue.submit([commandEncoder.finish()]);
}



aaa();

