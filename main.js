const binaryClock = () => {
    const date = new Date()
    const hrs = splitDes(date.getHours())
    const mins = splitDes(date.getMinutes())
    const secs = splitDes(date.getSeconds())

    painClock(hrs[0], 'b0', 'hours')
    painClock(hrs[1], 'b1', 'hours')
    painClock(mins[0], 'b0', 'minutes')
    painClock(mins[1], 'b1', 'minutes')
    painClock(secs[0], 'b0', 'seconds')
    painClock(secs[1], 'b1', 'seconds')
}

const paintClock = (binary, ninche, category) => {
    binary.split("").reverse().forEach((bin, index) => {
        const dom = Array.from(document.querySelectorAll(`.${category} .bin span.${ninche}`)).reverse()
        if (bin === "1") {
            const light = dom[index]
            light.classList += " light"
        }
    });
}

const clearClock = () => {
    document.querySelectorAll('.light').forEach(light => light.classList.remove('light'))
}

const toBin = (number) => {
    return Number(number).toString(2)
}

const splitDes = (number) => {
    let no = number.toString().split("")
    if (no.length == 1) no = [0, no[0]]
    return {
        0: toBin(no[0]),
        1: toBin(no[1])
    }
}

setInterval(() => {
    clearClock()
    binaryClock()
}, 1000)