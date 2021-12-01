import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBoolean } from 'react-hanger/array';
import { Formik, FormikProps } from 'formik';
import DatePickerField from '../../../Components/DatePickerField';
import NumberField from '../../../Components/NumberField';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { workshopsEndpoint } from '../../../Services/requests';
import UseFetchDataEffect from '../../../Hooks/UseFetchDataEffect';
import { WorkshopInterface } from '../../../Types/Workshops';

const StyledForm = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  margin-top: 16px;
`;

const initialWorkshop: WorkshopInterface = {
  date: new Date(),
  center: '',
  globalReport: '',
  nbParticipants: 0,
  nbBeneficiariesAccounts: 0,
  nbStoredDocs: 0,
  nbCreatedEvents: 0,
  nbCreatedContacts: 0,
  nbCreatedNotes: 0,
  author: '',
  usedVault: false,
  participantKinds: [],
  equipmentSuppliers: [],
  ageBreakpoints: [],
  usedEquipments: [],
  topics: [],
  skills: [],
};

const EditWorkshopForm = () => {
  const {workshopId} = useParams();
  const [workshop, setWorkshop] = useState(initialWorkshop);
  const [isUsingVault, isUsingVaultActions] = useBoolean(workshop.usedVault);
  const [selectedDate, setSelectedDate] = React.useState(workshop.date);

  UseFetchDataEffect(`${workshopsEndpoint}/${parseInt(workshopId)}`, (data: any) => setWorkshop(data))

  useEffect(() => {
    isUsingVaultActions.setValue(workshop.usedVault);
    setSelectedDate(workshop.date);
  }, [workshop]);

  const update = () => {};
  return (
    <Container maxWidth='sm'>
      <Formik
        enableReinitialize
        initialValues={workshop}
        onSubmit={update}
        render={({handleChange, handleSubmit}: FormikProps<any>) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormRow>
              <DatePickerField label="Date" handleChange={setSelectedDate} value={selectedDate}/>
            </FormRow>
            <FormRow>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isUsingVault}
                    onChange={isUsingVaultActions.toggle}
                    inputProps={{'aria-label': 'controlled'}}
                    color='primary'
                  />
                } label='Coffre-fort numérique'/>
            </FormRow>
            {!isUsingVault ? null : (
              <FormGroup>
                <FormRow>
                  <NumberField
                    id='nbBeneficiariesAccounts'
                    label="Nombre de cfn crées"
                    defaultValue={workshop.nbBeneficiariesAccounts}
                    handleChange={handleChange}
                  />
                  <NumberField
                    id='nbStoredDocs'
                    label="Nombre de documents stockés"
                    defaultValue={workshop.nbStoredDocs}
                    handleChange={handleChange}/>
                </FormRow>
                <FormRow>
                  <NumberField
                    id='nbCreatedEvents'
                    label="Évènements ajoutés"
                    defaultValue={workshop.nbCreatedEvents}
                    handleChange={handleChange}/>
                  <NumberField
                    id='nbCreatedContacts'
                    label="Contacts ajoutés"
                    defaultValue={workshop.nbCreatedContacts}
                    handleChange={handleChange}/>
                  <NumberField
                    id='nbCreatedNotes'
                    label="Notes ajoutées"
                    defaultValue={workshop.nbCreatedNotes}
                    handleChange={handleChange}/>
                </FormRow>
              </FormGroup>
            )}
            <FormRow>
              <Button variant='contained' color='primary' type='submit'>Mettre à jour</Button>
            </FormRow>
          </StyledForm>
        )}
      />
    </Container>
  )
}

export default EditWorkshopForm;
