
import React, {useState} from 'react'

const ImageWidget = (
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
            !editing &&
            <>
                <i onClick={() => setEditing(true)}
                className="fas fa-cog fa-lg float-right wbdv-icon-padding"></i>
                <img width={cachedItem.width} height={cachedItem.height} src={cachedItem.src}/>
            </>
        }
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
                    <label htmlFor="src-url-input">Image URL</label>
                    <input id="src-url-input" value={cachedItem.src}
                            className="form-control"
                            onChange={(event) => setCachedItem({
                                ...cachedItem,
                                src: event.target.value
                            })}
                    />

                    <label htmlFor="width-input">Image width</label>
                    <input id="width-input" value={cachedItem.width}
                            className="form-control"
                            onChange={(event) => setCachedItem({
                                ...cachedItem,
                                width: event.target.value
                            })}
                    />

                    <label htmlFor="height-input">Image height</label>
                    <input id="height-input" value={cachedItem.height}
                            className="form-control"
                            onChange={(event) => setCachedItem({
                                ...cachedItem,
                                height: event.target.value
                            })}
                    />
                </>
        }
    </div>
    )
}

export default ImageWidget