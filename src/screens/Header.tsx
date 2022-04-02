import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="col-md-9 col-lg-9 justify-content-center card_bg  border border-success rounded">
            <div className="d-flex flex-wrap flex-column justify-content-center mb-3">
                <div className="row">
                    <div className="col-1 d-sm-none d-md-block">

                    </div>
                    <div className="col-10 d-grid text-white">
                        <span className="text-center body-text2 d-flex justify-content-center">
                            TrackFi will be launched after presale has been caried out. You're welcome to be an earlyinvestor. 
                            Seed your spot by buying at a fair price.
                        </span>
                        <h1 className="text-center">Presale Statistics</h1>
                        <span className="body-text2 text-center">
                            Presale allocation = 250,000,000
                        </span>
                        <br/>
                        <span className="body-text2 text-center">
                            Presale allocation = 250,000,000
                        </span>
                        <br/>
                        <span className="body-text2 text-center">
                            Presale price 1TrackFi = $0.0012
                        </span>
                        <br/>
                        <span className="body-text2 text-center">
                            Listing price = $0.0016
                        </span>
                        <br/>
                        <span className="body-text2 text-center mt-3">
                            Minimum buy = 50 Algo
                        </span>
                        <br/>
                        <span className="body-text2 text-center">
                            Maximum buy = 5000 Algo
                        </span>
                        <br/>
                        <span className="body-text2 text-center">
                            Soft Cap= 50,000 Algo
                        </span>
                        <br/>
                        <span className="body-text2 text-center">
                            Hard Cap = 150,000 Algo
                        </span>
                        <br/>
                        <span className="body-text2 text-center mt-3">
                            Please note that Algo is strictly accepted from an Algo wallet. Exchanges are yet to be
                            facilitated!
                        </span>
                        <span className="body-text2 text-center mt-3">
                            Follow our social media handles as all information regarding the presale will be posted
                            there.
                            This includes the date and time presale would be held and any further information to be
                            disseminated.
                        </span>

                    </div>

                </div>
            </div>
    </div>
  );
}
