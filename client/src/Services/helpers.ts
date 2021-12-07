export function getIdFromIri(iri: string) {
  return iri.match(/\d+/);
}
