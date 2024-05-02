import { Link, Form, useLoaderData } from "react-router-dom";
import styled from 'styled-components';
import StyledButton, { FancyButton } from '../components/Button/Button';



export default function Show(props) {
    const aPatient = useLoaderData();
    const id = aPatient?.url.split("/")[4];

    const formatDateOfBirth = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <PageContainer>
            <Title>
            <h1>{aPatient.name}</h1>
            <h2>Date of Birth: {formatDateOfBirth(aPatient.dateOfBirth)}</h2>
            <h2>Medical Record Number: {aPatient.mrn}</h2>
            </Title>

            <div>
                <Form action={`/update/${id}/`} method="POST">
                    <InputWrapper>
                    <label htmlFor="name">
                        Change patient name:
                        <input type="text" id="name" name="name" defaultValue={aPatient.name}/>
                    </label>
                    </InputWrapper>
                    
                    <InputWrapper>
                    <label htmlFor="dateOfBirth">
                        Change date of birth:
                        <input type="date" id="dateOfBirth" name="dateOfBirth" defaultValue={aPatient.dateOfBirth}/>
                    </label>
                    </InputWrapper>

                    <InputWrapper>
                    <label htmlFor="sex">
                        Change patient sex:
                        <input type="text" id="sex" name="sex" defaultValue={aPatient.sex}/>
                    </label>
                    </InputWrapper>

                    <InputWrapper>
                    <label htmlFor="mrn">
                        Change medical record number:
                        <input type="number" id="mrn" name="mrn" defaultValue={aPatient.mrn}/>
                    </label>
                    </InputWrapper>
                    
                    <InputWrapper>
                    <label htmlFor="bloodType">
                        Change blood type:
                        <input type="text" id="bloodType" name="bloodType" defaultValue={aPatient.bloodType}/>
                    </label>
                    </InputWrapper>

                    <InputWrapper>
                    <label htmlFor="antibodyScreen">
                        Change antibody screen result:
                        <input type="text" id="antibodyScreen" name="antibodyScreen" defaultValue={aPatient.antibodyScreen}/>
                    </label>
                    </InputWrapper>

                    <InputWrapper>
                    <label htmlFor="antibodyID">
                        Change antibody id:
                        <input type="text" id="antibodyID" name="antibodyID" defaultValue={aPatient.antibodyID}/>
                    </label>
                    </InputWrapper>

                    <ButtonWrapper>
                    <StyledButton>Update Patient Information</StyledButton>
                    </ButtonWrapper>
                </Form>

                <ButtonWrapper>
                <Form action={`/delete/${id}/`} method="post">
                        <StyledButton variant='outline'>Delete Patient Information</StyledButton>
                    </Form>
                </ButtonWrapper>

                <Link to="/">
                <ReturnButton to="/">Return to Home Page</ReturnButton>
                </Link>
            </div>

        </PageContainer>
    );
}

const PageContainer = styled.div`
    color: white;
    font-size: 18px;
`;

const InputWrapper=styled.div`
    margin: 5px;
    font-size: 18px;
    margin-left: 38%;
    text-align: left;
`

const ButtonWrapper=styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem;
`

const Title = styled.div`
    padding-bottom: 3rem;
`

const ReturnButton = styled(FancyButton)`
    position: absolute;
    top: 30rem;
    right: 20px;
`;