const Color = {
    veryLow: '#8BBE47',
    low: '#6E8EFF',
    moderate: '#F6AE31',
    high: '#EC55C4',
    veryHigh: '#F76162'
}

export const RiskColors = (interest) => {
    if (interest <= 15) return Color.veryLow
    else if (interest <= 18) return Color.low
    else if (interest <= 22) return Color.moderate
    else if (interest <= 30) return Color.high
    else if (interest <= 35) return Color.veryHigh
    else return ''
}

export const RiskColorsArray = [Color.veryLow, Color.low, Color.moderate, Color.high, Color.veryHigh]

export const RiskCategories = [{
    label: 'Very Low Risk',
    range: '12.5% - 15%',
    min: 12.5,
    max: 15,
    color: Color.veryLow
}, {
    label: 'Low Risk',
    range: '15% - 18%',
    min: 15,
    max: 18,
    color: Color.low
}, {
    label: 'Moderate Risk',
    range: '18% - 22%',
    min: 18,
    max: 22,
    color: Color.moderate
}, {
    label: 'High Risk',
    range: '22% - 30%',
    min: 22,
    max: 30,
    color: Color.high
}, {
    label: 'Very High Risk',
    range: '30% - 35%',
    min: 30,
    max: 35,
    color: Color.veryHigh
}]
