import React from "react";

const Scroll = (props: any) => {
    return (
        // The bottoms allows scrolling, each element has children
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll