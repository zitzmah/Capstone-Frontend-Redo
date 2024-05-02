import { Form, Link, useLoaderData} from "react-router-dom"
import { useState } from 'react';
import '../Modal.module.css'
import styled from 'styled-components'

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
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
                <StyledButton>Add New Patient</StyledButton>
              </Form>
            </Modal>

            <div>
            {allPatients.map(aPatient => {
                console.log(aPatient)
                const id = aPatient.url.split("/")[4];
                console.log(id)

                return (
                    <div key={aPatient.id} className="aPatient">
                        <Patient>
                        <Link to={`/${id}`}>
                            <h1>Patient Name: {aPatient.name}</h1>
                        </Link>
                        <h2>Medical Record Number: {aPatient.mrn}</h2>
                        <h3>Blood Type: {aPatient.bloodType}</h3>
                        </Patient>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const Patient = styled.div`
    padding-top: 3rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    border: 1px solid white;
    display: inline-block;
    padding: 1rem;
`;

export default Index


