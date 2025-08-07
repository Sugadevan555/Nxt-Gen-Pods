// const quill = new Quill('#editor', {
//     theme: 'snow'
//   });

  let cam=document.getElementById("webcam")
  let startcam=async() =>{
    let a=await navigator.mediaDevices.getUserMedia({video:true})
    cam.srcObject=a
  }

  startcam()