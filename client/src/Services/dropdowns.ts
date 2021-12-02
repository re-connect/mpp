import { Dropdown, Dropdowns } from "../Types/Dropdowns";

export function getDropdownNameFromIri(dropdown: Dropdown, iri: string) {
  return dropdown[iri] ? dropdown[iri].name : '';
}

export function getDropdownValues(dropdowns: Dropdowns, type: string) {
  return dropdowns[type] ? dropdowns[type] : {}
}
