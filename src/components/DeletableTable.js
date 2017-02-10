import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import {styleConstants} from '../utils/StyleConstants';

const deleteIconStyle = {
    color: styleConstants.textGrey
}

class DeletableTable extends Component {
    render () {
        let {data, onDelete, columns} = this.props;
            return (
                <div className="deletable-table">
                    <div className="header-row">
                        {columns.map( (item, idx) => {
                            return (
                                <div key={idx} className="header-column"> {item.label} </div>
                            )
                        })}
                        <div className="delete-column"></div>
                    </div>
                    { data.length > 0 ?
                        data.map( (item, index) => {
                            return (
                                <div key={index} className="content-row">
                                    {columns.map( (column, idx) => {
                                        return (
                                            <div key={idx} className="content-column">
                                                {item[column.id]}
                                            </div>
                                        )
                                    })}
                                    <div className="delete-column">
                                        <FontIcon style={deleteIconStyle} onClick={onDelete.bind(this, index)} className="material-icons add-to-close">add_circle</FontIcon>
                                    </div>
                                </div>
                            )
                        })
                     : (
                        <div className="no-records">
                            No Records Added Yet
                        </div>
                    )}
                </div>
            )
    }
}

export default DeletableTable;
