let arrImages = [];

let myDropzone = new Dropzone('.dropzone', {
  url:'/youtube/dropzone/',
  maxFilesize:2,
  maxFiles:3,
  acceptedFiles:'image/jpeg, image/png',
  addRemoveLinks:true,
  dictRemoveFile:'Quitar'
})

myDropzone.on('addedfile', file => {
  arrImages.push(file);
})

myDropzone.on('removedfile', file => {
  let i = arrImages.indexOf(file);
  arrImages.splice(i, 1);
})

document.getElementById('send').addEventListener('click', () => {
  let not = [];
  for(let i=0; i<arrImages.length; i++) {
    let imgData = new FormData();
    imgData.append('file', arrImages[i]);

    fetch('upload.php', {
      method:'POST',
      body:imgData
    }).then(res => res.json()).then(data => {
      not.push(data);
    });
  }

  if (!not.includes('fail')) {
    alert('Guardado');
  } else {
    alert('Error');
  }
})
