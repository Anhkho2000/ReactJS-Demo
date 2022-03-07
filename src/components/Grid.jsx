import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

        const style = {
                gap: props.gap ? `${props.gap}px` : '0'
        };

        const col = props.col ? `grid-col-${props.col}` : '';
        const mdCol = props.mdCol ? `grid-md-${props.mdCol}` : '';
        const smCol = props.smCol ? `grid-col-${props.smCol}` : '';

        return (
                <div className={`gird ${col} ${smCol} ${mdCol}`} style = {style}>
                        {props.children}
                </div>
        )
}

Grid.propTypes = {
        col: PropTypes.number.isRequired,
        mdCol: PropTypes.number,
        smCol: PropTypes.number,
        gap: PropTypes.number
}

export default Grid

