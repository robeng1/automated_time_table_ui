import React, { Component } from 'react';
import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="page-header">Hello World</h1>

                    <Ribbon>
                        <RibbonGroup title="Clipboard" colClass="col-xs-3">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-pushpin"/>
                                    </div>
                                    <div>Pin</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                        </RibbonGroup>

                        <RibbonGroup title="New" colClass="col-xs-3">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-folder-open"/>
                                    </div>
                                    <div>New folder</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                            <RibbonGroupItem colClass="col-xs-8">
                                <div className="row row-2px">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-file"/> New file
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-inbox"/> Easy access
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </div>
                            </RibbonGroupItem>
                        </RibbonGroup>
                    </Ribbon>
                </div>
            </div>
        );
    }
}

export default App;