import React, {useState} from 'react'

const ParagraphWidget = (
    {
        widget, 
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(widget)
    return(
        <>
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
                        <div className="col-md-10 col-lg-11 col-sm-10 col-9">
                    <select onChange={(event) => setCachedItem({
                        ...cachedItem,
                        type: event.target.value
                    })}
                        className="form-control mb-3">
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="HEADING">Heading</option>
                    </select>
                    <textarea value={cachedItem.text} 
                    className="form-control"
                    onChange={(event) => setCachedItem({
                        ...cachedItem,
                        text: event.target.value
                    })}></textarea>
                    </div>
                </>
            }
            {
                !editing &&
                <p>
                    <i onClick={() => setEditing(true)}
                    className="fas fa-cog fa-lg float-right wbdv-icon-padding"></i>
                    {cachedItem.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget