const Newitem = (props) => {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                <img src={props.pic??"/Image/noImage.jpg"} height="220" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <div className="source">
                            <p>{props.source}</p>
                            <p>{new Date(props.Date).toLocaleDateString()}</p>
                        </div>
                        <p className="card-text ">{props.description}</p>
                        <a href={props.url} target="_blank" className="btn btn-primary ">Read Full Artical</a>
                    </div>
            </div>
        </div>
    )
}
export default Newitem