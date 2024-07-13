import {z, defineCollection, reference} from 'astro:content';

const softSkill = z.object({
    preferred: z.boolean().optional().default(false),
    technoType: z.string(),
    translatedTechnoType: z.string(),
    id: z.string(),
    name: z.string(),
    review: z.string(),
});

const softSkillsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        framework: z.array(softSkill),
        language: z.array(softSkill),
        additional: z.array(softSkill),
    })
});

export const collections = {
    'homepage': softSkillsCollection
};