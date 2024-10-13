import { MyFileUpload } from "@/components/features/commons/MyFileUpload";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";

const UploadImage : React.FC<{onUpload: (url?: string | undefined) => void}> = ({onUpload}) => {
    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <div className="w-full h-60 flex items-center justify-center rounded-lg bg-gray-200">
                    <ImageIcon className="w-10 h-10" />
                </div>
            </DialogTrigger>
            <DialogContent>
                <MyFileUpload 
                    endpoint="courseImage"
                    onChange={onUpload}
                />
            </DialogContent>
        </Dialog>
    );
};

export default UploadImage;
