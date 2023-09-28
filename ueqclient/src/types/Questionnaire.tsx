import type { Catalog } from "./Catalog";

export interface Questionnaire {
  id: number;
  moduleId: number;
  module?: Catalog;
  projectId: number;
  project?: Catalog;
  createdDate: Date;
  attractiveness?: {
    annoying_enjoyable: number;
    bad_good: number;
    unlikable_pleasing: number;
    unpleasant_pleasant: number;
    unattractive_attractive: number;
    unfriendly_friendly: number;
  };
  novelty?: {
    dull_creative: number;
    usual_leadingEdge: number;
    conventional_inventive: number;
    conservative_innovative: number;
  };
  efficiency?: {
    slow_fast: number;
    inefficient_efficient: number;
    impractical_practical: number;
    cluttered_organized: number;
  };
  dependability?: {
    unpredictable_predictable: number;
    notSecure_secure: number;
    doesNotMeetExpectations_meetsExpectations: number;
    obstructive_supportive: number;
  };
  perspecuity?: {
    notUnderstandable_understandable: number;
    difficultToLearn_easyToLearn: number;
    complicated_easy: number;
    confusing_clear: number;
  };
  stimulation?: {
    inferior_valuable: number;
    boring_exciting: number;
    notInteresting_interesting: number;
    motivating_demotivating: number;
  };
}
