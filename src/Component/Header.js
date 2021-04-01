import React, { useState }  from 'react'
import Cal from '../Asset/calendar_today-24px.svg'
import Down from '../Asset/down.svg'
import Rec from '../Asset/Rectangle.svg'
import Yellow from '../Asset/yellow.svg'
import Green from '../Asset/green.svg'
import Search from '../Asset/Search.svg'
import Circle from '../Asset/cir1.svg'
import Circle2 from '../Asset/cir2.svg'
import Circle3 from '../Asset/cir.png'
import Circle4 from '../Asset/oran.svg'
import Circle5 from '../Asset/gr.svg'
import Circle6 from '../Asset/or.svg'

import Controller from './Controller'


const Header = () => {
    
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    
    return (
        <>
    
            <div className="row mt-4">
                <div className="col-12 col-md-4 mt-auto">
                    <p ><span id="Heading">Status Moniter</span>
                        <span id="cal-icon"><img className="ml-3 mr-3 mb-2" src={Cal} width="18px" height="18px" alt="calander"></img></span>
                        <span className="mb-1" id="Date">22 Mar 2020</span>
                        <span id="cal-icon"><img className="mb-1 ml-2" src={Down} width="12px" height="12px" alt="calander"></img></span></p>
                    <p id="Disp">
                        Brief intro to the page functionality will be listed here.
        </p>

                </div>
                <div className="col-12 col-md-3 ml-3 ml-md-0 ">
                    <div id="box">
                        <div className="row">
                            <div className="container">
                                <div class="form-group form-check ml-4 mt-3">
                                    <input type="checkbox" class="form-check-input input " id="exampleCheck1" />
                                    <label ><span id="Seprator" className="ml-3 mr-4  "> <img src={Rec} alt="box" width="4px" height="19px" ></img></span><span id="label" class="form-check-label mt-1" for="exampleCheck1">Automated</span></label>

                                </div>


                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div class="form-group form-check ml-4 mt-n2 ">
                                    <input type="checkbox" class="form-check-input  " id="exampleCheck2" />
                                    <label ><span id="Seprator" className="ml-3 mr-4  "> <img src={Yellow} alt="box" width="4px" height="19px" ></img></span><span id="label" class="form-check-label mt-1" for="exampleCheck2">Automated</span></label>

                                </div>


                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div class="form-group form-check ml-4 mt-n2 ">
                                    <input type="checkbox" class="form-check-input " id="exampleCheck3" />
                                    <label ><span id="Seprator" className="ml-3 mr-4  "> <img src={Green} alt="box" width="4px" height="19px" ></img></span><span id="label" class="form-check-label mt-1" for="exampleCheck2">Automated</span></label>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="col d-md-block d-none mt-5  ">
                    <div className="d-flex justify-content-end ">

                        <div class="custom-control custom-switch ">
                            <input type="checkbox" class="custom-control-input" id="customSwitch1"></input>
                            <label id="lebl2" class="custom-control-label m5-auto" for="customSwitch1">Auto Refresh</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-md-none d-block ml-5 ml-md-0  mt-3 ">
                    <div className="my-auto">

                        <div class="custom-control custom-switch ">
                            <input type="checkbox" class="custom-control-input" id="customSwitch1"></input>
                            <label id="lebl2" class="custom-control-label m5-auto" for="customSwitch1">Auto Refresh</label>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row mt-3 ">
                <div className="col-6 col-md-3 ">
                    <div class="form-group">
                        <div id="bor"></div>
                        <select  onChange={e => handleSelect(e.target.value) } class="form-control" id="exampleFormControlSelect1">
                            <option>showall</option>
                            <option>indigo</option>
                            <option>rainbow</option>
                            <option>client3</option>
                            

                             </select>
                        <p id="labalfordrop" >Clients</p>
                    </div>
                </div>
                <div className="col-6 col-md-2 ">
                    <div class="form-group">
                        <div id="bor"></div>
                        <select onChange={(values)=> this.setValues(values)} class="form-control" id="exampleFormControlSelect2">
                            <option>Select Service</option>
                            <option>2</option>

                        </select>
                        <p id="labalfordrop" >Service</p>
                    </div>
                </div>
                <div className="col-6 col-md-2  mt-4 mt-md-0">
                    <div class="form-group">
                        <div id="bor"></div>
                        <select class="form-control" id="exampleFormControlSelect3">
                            <option>Select Task</option>
                            <option>2</option>

                        </select>
                        <p id="labalfordrop" >Task</p>
                    </div>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0 ">
                    <div class="form-group">

                        <div class="input-group mb-2 mr-sm-2">

                            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Search here" /><div class="input-group-prepend">
                                <div id="search-icon" class="input-group-text"><img src={Search} alt="search icon"></img></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className=" pb-3 " id="data">
                <div className="row" >
                    <div className="col-12 col-md-4  ">
                        <div className="row ml-2 mt-3">
                            <div className="col"><button id="btn" type="button">Not Started </button><span><img id="circle1" className="ml-3" src={Circle} alt="circle"></img></span><span><img id="circle1" className="ml-3" src={Circle2} alt="circle"></img></span><span id="txt1" className="ml-2">Breached</span></div>

                        </div>

                    </div>
                    <div className="col-12 col-md-4 ml-md-n5">
                        <div className="row ml-2 mt-3">
                            <div className="col"><button id="btn1" type="button">In Progress </button><span><img id="circle2" className="ml-3 mt-n2" src={Circle3} alt="circle"></img></span><span id="txt1" className="ml-2">Not Breached</span><span><img id="circle2" className="ml-3 mt-n2" src={Circle4} alt="circle"></img></span><span id="txt1" className="ml-2">Breached</span></div>

                        </div>

                    </div>
                    <div className="col-12 col-md-4 ml-md-n5">
                        <div className="row ml-2 mt-3">
                            <div className="col"><button id="btn2" type="button">In Progress </button><span><img id="circle2" className="ml-3 mt-n1" src={Circle5} alt="circle"></img></span><span id="txt1" className="ml-2">Not Breached</span><span><img id="circle2" className="ml-3 mt-n1" src={Circle6} alt="circle"></img></span><span id="txt1" className="ml-2">Breached</span></div>

                        </div>

                    </div>

                </div>
                <div className="row mt-4 ml-3 ">
                <Controller data={value} />
                </div>
                
            </div>
            {console.log(value)}


        </>
    )
}

export default Header
