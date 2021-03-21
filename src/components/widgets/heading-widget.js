import React, {useState} from 'react'

const HeadingWidget = (
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
                        <i onClick={() => { updateWidget(widget.id, cachedItem) 
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
                        })} className="form-control mb-3"
                        value={cachedItem.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>

                    </select>
                                

                        <input value={cachedItem.text} 
                                onChange={(event) => setCachedItem({
                                    ...cachedItem,
                                    text: event.target.value
                                })}
                                className="form-control mb-3"/>
                        <select value={cachedItem.size} 
                                onChange={(event) => setCachedItem({
                                    ...cachedItem,
                                    // https://stackoverflow.com/questions/41773778/sending-number-instead-of-string-from-select-in-react-component
                                    size: parseInt(event.target.value, 10)
                                })}
                                className="form-control">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                        </div>

                    </>
            }
            {
                !editing &&
                    <>
                        <i onClick={() => setEditing(true)}
                            className="fas fa-cog fa-lg float-right wbdv-icon-padding"></i>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </>
            }
        </>
    )
}

export default HeadingWidget