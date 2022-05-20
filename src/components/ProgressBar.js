import React from "react";
import pushPicture from "./pushPicture";

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = pushPicture(file);
    console.log(progress, url);

    return (
        <div className="progress-bar">progress</div>
    )

}

export default ProgressBar