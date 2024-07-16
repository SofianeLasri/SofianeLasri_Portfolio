import {defineCollection, reference, z} from 'astro:content';

const technologiesCollection = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        name: z.string(),
        logo: image(),
        type: z.string()
    }),
});

const softSkill = z.object({
    preferred: z.boolean().optional().default(false),
    techno: reference('technologies'),
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

const projectsCollection = defineCollection({
    schema: ({image}) => z.object({
        category: z.string(),
        name: z.string(),
        description: z.string(),
        cover: image().refine((img) => img.width >= 1080, {
            message: "Cover image must be at least 1080 pixels wide!",
        }),
        usedTechnologies: z.array(reference('technologies')).optional(),
    }),
});

const educationCollection = defineCollection({
    schema: ({image}) => z.object({
        name: z.string(),
        description: z.string(),
        logo: image(),
        startDate: z.date(),
        endDate: z.date(),
    }),
});

const careerCollection = defineCollection({
    schema: ({image}) => z.object({
        name: z.string(),
        description: z.string(),
        logo: image(),
        startDate: z.date(),
        endDate: z.date().optional()
    }),
});

export const collections = {
    'homepage': softSkillsCollection,
    'projects': projectsCollection,
    'education': educationCollection,
    'career': careerCollection,
    'technologies': technologiesCollection,
};