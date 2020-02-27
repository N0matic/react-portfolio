import React from 'react';

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="container">

            <div className="jumbotron contact" id="content">

              <h2 className="card-title">Contact</h2>

              <hr className="my-3" />

              <div className="row">
                <div className="col-md-12">

                  <form className="mx-auto" action="/action_page.php">
                    <div className="form-group">
                      <label for="Name">Name</label>
                      <input type="text" className="form-control" id="Name" placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                      <label for="InputEmail1">Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail2"
                        aria-describedby="emailHelp" name="Email" placeholder="example@gmail.com" />
                    </div>
                    <div className="form-group">
                      <label for="Message">Message</label>
                      <textarea className="form-control" id="Message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact