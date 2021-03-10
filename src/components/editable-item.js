import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>

                <div className={`nav-link ${active}`}>
                    <Link to={to}>
                    
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                </div>
                </>


            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check float-right"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times float-right"></i>
                </>
            }
        </>
    )
}

export default EditableItem