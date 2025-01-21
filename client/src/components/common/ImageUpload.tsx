import React from "react";

interface IImageUploadProps {
  preview: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageUpload({
  preview,
  handleImageChange,
}: IImageUploadProps) {
  return (
    <div className="relative w-64 h-48">
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
      {preview ? (
        <img
          src={preview}
          alt="Uploaded Preview"
          className="w-full h-full object-cover rounded border-gray-200 border-2"
        />
      ) : (
        <div className="text-center w-full h-full border-2 border-gray-200 border-dashed flex items-center justify-center rounded">
          Click to upload image
        </div>
      )}
    </div>
  );
}
