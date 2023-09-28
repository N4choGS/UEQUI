export interface QuestionnaireRequest {
  projectIds: string[] | null;
  moduleIds: string[] | null;
  startDate: Date | null;
  endDate: Date | null;
}
