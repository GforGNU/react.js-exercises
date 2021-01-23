import React from 'react';


const person = (props) => {
    const styleObj = {
        float:"right", color:"white", marginTop:"-35px", textDecoration:"none",
    }
    const styleIcon = {
        opacity: 0.6,
        cursor: "not-allowed",
    }
    return    (
        <div className="col-xl-3 col-sm-6 mb-5">
          
        <div className="bg-white rounded shadow-sm py-5 px-4" style={{background:"linear-gradient(to bottom, #333, #333 32%, #eee 20%, #fff 100%)"}}><img src= {props.img} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
        <a className="fa fa-edit" style={styleObj} href="#"></a>
            <h5 className="mb-0">{props.name}</h5><span className="small text-uppercase text-muted">{props.city}</span>
            <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="social-link "><i className="fa fa-facebook-f " style={styleIcon}></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter" style={styleIcon}></i></a></li>
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram" style={styleIcon}></i></a></li>
                <li className="list-inline-item"><a href={props.linkedIn} className="social-link active"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
    )
};

export default person;