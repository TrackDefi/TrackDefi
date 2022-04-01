import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="container-fluid p-5 rounded-lg bg-black tp ">
      {/* <h1 className="display-4">#BRand_Name Presale!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        maximus metus eros, in dapibus ante aliquam et. Donec non libero id
        lorem euismod mollis ut ac libero.
      </p>
      <hr className="my-4"></hr>
      <p>
        #Event_Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque maximus metus eros.
      </p>
      <a className="btn btn-primary btn-lg" href="hds" role="button">
        Get Started
      </a> */}
        <span className="text-center body-text2 d-flex justify-content-center">
            TrackDefi will be launched after presale has been caried out. You're welcome to be an earlyinvestor. 
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
        <span className="mt-3 body-text2 text-center">
            Follow our social media handles as all information regarding the presale will be posted there. 
            This includes the date and time presale would be held and any further information to be disseminated.
        </span>
        <br/>
        <br/>
    </div>
  );
}
