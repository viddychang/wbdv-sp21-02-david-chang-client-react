import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item,
        active,
        
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                <div className={`nav-link ${active?'active':''}`}>
                    <Link to={to} className="nav-text-color">
                    
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                </div>
                </>


            }
            {
                editing &&
                <div className={`nav-link edit-active`}>
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
                    }} className="fas fa-check float-right wbdv-icon-padding color-white"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times float-right wbdv-icon-padding color-white"></i>
                </div>
            }
        </>
    )
}

export default EditableItem