import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useBoolean } from 'react-hanger/array';
import styled from 'styled-components';
import DatePickerField from '../../../Components/DatePickerField';
import NumberField from '../../../Components/NumberField';
import UseFetchData from '../../../Hooks/UseFetchData';
import { buildEntityEndpoint } from '../../../Services/requests';
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

interface EditWorkshopProps {
  workshop: WorkshopInterface;
}

const EditWorkshopForm:React.FC<EditWorkshopProps> = ({ workshop }) => {
  const [isUsingVault, isUsingVaultActions] = useBoolean(workshop.usedVault);
  const [selectedDate, setSelectedDate] = React.useState(workshop.date);
  const entityUrl = buildEntityEndpoint(workshop);
  const updateWorkshop = UseFetchData(entityUrl, null, 'PUT');

  return (
    <Formik
      enableReinitialize
      initialValues={workshop}
      onSubmit={updateWorkshop}
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
  )
}

export default EditWorkshopForm;
