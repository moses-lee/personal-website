export enum SectionType {
  TITLE = "title",
  SUBTITLE = "subtitle",
}

export interface section {
  title: string;
  type: SectionType;
  content: string;
}
