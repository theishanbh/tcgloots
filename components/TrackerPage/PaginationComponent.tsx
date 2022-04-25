import React from 'react'

export default function PaginationComponent() {
    const [isFocus, setFocus] = React.useState(1)
    return (
        <div className="w-60 h-10 bg-white-100 rounded-md border border-grey-600 flex flex-row">
            <button className={"flex-1 flex font-jost items-center justify-center rounded-l-md text-center"} onClick={() => { setFocus(focus => focus > 0 ? focus - 1 : focus) }}>
                {'<'}
            </button>
            <button className={isFocus == 1 ? "bg-blue-300 h-full text-white-100 items-center justify-center font-jost text-center   flex-1 flex " : "flex-1 font-jost items-center justify-center text-center flex "} onClick={() => { setFocus(1) }}>
                1
            </button>
            <button className={isFocus == 2 ? "bg-blue-300 h-full text-white-100 items-center justify-center  font-jost text-center  flex-1 flex " : "flex-1 font-jost items-center justify-center text-center flex "} onClick={() => { setFocus(1) }}>
                2
            </button>
            <button className={isFocus == 3 ? "bg-blue-300 h-full text-white-100 items-center justify-center font-jost text-center   flex-1 flex " : "flex-1  font-jost items-center justify-center text-center flex "} onClick={() => { setFocus(1) }}>
                ...
            </button>
            <button className={isFocus == 4 ? "bg-blue-300 h-full text-white-100 items-center justify-center font-jost text-center   flex-1 flex " : "flex-1 font-jost items-center justify-center text-center flex"} onClick={() => { setFocus(1) }}>
                28
            </button>
            <button className={"flex-1 flex font-jost items-center justify-center rounded-r-md  text-center"} onClick={() => { setFocus(focus => focus < 5 ? focus + 1 : focus) }}>
                {'>'}
            </button>
        </div>
    )
}
