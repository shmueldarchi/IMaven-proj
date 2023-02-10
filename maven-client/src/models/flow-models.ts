interface edge {
    id: string,
    source: string,
    target: any
}

interface node {
    id: string,
    data: object,
    type: string,
    xPos: number,
    yPos: number,
    zIndex: number,
    selected: boolean,
    sourcePosition: string,
    targetPosition: string,
    dragging: boolean,
    isConnectable: boolean,
    dragHandle: string
}


interface coordinate {
    x: number,
    y: number
}
