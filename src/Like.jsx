import React, { Component } from 'react'

const Like = (props) => {
    let classes = "fa fa-heart"
    if (!props.liked) classes += "-o"
    return (<i onClick={props.onClickw} className={classes}

        aria-hidden="true" style={{ cursor: 'pointer' }}></i>);
}

export default Like;

//fa fa-heart m-2