export function getDate(text: string, diffTime: number) {
    const d = new Date()
    d.setTime(d.getTime() - diffTime)

    return { text, value: d }
}

export function genDateRange(text: string, diffTime: number) {
    const end   = new Date()
    const start = new Date()
    start.setTime(start.getTime() - diffTime)
    return {
        text,
        value: [start, end],
    }
}

export function genPrevRange(text: string, diffTime: number) {
    const end   = new Date()
    const start = new Date()
    start.setTime(start.getTime() - diffTime)
    end.setTime(end.getTime() - diffTime)
    return {
        text,
        value: [start, end],
    }
}

export function genNextRange(text: string, diffTime: number) {
    const end   = new Date()
    const start = new Date()
    start.setTime(start.getTime() + diffTime)
    end.setTime(end.getTime() + diffTime)
    return {
        text,
        value: [start, end],
    }
}
