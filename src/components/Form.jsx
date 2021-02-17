import React from 'react'

const Form = ()=>{

    return(

        <div className="container">
            <div className="row">
                <form className="col s12 search_form">
                    <div className="input-field col s6">

                        <input placeholder="type it here" type="text" id="search" className="validate"/>
                        <button className="btn" htmlFor="search" type="button"> Search</button>
                    </div>
                </form>
            </div>
        </div>


    )

}
export default Form