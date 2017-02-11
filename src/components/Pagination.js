import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import FlatButton from 'material-ui/FlatButton';
import NavigationFirstPage from 'material-ui/svg-icons/navigation/first-page';
import NavigationLastPage from 'material-ui/svg-icons/navigation/last-page';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { styleConstants } from '../utils/StyleConstants';

const flatButtonStyle = {
  minWidth: 36,
  color: styleConstants.textGrey
};

const wrapperStyle = {
    textAlign: 'right',
    paddingRight: '10px',
    paddingBottom: '45px'
}

const Page = ({value, isActive, onClick}) => {
    let buttonStyle = isActive ? { ...flatButtonStyle, color: styleConstants.accentBlue} : flatButtonStyle;
    return (
        <FlatButton style={buttonStyle} label={value.toString()} primary={isActive} onClick={onClick}/>
    );
};

const Ellipsis = ({onClick}) => (
    <FlatButton style={flatButtonStyle} label="..." onClick={onClick}/>
);

const FirstPageLink = ({isActive, onClick}) => (
    <FlatButton style={flatButtonStyle} icon={<NavigationFirstPage/>} onClick={onClick}/>
);

const PreviousPageLink = ({isActive, onClick}) => (
    <FlatButton style={flatButtonStyle} icon={<NavigationChevronLeft/>} onClick={onClick}/>
);

const NextPageLink = ({isActive, onClick}) => (
    <FlatButton style={flatButtonStyle} icon={<NavigationChevronRight/>} onClick={onClick}/>
);

const LastPageLink = ({isActive, onClick}) => (
    <FlatButton style={flatButtonStyle} icon={<NavigationLastPage/>} onClick={onClick}/>
);

const WrapperComponent = ({children}) => {
    return ( <div style={wrapperStyle} className="pagination">{children}</div> );
}

const itemTypeToComponent = {
    [ITEM_TYPES.PAGE]: Page,
    [ITEM_TYPES.ELLIPSIS]: Ellipsis,
    [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
    [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
    [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
    [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltimatePaginationMaterialUi = createUltimatePagination({itemTypeToComponent, WrapperComponent});

export default UltimatePaginationMaterialUi;
