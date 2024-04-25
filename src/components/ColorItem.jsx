const ColorItem = (props) => {
    return (
        <div className='container' style={{ backgroundColor: props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorItem


