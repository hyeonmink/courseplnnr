import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ""};
    }

    render(){
        return (
            <form className="search-form"
                /*onSubmit={event => this.handleSubmit(event)}*/ >
                <div className = "input-group">
                    <input type="text" 
                           className="form-control input-lg"
                           value={this.state.query} 
                           placeholder={this.props.placeholder || "Please type classes you want to find"}/>
                    <span className="input-group-addon input-sm">
                        <select id="report-select" className="form-control">
                            <option value="1">WINTER 2017</option>
                            <option value="2">SPRING 2017</option>         
                        </select>
                    </span>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary input-lg" 
                            aria-label="search">
                            <span className="glyphicon glyphicon-search" 
                                aria-hidden="true">
                            </span>
                        </button> 
                    </span>

                </div>
            </form>        
        )
    }
}
/*
<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-addon">.00</span>
</div>*/

/*                <div className="input-group">
                    <span className = "input-grouop-addon">
                        <input type="button" className="quarter"
                                value = "Hi"/>     
                    </span>
                    <input type="text" className="form-control input-lg"
                            value={this.state.query} 
                            placeholder={this.props.placeholder || "Please type classes you want to find"}/>
                    <button type="submit" className="btn btn-primary" 
                        aria-label="search">
                        <span className="glyphicon glyphicon-search" 
                            aria-hidden="true">
                        </span>
                    </button>     
                </div> */