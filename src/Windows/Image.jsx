import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/Window.js";

const ImageFile = () => {
    const {windows} = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const {name, imageUrl, image} = data;

    const src = imageUrl || image || null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white flex justify-center items-start h-full">
                {src ? (
                    <img src={src} alt={name} className="max-w-full max-h-[70vh] object-contain rounded"/>
                ) : (
                    <div className="text-gray-500">No image available</div>
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;
