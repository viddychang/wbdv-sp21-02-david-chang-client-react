import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {

    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)
    return(
        <div>
            {
                editing &&
                    <>
                        <i onClick={() => {updateWidget(widget.id, cachedItem)
                            setEditing(false)}}
                        className="fas fa-check fa-lg float-right wbdv-icon-padding"></i>
                        <i onClick={() => { deleteWidget(widget.id)
                            setEditing(false)}}
                            className="fas fa-trash fa-lg float-right wbdv-icon-padding">
                        </i> 
                        <input checked={cachedItem.ordered} type="checkbox"
                        onChange={(event) => setCachedItem({
                            ...cachedItem,
                            ordered: event.target.value
                        })} /> Ordered
                        <br/>
                        Item list
                        <textarea value={cachedItem.text} rows={10} className="form-control"
                                    onChange={(event) => setCachedItem({
                                        ...cachedItem,
                                        text: event.target.value
                        })}></textarea>
                    </>
            }
            {
                !editing &&
                    <>
                        <i onClick={() => setEditing(true)}
                        className="fas fa-cog fa-lg float-right wbdv-icon-padding"></i>
                        {
                            cachedItem.ordered &&
                            <ol>
                                {
                                    cachedItem.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !cachedItem.ordered &&
                            <ul>
                                {
                                    cachedItem.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget