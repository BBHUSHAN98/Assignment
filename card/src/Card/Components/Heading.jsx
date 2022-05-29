

 const Heading = ({title}) => {
    var style = {
        width: "150px",
        
        background: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "600",
        textAlign: "center",
        padding: "27px 16px",
    }
    return <div style={style}>{title}</div>
}

export default Heading;