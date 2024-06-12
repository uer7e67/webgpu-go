const output_label : HTMLElement = <HTMLElement> document.getElementById("compatibility-label");

if(navigator.gpu) 
{
    console.log(" ============== 1 ====================")
    output_label.innerText = "支持WEB GPU"
}
else {
    console.log(" ==============2 ==================")
    output_label.innerText = "不支持WEB GPU"
}




async function aaa ()  {

    const adapter : GPUAdapter = <GPUAdapter> await navigator.gpu.requestAdapter();

    // @ts-ignore
    const device: GPUDevice = await navigator?.requestDevice();

    console.log("device:" , device);


}



aaa();

