import { UploadDropzone } from "@/lib/uploadthing";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useToast } from "@/hooks/use-toast";

interface MyFileUploadProps {
    onChange: (url?: string) => void;
    endpoint: keyof  OurFileRouter;

}

export const MyFileUpload = ({onChange, endpoint}: MyFileUploadProps) => {
    
    const {toast} = useToast();

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                toast({
                    title: "Upload Error",
                    description: error?.message,
                    duration: 5000,
                })
            }}
        />
    )
}