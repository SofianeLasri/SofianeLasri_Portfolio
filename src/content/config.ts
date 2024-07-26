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

export type SoftSkill = z.infer<typeof softSkill>;

const softSkillsCollection = defineCollection({
    type: 'data',
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
        usedTechnologies: z.array(reference('technologies')).optional(),
        cover: image().refine((img) => img.width >= 1080, {
            message: "Cover image must be at least 1080 pixels wide!",
        }),
        logo: image().refine((img) => img.width >= 200 && img.width === img.height, {
            message: "Logo must be at least 200x200 pixels!",
        }),
        medias: z.array(image()).optional(),
        videos: z.array(z.object({
            src: z.string().url(),
            cover: image()
        })).optional(),
        startDate: z.date(),
        endDate: z.date(),
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
    'soft-skills': softSkillsCollection,
    'projects': projectsCollection,
    'education': educationCollection,
    'career': careerCollection,
    'technologies': technologiesCollection,
};