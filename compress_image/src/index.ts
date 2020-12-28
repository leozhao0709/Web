import './index.scss';

window.onload = () => {
  const uploader = document.querySelector('#uploader') as HTMLInputElement;
  const originalImage = document.querySelector('#original') as HTMLImageElement;
  const compressedImage = document.querySelector('#compressed') as HTMLImageElement;
  uploader.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    convertToBase64(file, (base64File) => {
      originalImage.src = base64File;
      compress(base64File, (compressedBase64Str) => {
        compressedImage.src = compressedBase64Str;
      });
    });
  });
};

function convertToBase64(file: File, callback?: (base64Str: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    const base64File = e.target?.result as string | null;
    if (!base64File) {
      return;
    }
    callback && callback(base64File);
  });

  reader.readAsDataURL(file);
}

function compress(base64Image: string, callback?: (compressedBase64Str: string) => void) {
  let maxW = 1024;
  let maxH = 1024;
  const image = new Image();
  image.addEventListener('load', function (e) {
    const maxRatio = Math.max(image.naturalWidth / maxW, image.naturalHeight / maxH);

    // no need to compress
    if (maxRatio < 1) {
      maxW = image.naturalWidth;
      maxH = image.naturalHeight;
    } else {
      maxW = image.naturalWidth / maxRatio;
      maxH = image.naturalHeight / maxRatio;
    }

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', '__compress__');
    canvas.width = maxW;
    canvas.height = maxH;
    canvas.style.visibility = 'hidden';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, maxW, maxH);
    ctx.drawImage(image, 0, 0, maxW, maxH);
    const compressImage = canvas.toDataURL('image/jpeg', 0.9);
    callback && callback(compressImage);
    canvas.remove();
  });
  image.src = base64Image;
}
