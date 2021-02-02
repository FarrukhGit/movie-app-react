import React, { Component } from 'react'

const ListGroup = props => {
    return <ul class="list-group">

        {props.items.map(item =>
            <li onClick={() => props.onItemSelect(item)}
                key={item._id}
                class={props.selectedGenre == item ? "list-group-item active" : "list-group-item"}>
                {item.name}</li>)}


    </ul>;
}

export default ListGroup;