import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function Patient({ patient }){

    const id = patient.url.split("/")[4];
    console.log(id)

    return(
        <div>
            <PatientContainer>
            <ShowLink to={`/patients/${id}`}>
                <h2>{patient.name}</h2>
            </ShowLink>
            
                <p>Date of Birth: {patient.dateOfBirth}</p>
                <p>Medical Record Number: {patient.mrn}</p>
                <p>Blood Type: {patient.bloodType}</p>
                <p>Antibody Screen Result: {patient.antibodyScreen}</p>
                <p>Antibody ID: {patient.antibodyID}</p>
            </PatientContainer>
        </div>
    )
}

const ShowLink = styled(Link)`
    color: white;
    &:hover {
        color: red;
    }
`

const PatientContainer = styled.div`
    margin-bottom: 5rem;
    border: 2px solid #ccc;
    color: white;
    padding: 2.5rem;
    display: inline-block;
    text-align: left;
`