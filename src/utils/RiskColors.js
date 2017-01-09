export const RiskColors = (interest) => {
    if (interest <= 15) return '#009908'
    else if (interest <= 20) return '#66ffd9'
    else if (interest <= 25) return '#ffff66'
    else if (interest <= 30) return '#ff6000'
    else if (interest <= 35) return '#900000'
    else return ''
}

export const RiskCategories = [{
    label: 'Very Low Risk',
    range: '12.5% - 15%',
    color: '#009908'
}, {
    label: 'Low Risk',
    range: '15% - 18%',
    color: '#66ffd9'
}, {
    label: 'Medium Risk',
    range: '18% - 22%',
    color: '#ffff66'
}, {
    label: 'High Risk',
    range: '22% - 30%',
    color: '#ff6000'
}, {
    label: 'Very High Risk',
    range: '30% - 35%',
    color: '#900000'
}]
