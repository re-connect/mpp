import { addMinutes } from 'date-fns';

export function getIdFromIri(iri: string) {
  return iri.match(/\d+/);
}

export function getDateWithoutTimezoneOffset(date: Date) {
  return addMinutes(date, -date.getTimezoneOffset());
}
