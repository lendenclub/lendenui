export const RiskColors = (interest) => {
    if (interest <= 15) return '#8BBE47'
    else if (interest <= 20) return '#5A78CF'
    else if (interest <= 25) return '#FDFB66'
    else if (interest <= 30) return '#FFA61A'
    else if (interest <= 35) return '#F76162'
    else return ''
}

export const RiskColorsArray = ['#8BBE47', '#5A78CF', '#FDFB66', '#FFA61A', '#F76162']

export const RiskCategories = [{
    label: 'Very Low Risk',
    range: '12.5% - 15%',
    min: 12.5,
    max: 15,
    color: '#8BBE47'
}, {
    label: 'Low Risk',
    range: '15% - 18%',
    min: 15,
    max: 18,
    color: '#5A78CF'
}, {
    label: 'Moderate Risk',
    range: '18% - 22%',
    min: 18,
    max: 22,
    color: '#FDFB66'
}, {
    label: 'High Risk',
    range: '22% - 30%',
    min: 22,
    max: 30,
    color: '#FFA61A'
}, {
    label: 'Very High Risk',
    range: '30% - 35%',
    min: 30,
    max: 35,
    color: '#F76162'
}]
