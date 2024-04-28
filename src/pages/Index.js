import { Form, Link, useLoaderData, useParams } from "react-router-dom"
import Header from '../components/Header';
import { useState } from 'react';
import '../Modal.module.css'

import StyledButton from '../components/Button/Button'

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          {children}
        </div>
      </div>
    );
  }

function Index() {
    const allPatients = useLoaderData()
    const {id} = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <h2>Create a Patient</h2>
            {/* <Form action="/create" method="post">
                <input type="input" name="name" id="name" placeholder="patient's name"/>
                <input type="date" name="dateOfBirth" id="dateOfBirth"/>
                <input type="text" name="sex" id="sex"/>
                <input type="number" name="mrn" id="mrn"/>
                <input type="text" name="bloodType" id="bloodType"/>
                <input type="text" name="antibodyScreen" id="antibodyScreen"/>
                <input type="text" name="antibodyID" id="antibodyID"/>
            </Form> */}

<StyledButton onClick={openModal}>Add New Patient</StyledButton>
            
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h3>Add a New Patient</h3>
              <Form action="/create" method="post" className="form">
                <label htmlFor="name">
                    Patient Name:
                    <input type="text" name="name" id="name"/>
                </label>

                <label htmlFor="dateOfBirth">
                    Date of Birth:
                    <input type="date" name="dateOfBirth" id="dateOfBirth"/>
                </label>

                <label htmlFor="sex">
                    Sex:
                    <input type="text" name="sex" id="sex"/>
                </label>

                <label htmlFor="mrn">
                    Medical Record Number:
                    <input type="number" name="mrn" id="mrn"/>
                </label>

                <label htmlFor="bloodType">
                    Blood Type:
                    <input type="text" name="bloodType" id="bloodType"/>
                </label>

                <label htmlFor="antibodyScreen">
                    Antibody Screen Result:
                    <input type="text" name="antibodyScreen" id="antibodyScreen"/>
                </label>

                <label htmlFor="antibodyID">
                    Antibody ID:
                    <input type="text" name="antibodyID" id="antibodyID"/>
                </label>
                <button>Add New Patient</button>
              </Form>
            </Modal>

            <div>
            {allPatients.map(aPatient => {
                console.log(aPatient)
                const id = aPatient.url.split("/")[4];
                console.log(id)

                return (
                    <div key={aPatient.id} className="aPatient">
                        <Link to={`/${id}`}>
                            <h1>{aPatient.name}</h1>
                        </Link>
                        <h1>{aPatient.mrn}</h1>
                        <h3>{aPatient.title}</h3>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Index