import React from 'react';

import './Home.scss';

const HomePage: React.FunctionComponent = () => {
    return (
        <div>
            <section className="latest">
                <div className="container">
                    <h1>Latest Experiences</h1>
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                                <img
                                    src="/assets/images/snow.jpeg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card&apos;s content.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                                <img
                                    src="/assets/images/journey.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card&apos;s content.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                                <img
                                    src="/assets/images/england.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card&apos;s content.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="journey">
                <div className="container">
                    <h1 className="section-title">Our Journey</h1>
                    <div className="row">
                        <div className="col journey-img">
                            <img
                                src="/assets/images/journey.jpg"
                                className="shadow"
                            />
                        </div>
                        <div className="col">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus viverra sapien vitae
                                luctus gravida. Duis molestie vel ante vitae
                                lacinia. Proin imperdiet ante ut erat convallis,
                                quis euismod massa tincidunt. Sed sit amet
                                lobortis sapien. Aliquam erat volutpat. Morbi
                                semper dui ante, lacinia eleifend felis sagittis
                                in. Orci varius natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Orci
                                varius natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                                Curabitur tempor pellentesque sollicitudin.
                                Donec rhoncus scelerisque arcu vitae maximus. Ut
                                commodo massa dui, eget mollis dolor rutrum sed.
                                Aenean elementum sagittis tellus, quis iaculis
                                libero sodales ac.
                            </p>

                            <p>
                                Fusce tempus, tellus at facilisis faucibus,
                                tortor neque sodales purus, ac feugiat augue
                                nibh a elit. Ut a facilisis enim. Ut gravida,
                                ante vel consequat laoreet, felis mi aliquam
                                eros, vel vestibulum urna mi quis massa. Cras
                                sed neque pretium, condimentum nisl vitae,
                                scelerisque nisi. Quisque euismod luctus velit
                                condimentum congue. Nulla odio sapien, suscipit
                                vehicula ultricies non, volutpat sed est.
                                Vestibulum convallis ipsum ut purus consectetur
                                sodales. Pellentesque varius felis non euismod
                                sollicitudin. Praesent cursus commodo metus in
                                malesuada. Vivamus est enim, pharetra sit amet
                                sapien a, finibus dictum mi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
