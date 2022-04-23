import Header from "./Header";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import "../styles/Groups.css";

function Groups() {
  return (
    <div>
      <Header />
      <div className="groups-container">
        <div className="group-create">
          <h1 className="heading">Create New Group</h1>
          <div className="card">
            <Form>
              <FormGroup
                className="card-inside"
                controlId="groupname"
                size="lg"
              >
                <FormLabel className="input-label">Group Name:</FormLabel>

                <FormControl
                  autoFocus
                  type="text"
                  className="username-input-filed"
                  name="groupname"
                  // value=
                  placeholder="Group Name"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>
              <Form.Group
                className="card-inside"
                size="lg"
                controlId="description"
              >
                <Form.Label className="input-label">Description:</Form.Label>
                <Form.Control
                  type="text"
                  className="username-input-filed"
                  // value=
                  placeholder="Description"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                className="login-button"
                //  onClick={handleSubmit}
                variant="primary"
                block
                size="lg"
                type="submit"
                // disabled={!validateForm()}
              >
                Create
              </Button>
            </Form>
          </div>
        </div>
        <div className="groups-info">
          <h1 className="heading">Groups you were in</h1>
          <div className="info-card">
            <div className="each-group">
              <h1 className="name">Group Name 1</h1>
              <p className="desc">
                Group Description 1 (Trip to New York).....
              </p>
            </div>
            <div className="each-group">
              <h1 className="name">Group Name 2</h1>
              <p className="desc">Group Description 2 ......</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
