import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const AddMovie = ({ addNewMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(1);
  const [trailer, setTrailer] = useState("");
  const handleAdd = (e) => {
    let x = {
      id: Math.random(),
      title,
      description,
      posterUrl,
      rate,
      trailer,
    };
    addNewMovie(e, x);
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRate(1);
    setTrailer("");
    setShow(false);
  };

  return (
    <div>
      <Button
        onClick={handleShow}
        style={{
          marginLeft: "670px",
          marginBottom: "50px",
          width: "200px",
          height: "50px",
          fontWeight: "bold",
        }}
        variant="warning"
      >
        Add new movie
      </Button>{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <label style={{ fontSize: "16px", marginRight: "30px" }}>
                title
              </label>
              <input
                type="text"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
            </div>{" "}
            <div style={{ display: "flex" }}>
              <label style={{ fontSize: "16px", marginRight: "30px" }}>
                description
              </label>
              <input
                type="text"
                name="title"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
            </div>{" "}
            <div style={{ display: "flex" }}>
              <label style={{ fontSize: "16px", marginRight: "30px" }}>
                poster url
              </label>
              <input
                type="text"
                name="title"
                required
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </div>{" "}
            <div style={{ display: "flex" }}>
              <label style={{ fontSize: "16px", marginRight: "30px" }}>
                rate
              </label>
              <input
                type="text"
                name="title"
                required
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div style={{ display: "flex" }}>
              <label style={{ fontSize: "16px", marginRight: "30px" }}>
                Tariler url
              </label>
              <input
                type="text"
                name="title"
                required
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </div>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
