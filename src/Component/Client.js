import React from 'react'
import Pin from '../Asset/pin.svg'
import Down from '../Asset/Downarr.svg'
import One from '../Asset/one.svg'

const Client = () => {

    return (
        <>

            <div id="card" className="col-11 col-md-3 mr-2">
                <div className="row mt-2">
                    <div className="col-6 mt-2">
                        <p id="title">Client 3</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img src={Pin} alt="Pin"></img>
                    </div>
                </div>
                <div className="row mt-2 ml-1 mr-1 ">

                    <div id="accordion">
                        <div class="card">
                            <div class="card-header " id="headingOne">

                                <p id="first" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                    Accounting <span className="d-flex justify-content-end mt-n4"><img src={Down} alt="Pin"></img></span>
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box1" type="button" >8</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> In Progress</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                5
        </button>
                                            <button id="box1" type="button" >10</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box2" type="button" >8</button>

                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div id="collapse7" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <div className=" mt-1 row">
                                    <div className="col-12 mt-n3 mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n4">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                      </div>
                            </div>
                        </div>
                        <div class="card mt-2">
                            <div class="card-header" id="headingTwo">
                                
                             
        <p id="first" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
        Financial Reporting <span className="d-flex justify-content-end mt-n4"><img src={Down} alt="Pin"></img></span>
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box1" type="button" >8</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> In Progress</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                5
        </button>
                                            <button id="box1" type="button" >10</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box2" type="button" >8</button>

                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div id="collapse8" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                <div className=" mt-1 row">
                                    <div className="col-12 mt-n3 mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n4">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                     </div>
                            </div>
                        </div>
                        <div class="card mt-2">
                            <div class="card-header" id="headingThree">
                              
                      
        <p id="first" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
        Reconciliation <span className="d-flex justify-content-end mt-n4"><img src={Down} alt="Pin"></img></span>
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box1" type="button" >8</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> In Progress</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                5
        </button>
                                            <button id="box1" type="button" >10</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box2" type="button" >8</button>

                                        </div>
                                    </div>


                                </div>

                               
                            </div>
                            <div id="collapse9" class="collapse " aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                <div className=" mt-1 row">
                                    <div className="col-12 mt-n3 mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n4">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                   </div>
                            </div>
                        </div>
                        <div class="card mt-2 mb-3">
                            <div class="card-header" id="headingThree">
                              
                      
        <p id="first" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
        Middle Office <span className="d-flex justify-content-end mt-n4"><img src={Down} alt="Pin"></img></span>
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box1" type="button" >8</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> In Progress</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                5
        </button>
                                            <button id="box1" type="button" >10</button>

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p id="li1" className="ml-1"> Not Started</p>

                                        <div class="btn-group mt-n2">

                                            <button id="fir" type="button" data-toggle="dropdown">
                                                2
        </button>
                                            <button id="box2" type="button" >8</button>

                                        </div>
                                    </div>


                                </div>

                               
                            </div>
                            <div id="collapse10" class="collapse " aria-labelledby="headingfour" data-parent="#accordion">
                                <div class="card-body">
                                <div className=" mt-1 row">
                                    <div className="col-12 mt-n3 mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n3">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                    <div className=" mt-1 row">
                                    <div className="col-12  mb-n4">
                                        <img src={One} alt="one" width="100%" height="100px" ></img>
                                            <p></p>
                                        
                                    </div>

                                    </div>
                                   </div>
                            </div>
                        </div>
                  
                    </div>

                </div>


            </div>
        </>
    )
}

export default Client
