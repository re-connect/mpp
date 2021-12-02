import { Dropdown, Dropdowns } from "../Types/Dropdowns";

export function getDropdownNameFromIri(dropdown: Dropdown, iri: string) {
  return dropdown[iri] ? dropdown[iri].name : '';
}

export function getDropdownValues(dropdowns: Dropdowns, type: string) {
  return dropdowns[type] ? dropdowns[type] : {}
}

export function getDropdownOptionsArray(dropdowns: Dropdowns, type: string) {
  const dropdownValues = getDropdownValues(dropdowns, type);

  return Object.keys(dropdownValues).map((iri: string) => ({
    ...dropdownValues[iri], '@id': iri,
  }))
}
