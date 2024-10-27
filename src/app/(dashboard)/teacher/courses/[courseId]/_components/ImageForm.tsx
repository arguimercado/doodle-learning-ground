import Image from "next/image";
import React from "react";
import UploadImage from "./UploadImage";

interface ImageFormProps {
   imageUrl?: string;
   onChange: (url?: string) => void;
}

const ImageForm: React.FC<ImageFormProps> = ({ imageUrl, onChange }) => {
   return (
      <div className="flex flex-col w-full">
         {imageUrl && imageUrl !== "" ? (
            <Image
               src={imageUrl!}
               alt="Course Image"
               width={200}
               height={200}
               className="rounded-lg w-[120px]"
            />
         ) : (
            <UploadImage onUpload={onChange} />
         )}
      </div>
   );
};

export default ImageForm;
