import React from 'react';

interface Props {
    namePage: string
}

const HeaderBody: React.FC<Props> = (props) => {
    return(
        <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: "url(/img/bg-img/13.jpg)"}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcrumb-content">
                            <h2>{props.namePage}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{props.namePage}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBody;