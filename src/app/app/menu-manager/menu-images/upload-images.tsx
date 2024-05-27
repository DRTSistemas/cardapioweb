"use client"

import { FileUploader } from "@/components/file-uploader"

export function UploadCard() {
  return (
    <div className="gird space-y-3 rounded bg-background p-4">
      <h3 className="font-semibold">Nome do item</h3>
      <FileUploader />
    </div>
  )
}
