export enum Gender {
    FEMALE = 'female',
    MALE = 'male'
}

export enum NameTitle {
    MR = 'Mr',
    MS = 'Ms',
    MISS = 'Miss'
}

export interface UserProps {
    user: UserType
    onClick?: () => void
}

export interface UserType {
    gender: Gender,
    name: {
        title?: NameTitle,
        first: string,
        last: string
    },
    location?: {
        street?: {
            number?: number,
            name?: string
        },
        city?: string,
        state?: string,
        country?: string,
        postcode?: number,
        coordinates?: {
            latitude?: string,
            longitude?: string
        },
        timezone?: {
            offset?: string,
            description?: string
        }
    },
    email?: string,
    login?: {
        uuid?: string,
        username?: string,
        password?: string,
        salt?: string,
        md5?: string,
        sha1?: string,
        sha256?: string
    },
    dob: {
        date?: string,
        age: number
    },
    registered?: {
        date?: string,
        age?: number
    },
    phone?: string,
    cell?: string,
    picture: {
        large?: string,
        medium?: string,
        thumbnail: string
    }
}