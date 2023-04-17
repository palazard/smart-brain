import React from "react";

const Rank = ({userName, userEntries}) => {
    return (
        <div className="tc rank">
            <div className="f3 ">
                {`${userName}, your current entry count is `}
            </div>
            <div className="f1 ">
                {`#${userEntries}`}
            </div>
        </div>
    )
}

export default Rank;