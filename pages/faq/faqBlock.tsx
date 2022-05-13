import React, { useState } from "react";

const FaqBlock = ({ item }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="w-full md:w-1/2 p-2">
            <div
                className={`border border-blue-500 py-4 px-4 md:px-8 text-grey-400 bg-white-100 ${
                    visible && "rounded-b-none"
                } rounded-lg`}
                onClick={() => setVisible(!visible)}
            >
                {item.title}
            </div>
            <div
                className={`bg-grey-400 p-4 md:px-8 text-white-100 rounded-b-lg ${
                    !visible && "hidden"
                } transition-all`}
            >
                {item.subTitle}
            </div>
        </div>
    );
};

export default FaqBlock;
