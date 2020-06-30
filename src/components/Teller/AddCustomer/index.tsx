import React from 'react';

interface Props {

}

const AddCustomer: React.FC<Props> = (props) => {
    
    return(
        <div>
            {/* <!-- ##### Breadcrumb Area Start ##### --> */}
            <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: "url(/img/bg-img/13.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2>Add customer</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Add customer</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Breadcrumb Area End ##### --> */}

            <div className="container">
                <div className="map-area">
                    <div className="contact---area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* <!-- Contact Area --> */}
                                    <div className="contact-form-area contact-page">
                                        <h4 className="mb-50">Send a message</h4>

                                        <form action="#" method="post">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="email" placeholder="Your E-mail" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="subject" placeholder="Your Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" id="message" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn credit-btn mt-30" type="submit">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer;