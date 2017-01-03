export const RiskColors = (interest) => {
    if (interest <= 15) return '#009908'
    else if (interest <= 20) return '#66ffd9'
    else if (interest <= 25) return '#ffff66'
    else if (interest <= 30) return '#ff6000'
    else if (interest <= 35) return '#900000'
    else return ''
}
