import type { Struct, Schema } from '@strapi/strapi';

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'magic';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummery: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'lightbulb';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    percentage: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skills.skills': SkillsSkills;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
