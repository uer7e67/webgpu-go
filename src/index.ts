
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

    const bindGroupLayout = device.createBindGroupLayout({
        entries: [],
    });

    const bindGroup = device.createBindGroup({
        layout: bindGroupLayout,
        entries: []
    });

    const pipelineLayout = device.createPipelineLayout({
        bindGroupLayouts: [bindGroupLayout]
    });

    const pipeline = device.createRenderPipeline({
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
        },

        primitive: {
            topology: "triangle-list"
        },

        layout: pipelineLayout
    });

    const commandEncoder: GPUCommandEncoder = device.createCommandEncoder();
    const textureView: GPUTextureView = context.getCurrentTexture().createView();
    const renderpass: GPURenderPassEncoder = commandEncoder.beginRenderPass({
        colorAttachments: [{
            view: textureView,
            clearValue: { r: 0.5, g: 0.0, b: 0.25, a: 1.0 },
            loadOp: "clear",
            storeOp: "store"
        }]
    });

    renderpass.setPipeline(pipeline);
    renderpass.setBindGroup(0, bindGroup)
    renderpass.draw(3, 1, 0, 0);
    renderpass.end();

    device.queue.submit([commandEncoder.finish()]);
}



aaa();

