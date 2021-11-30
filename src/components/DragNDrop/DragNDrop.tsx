import { useEffect, useState } from "react";
import "./index.css";

interface Props {
  dragImg:(img: any) => void
}

const DragNDrop = ({ dragImg }:Props) => {
  const [drag, setDrag] = useState(false);
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string | null>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dragImg(reader.result as string);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleDragStart = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
    setDrag(false);
  };

  return (
    <>
      {drag
        ? (
          <div
            className="drop-area highlight"
            onDragStart={(e) => handleDragStart(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDragOver={(e) => handleDragStart(e)}
            onDrop={((e) => handleOnDrop(e))}
          >
            Drop the file
          </div>
        )
        : preview 
          ? (
            <div className="img-block">
              <img className="img-file" src={preview} alt="preview" style={{ objectFit: "cover" }} />
            </div>
          ) 
          : (
            <div
              className="drop-area"
              onDragStart={(e) => handleDragStart(e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDragOver={(e) => handleDragStart(e)}
            >
              Drag the file
            </div>
          )}
    </>
  );
};

export default DragNDrop;
