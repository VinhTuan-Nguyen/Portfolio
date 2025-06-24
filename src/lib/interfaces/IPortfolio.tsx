
export default interface IPortfolio {
    [key: string]: {
        name: string
        description: string
        about?: About
        contact?: Contact
        projects?: Project[]
    }
}

interface Project {
    id: string
}

interface About {
    myStory: string[],
    skills: []
}

interface Contact {
    email: string
    location: string
    phone: string
    links: Links
}

interface Links {
    website: string
    github: string
    linkedin: string
}