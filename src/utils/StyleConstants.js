const styleConstants = {
    headerHeight: '60px',
    colorPalette100: '#EFF0F3',
    colorPalette200: '#E4E5E8',
    colorPalette300: '#F8F6F6',
    colorPalette400: '#E6F4FB',
    colorPalette500: '#1F94D2',
    colorPalette600: '#0A5C89',
    accentOrange: '#FFA61A',
    accentGreen: '#489D68',
    lightGreen: '#B1D5BE',
    grayLight: '#777777',
    grayDark: '#7E8A97',
    grayDarker: '#6C7A8B',
    textWhite: '#FFFFFF',
    borderGray: '#9E9E9E',
    selectListBgColor: '#27282d',
    cardBGColor: '#FFFFFF',

    lightGrayBGColor: '#172E37',
    textGrey: '#A6A6A6',
    textHeaderGrey: '#ced0d4',
    borderColor: '#2D434D',
    accordionBGColor: '#OD222B',
    tableHeaderBGColor: '#23404a',
    bodyBackgroundColor: '#3A5763',
    accentBlue: '#1976D2',
    lightGreyBGColor: '#172E37',
    darkGreyBGColor: '#23404a',
    pageHeaderBGColor: '#284752',
    primaryColor: '#118a70',

    cardMoreHorizontal: {
        textAlign: 'center',
        height: '24px',
        borderTop: '1px solid #2D434D'
    }
}

styleConstants.bodyBgColor = styleConstants.colorPalette100;
styleConstants.leftNavBgColor = styleConstants.colorPalette500;
styleConstants.rightNavBgColor = styleConstants.colorPalette200;
styleConstants.headerBgColor = styleConstants.colorPalette600;
styleConstants.collapsibleRowBgColor = styleConstants.colorPalette300;
styleConstants.accordionBgColor = styleConstants.colorPalette300;
styleConstants.tableHeader = styleConstants.colorPalette400;
styleConstants.tableBgColor = styleConstants.colorPalette200;
styleConstants.pageHeaderBGColor = styleConstants.colorPalette200;
styleConstants.accordionBorder = styleConstants.colorPalette200;

export const cardStyle = {
    backgroundColor: styleConstants.cardBGColor
}

export const cardHeaderStyle = {
    padding: '15px',
    color: styleConstants.grayDarker,
    fontWeight: 'bold'
}

export { styleConstants };
